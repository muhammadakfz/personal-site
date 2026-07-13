"use client";

import { FitAddon } from "@xterm/addon-fit";
import { WebLinksAddon } from "@xterm/addon-web-links";
import { Terminal } from "@xterm/xterm";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

type FsNode = { type: "dir"; children: string[] } | { type: "file"; content: string[] };

const HOME = "/root";
const COMMANDS = [
  "help", "man", "ls", "cd", "pwd", "cat", "tree", "whoami", "id", "hostname",
  "uname", "date", "history", "echo", "env", "which", "clear", "neofetch", "open",
  "about", "projects", "skills", "experience", "contact", "resume", "matrix", "coffee",
];

const FS: Record<string, FsNode> = {
  "/": { type: "dir", children: ["bin", "etc", "home", "opt", "tmp", "usr", "var"] },
  "/bin": { type: "dir", children: ["cat", "clear", "date", "echo", "ls", "pwd", "tree", "uname"] },
  "/etc": { type: "dir", children: ["hostname", "motd", "os-release"] },
  "/etc/hostname": { type: "file", content: ["muhammadakfz"] },
  "/etc/motd": { type: "file", content: ["Welcome to muhammadakfz Linux.", "This root filesystem is read-only by design."] },
  "/etc/os-release": { type: "file", content: ["NAME=\"muhammadakfz Linux\"", "VERSION=\"1.0 Workstation\"", "ID=muhammadakfz", "PRETTY_NAME=\"muhammadakfz Linux 1.0\""] },
  "/home": { type: "dir", children: ["root"] },
  [HOME]: { type: "dir", children: ["about.txt", "contact.txt", "experience.log", "projects", "resume.txt", "skills"] },
  [`${HOME}/about.txt`]: { type: "file", content: [
    "MUHAMMADAKFZ / SOFTWARE & AI DEVELOPER", "",
    "Developer and physics student building thoughtful software, AI systems,",
    "and tools that turn complex ideas into useful products.", "",
    "Focus: full-stack engineering, applied AI, and technical research.",
    "Interests: developer tools, machine learning, and human-centered systems.",
  ] },
  [`${HOME}/contact.txt`]: { type: "file", content: [
    "GitHub   https://github.com/muhammadakfz",
    "LinkedIn https://www.linkedin.com/in/muhammadakfz",
    "Email    mailto:muhammadakfz@gmail.com",
    "Status   available for thoughtful collaborations",
  ] },
  [`${HOME}/experience.log`]: { type: "file", content: [
    "2026-07  Software & AI Projects", "         Building full-stack tools and applied AI experiments.",
    "2026-05  Technical Research", "         Exploring physics, computation, and intelligent systems.",
    "NOW      Open to the next meaningful challenge.",
  ] },
  [`${HOME}/resume.txt`]: { type: "file", content: [
    "muhammadakfz — Software & AI Developer", "",
    "Frontend: React, Next.js, Tailwind CSS", "Backend: Node.js, Python, FastAPI",
    "AI: Machine Learning, LLM, Computer Vision", "Tools: Docker, Linux, Git", "",
    "Download the full file with: resume",
  ] },
  [`${HOME}/projects`]: { type: "dir", children: ["ai-research-lab.md", "developer-toolkit.md", "physics-notes.md"] },
  [`${HOME}/projects/ai-research-lab.md`]: { type: "file", content: [
    "# AI Research Lab", "Experimental machine-learning systems and LLM workflows.",
    "Stack: Python, FastAPI, LLM, Docker", "Status: active", "Open: open ai-research-lab",
  ] },
  [`${HOME}/projects/developer-toolkit.md`]: { type: "file", content: [
    "# Developer Toolkit", "A focused collection of automation and engineering utilities.",
    "Stack: Next.js, Node.js, Tailwind CSS", "Status: shipped", "Open: open developer-toolkit",
  ] },
  [`${HOME}/projects/physics-notes.md`]: { type: "file", content: [
    "# Physics Notes", "Technical writing on waves, systems, and computation.",
    "Stack: MDX, KaTeX", "Status: published", "Open: open physics-notes",
  ] },
  [`${HOME}/skills`]: { type: "dir", children: ["ai.conf", "backend.conf", "frontend.conf", "tools.conf"] },
  [`${HOME}/skills/frontend.conf`]: { type: "file", content: ["React", "Next.js", "Tailwind CSS"] },
  [`${HOME}/skills/backend.conf`]: { type: "file", content: ["Node.js", "Python", "FastAPI"] },
  [`${HOME}/skills/ai.conf`]: { type: "file", content: ["Machine Learning", "Large Language Models", "Computer Vision"] },
  [`${HOME}/skills/tools.conf`]: { type: "file", content: ["Docker", "Linux", "Git"] },
  "/opt": { type: "dir", children: ["muhammadakfz"] },
  "/opt/muhammadakfz": { type: "dir", children: ["README"] },
  "/opt/muhammadakfz/README": { type: "file", content: ["muhammadakfz Linux workstation runtime.", "Built with Next.js, React, xterm.js, and Framer Motion."] },
  "/tmp": { type: "dir", children: [] },
  "/usr": { type: "dir", children: ["bin", "share"] },
  "/usr/bin": { type: "dir", children: ["env", "id", "man", "neofetch", "which", "whoami"] },
  "/usr/share": { type: "dir", children: [] },
  "/var": { type: "dir", children: ["log"] },
  "/var/log": { type: "dir", children: ["boot.log"] },
  "/var/log/boot.log": { type: "file", content: ["All muhammadakfz services started successfully."] },
};

const PROJECT_URLS: Record<string, string> = {
  "ai-research-lab": "https://github.com/muhammadakfz",
  "developer-toolkit": "https://github.com/muhammadakfz",
  "physics-notes": "https://github.com/muhammadakfz/personal-site",
};

const cyan = (text: string) => `\x1b[38;2;95;215;255m${text}\x1b[0m`;
const green = (text: string) => `\x1b[38;2;253;61;181m${text}\x1b[0m`;
const blue = (text: string) => `\x1b[38;2;103;164;255m${text}\x1b[0m`;
const dim = (text: string) => `\x1b[38;2;118;128;128m${text}\x1b[0m`;
const bold = (text: string) => `\x1b[1m${text}\x1b[0m`;
const lines = (terminal: Terminal, content: string[]) => content.forEach((line) => terminal.writeln(line));

const normalizePath = (cwd: string, input = ".") => {
  const expanded = input === "~" || input.startsWith("~/") ? `${HOME}${input.slice(1)}` : input;
  const source = expanded.startsWith("/") ? expanded : `${cwd}/${expanded}`;
  const parts: string[] = [];
  source.split("/").forEach((part) => {
    if (!part || part === ".") return;
    if (part === "..") parts.pop(); else parts.push(part);
  });
  return `/${parts.join("/")}` || "/";
};

const displayPath = (path: string) => path === HOME ? "~" : path.startsWith(`${HOME}/`) ? `~${path.slice(HOME.length)}` : path;

export default function TerminalPortfolio() {
  const terminalElement = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<Terminal | null>(null);
  const inputRef = useRef("");
  const historyRef = useRef<string[]>([]);
  const historyIndexRef = useRef(0);
  const cwdRef = useRef(HOME);
  const bootedRef = useRef(false);

  const prompt = useCallback(() => `${green("root@muhammadakfz")}:${blue(displayPath(cwdRef.current))}# `, []);
  const writePrompt = useCallback((terminal: Terminal) => terminal.write(`\r\n${prompt()}`), [prompt]);

  const replaceInput = useCallback((terminal: Terminal, next: string) => {
    while (inputRef.current.length) {
      terminal.write("\b \b");
      inputRef.current = inputRef.current.slice(0, -1);
    }
    inputRef.current = next;
    terminal.write(next);
  }, []);

  const showHelp = (terminal: Terminal) => lines(terminal, [
    bold("MUHAMMADAKFZ LINUX — COMMAND REFERENCE"), "",
    `${green("Filesystem")}  ls [-la] · cd <dir> · pwd · cat <file> · tree [dir]`,
    `${green("System    ")}  whoami · id · hostname · uname [-a] · date · env · which`,
    `${green("Shell     ")}  echo · history · man <command> · clear`,
    `${green("Workspace ")}  about · projects · skills · experience · contact · resume`,
    `${green("Extras    ")}  neofetch · matrix · coffee · sudo hire muhammadakfz`, "",
    dim("Use ↑/↓ for history, Tab for completion, and Ctrl+L to clear."),
  ]);

  const printTree = (terminal: Terminal, path: string, prefix = "", depth = 0) => {
    const node = FS[path];
    if (!node || node.type !== "dir" || depth > 4) return;
    node.children.forEach((name, index) => {
      const childPath = normalizePath(path, name);
      const child = FS[childPath];
      const last = index === node.children.length - 1;
      terminal.writeln(`${prefix}${last ? "└── " : "├── "}${child?.type === "dir" ? blue(name + "/") : name}`);
      if (child?.type === "dir") printTree(terminal, childPath, `${prefix}${last ? "    " : "│   "}`, depth + 1);
    });
  };

  const runCommand = useCallback((terminal: Terminal, raw: string) => {
    const commandLine = raw.trim();
    const [command = "", ...args] = commandLine.split(/\s+/);
    const cmd = command.toLowerCase();
    if (!cmd) return writePrompt(terminal);
    if (cmd === "clear") {
      terminal.clear();
      terminal.write("\x1b[2J\x1b[H\x1b[2K");
      terminal.write(prompt());
      return;
    }

    terminal.write("\r\n");
    switch (cmd) {
      case "help": showHelp(terminal); break;
      case "pwd": terminal.writeln(cwdRef.current); break;
      case "whoami": terminal.writeln("root"); break;
      case "id": terminal.writeln("uid=0(root) gid=0(root) groups=0(root),27(sudo),999(docker)"); break;
      case "hostname": terminal.writeln("muhammadakfz"); break;
      case "uname": terminal.writeln(args.includes("-a") ? "Linux muhammadakfz 6.12.0-root #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux" : "Linux"); break;
      case "date": terminal.writeln(new Date().toString()); break;
      case "echo": terminal.writeln(args.join(" ").replace(/^['\"]|['\"]$/g, "")); break;
      case "env": lines(terminal, ["SHELL=/bin/zsh", `HOME=${HOME}`, "USER=root", "HOSTNAME=muhammadakfz", "LANG=en_US.UTF-8", "TERM=xterm-256color", "MUHAMMADAKFZ_MODE=production"]); break;
      case "history": historyRef.current.forEach((entry, index) => terminal.writeln(`${String(index + 1).padStart(4)}  ${entry}`)); break;
      case "which": {
        const target = args[0] || "";
        terminal.writeln(COMMANDS.includes(target) || ["sudo", "open"].includes(target) ? `/usr/bin/${target}` : `which: no ${target || "command"} in PATH`);
        break;
      }
      case "man": {
        const target = args[0];
        if (!target) terminal.writeln("What manual page do you want?");
        else if (!COMMANDS.includes(target) && !["sudo", "open"].includes(target)) terminal.writeln(`No manual entry for ${target}`);
        else lines(terminal, [bold(target.toUpperCase()), "", `NAME`, `       ${target} — muhammadakfz Linux command`, "", "SYNOPSIS", `       ${target} [arguments]`, "", dim("This is a browser-hosted, read-only root system.")]);
        break;
      }
      case "ls": {
        const flags = args.filter((arg) => arg.startsWith("-"));
        const targetArg = args.find((arg) => !arg.startsWith("-")) || ".";
        const path = normalizePath(cwdRef.current, targetArg);
        const node = FS[path];
        if (!node) terminal.writeln(`ls: cannot access '${targetArg}': No such file or directory`);
        else if (node.type === "file") terminal.writeln(targetArg);
        else if (flags.some((flag) => flag.includes("l"))) {
          terminal.writeln(`total ${node.children.length}`);
          node.children.forEach((name) => {
            const child = FS[normalizePath(path, name)];
            const mode = child?.type === "dir" ? "dr-xr-xr-x" : "-r--r--r--";
            terminal.writeln(`${mode}  1 root root ${String(child?.type === "file" ? child.content.join("\n").length : 4096).padStart(5)} Jul 13  ${child?.type === "dir" ? blue(name + "/") : name}`);
          });
        } else terminal.writeln(node.children.map((name) => FS[normalizePath(path, name)]?.type === "dir" ? blue(`${name}/`) : name).join("   "));
        break;
      }
      case "cd": {
        const target = args[0] || "~";
        const path = normalizePath(cwdRef.current, target);
        const node = FS[path];
        if (!node) terminal.writeln(`zsh: cd: no such file or directory: ${target}`);
        else if (node.type !== "dir") terminal.writeln(`zsh: cd: not a directory: ${target}`);
        else cwdRef.current = path;
        break;
      }
      case "cat": {
        if (!args.length) terminal.writeln("cat: missing file operand");
        args.forEach((arg) => {
          const node = FS[normalizePath(cwdRef.current, arg)];
          if (!node) terminal.writeln(`cat: ${arg}: No such file or directory`);
          else if (node.type === "dir") terminal.writeln(`cat: ${arg}: Is a directory`);
          else lines(terminal, node.content);
        });
        break;
      }
      case "tree": {
        const path = normalizePath(cwdRef.current, args[0] || ".");
        const node = FS[path];
        if (!node) terminal.writeln(`tree: ${args[0]}: No such file or directory`);
        else if (node.type === "file") terminal.writeln(args[0]);
        else { terminal.writeln(blue(displayPath(path))); printTree(terminal, path); }
        break;
      }
      case "about": lines(terminal, (FS[`${HOME}/about.txt`] as { type: "file"; content: string[] }).content); break;
      case "projects": terminal.writeln(`${blue("~/projects/")}\r\n`), printTree(terminal, `${HOME}/projects`); break;
      case "skills": {
        const files = ["frontend.conf", "backend.conf", "ai.conf", "tools.conf"];
        files.forEach((file) => {
          const content = (FS[`${HOME}/skills/${file}`] as { type: "file"; content: string[] }).content;
          terminal.writeln(`${green(file.replace(".conf", "").toUpperCase().padEnd(9))} ${content.join(" · ")}`);
        });
        break;
      }
      case "experience": lines(terminal, (FS[`${HOME}/experience.log`] as { type: "file"; content: string[] }).content); break;
      case "contact": lines(terminal, (FS[`${HOME}/contact.txt`] as { type: "file"; content: string[] }).content); break;
      case "resume": lines(terminal, [`${green("✓")} Resume mounted and ready.`, `${dim("Download:")} ${window.location.origin}/resume.txt`]); break;
      case "open": {
        const project = args.join("-").toLowerCase();
        const url = PROJECT_URLS[project];
        if (!url) terminal.writeln(`open: project not found: ${args.join(" ") || "missing-name"}`);
        else { terminal.writeln(`${green("opening")} ${project} → ${url}`); window.open(url, "_blank", "noopener,noreferrer"); }
        break;
      }
      case "neofetch": lines(terminal, [
        `${green("        .--.")}        ${bold("root@muhammadakfz")}`,
        `${green("       |o_o |")}       -----------------`,
        `${green("       |:_/ |")}       ${cyan("OS")}       muhammadakfz Linux 1.0`,
        `${green("      //   \\ \\")}      ${cyan("Host")}     Private Workstation`,
        `${green("     (|     | )")}      ${cyan("Kernel")}   6.12.0-root`,
        `${green("    /'\\_   _/`\\")}     ${cyan("Shell")}    zsh 5.9`,
        `${green("    \\___)=(___/")}     ${cyan("Stack")}    Next.js + xterm.js`,
        `                     ${cyan("Focus")}    Software + AI`,
      ]); break;
      case "sudo":
        if (args.join(" ").toLowerCase() === "hire muhammadakfz") lines(terminal, [green("[sudo] authorization accepted."), "Starting secure recruitment channel…", "mailto:muhammadakfz@gmail.com"]);
        else terminal.writeln("root is not permitted to modify this read-only system.");
        break;
      case "coffee": lines(terminal, ["      ( (", "       ) )", "    ........", "    |      |]", "    \\      /", "     `----'", "", cyan("Compiling ideas into software…")]); break;
      case "matrix": {
        terminal.writeln(green("Wake up, muhammadakfz…"));
        const chars = "01アイウエオカキクケコ";
        for (let row = 0; row < 10; row += 1) terminal.writeln(`\x1b[38;2;${25 + row * 5};${120 + row * 10};70m${Array.from({ length: Math.min(70, terminal.cols - 2) }, () => chars[Math.floor(Math.random() * chars.length)]).join("")}\x1b[0m`);
        break;
      }
      case "rm": case "mkdir": case "touch": case "chmod": case "apt": case "apt-get":
        terminal.writeln(`${cmd}: read-only filesystem`); break;
      default:
        terminal.writeln(`zsh: command not found: ${command}`);
        terminal.writeln(dim("Type 'help' or 'man <command>' for assistance."));
    }
    writePrompt(terminal);
  }, [prompt, writePrompt]);

  useEffect(() => {
    if (!terminalElement.current) return;
    const terminal = new Terminal({
      cursorBlink: true, cursorStyle: "block", cursorInactiveStyle: "outline", convertEol: true,
      fontFamily: '"JetBrains Mono", "SFMono-Regular", Consolas, monospace', fontSize: 14,
      lineHeight: 1.5, letterSpacing: 0.1, scrollback: 2000,
      theme: { background: "#050505", foreground: "#d3dcda", cursor: "#FD3DB5", cursorAccent: "#050505", selectionBackground: "#4b1739" },
    });
    const fit = new FitAddon();
    terminal.loadAddon(fit);
    terminal.loadAddon(new WebLinksAddon((_event, uri) => window.open(uri, "_blank", "noopener,noreferrer")));
    terminal.open(terminalElement.current);
    terminalRef.current = terminal;
    const fitTerminal = () => { try { fit.fit(); } catch { /* layout transition */ } };
    const observer = new ResizeObserver(fitTerminal);
    observer.observe(terminalElement.current);
    fitTerminal();

    const onZoomKeyDown = (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey)) return;
      const key = event.key;
      if (!["+", "=", "-", "0"].includes(key)) return;
      event.preventDefault();
      const currentSize = terminal.options.fontSize ?? 14;
      terminal.options.fontSize = key === "0" ? 14 : Math.min(24, Math.max(10, currentSize + (key === "-" ? -1 : 1)));
      fitTerminal();
    };
    window.addEventListener("keydown", onZoomKeyDown);

    let cancelled = false;
    const boot = async () => {
      // Keep the startup delay, but leave the kernel/service chatter behind the scenes.
      await new Promise((resolve) => window.setTimeout(resolve, 420));
      if (cancelled) return;
      terminal.writeln(dim("Type 'help' to explore."));
      terminal.writeln(dim("Try 'ls -la' to inspect the filesystem."));
      terminal.writeln("");
      terminal.write(prompt());
      bootedRef.current = true;
      terminal.focus();
    };
    boot();

    const disposable = terminal.onData((data) => {
      if (!bootedRef.current) return;
      const code = data.charCodeAt(0);
      if (data === "\r") {
        const value = inputRef.current;
        if (value.trim()) historyRef.current.push(value);
        historyIndexRef.current = historyRef.current.length;
        inputRef.current = "";
        runCommand(terminal, value);
      } else if (data === "\u000c") {
        terminal.clear(); terminal.write("\x1b[2J\x1b[H\x1b[2K"); terminal.write(prompt()); inputRef.current = "";
      } else if (data === "\u0003") {
        terminal.write("^C"); inputRef.current = ""; writePrompt(terminal);
      } else if (data === "\u007F") {
        if (inputRef.current.length) { inputRef.current = inputRef.current.slice(0, -1); terminal.write("\b \b"); }
      } else if (data === "\u001b[A") {
        if (historyIndexRef.current > 0) historyIndexRef.current -= 1;
        replaceInput(terminal, historyRef.current[historyIndexRef.current] || "");
      } else if (data === "\u001b[B") {
        if (historyIndexRef.current < historyRef.current.length) historyIndexRef.current += 1;
        replaceInput(terminal, historyRef.current[historyIndexRef.current] || "");
      } else if (data === "\t") {
        const query = inputRef.current.toLowerCase();
        const firstToken = query.split(/\s+/)[0];
        if (!query.includes(" ")) {
          const matches = [...COMMANDS, "sudo"].filter((item) => item.startsWith(firstToken));
          if (matches.length === 1) replaceInput(terminal, matches[0]);
          else if (matches.length > 1) terminal.write(`\r\n${matches.join("  ")}\r\n${prompt()}${inputRef.current}`);
        } else if (["cd", "cat", "ls", "tree"].includes(firstToken)) {
          const partial = query.slice(firstToken.length + 1);
          const parentInput = partial.includes("/") ? partial.slice(0, partial.lastIndexOf("/") + 1) : "";
          const fragment = partial.slice(parentInput.length);
          const parent = FS[normalizePath(cwdRef.current, parentInput || ".")];
          if (parent?.type === "dir") {
            const matches = parent.children.filter((name) => name.startsWith(fragment));
            if (matches.length === 1) replaceInput(terminal, `${firstToken} ${parentInput}${matches[0]}`);
          }
        }
      } else if (code >= 32 && code !== 127) { inputRef.current += data; terminal.write(data); }
    });

    return () => {
      cancelled = true; disposable.dispose(); observer.disconnect(); window.removeEventListener("keydown", onZoomKeyDown); terminal.dispose();
      terminalRef.current = null; bootedRef.current = false;
    };
  }, [prompt, replaceInput, runCommand, writePrompt]);

  return (
    <main className="workstation">
      <div className="ambient-grid" aria-hidden="true" />
      <motion.section className="terminal-shell" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55 }}>
        <div className="terminal-stage" onClick={() => terminalRef.current?.focus()}>
          <div ref={terminalElement} className="terminal" aria-label="muhammadakfz Linux zsh terminal. Type help for available commands." />
        </div>
      </motion.section>
    </main>
  );
}

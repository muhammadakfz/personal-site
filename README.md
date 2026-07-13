# muhammadakfz Linux Terminal

An interactive developer portfolio built as a read-only Linux workstation. Visitors can navigate a virtual root filesystem and explore muhammadakfz's profile, work, skills, experience, contact channels, and resume with familiar shell commands.

## Features

- xterm.js-powered terminal input and rendering
- Linux boot sequence, path-aware prompt, command history, and Tab autocomplete
- virtual filesystem with `ls`, `cd`, `pwd`, `cat`, and `tree`
- system commands including `uname`, `whoami`, `id`, `env`, `date`, `which`, and `man`
- project launcher and clickable contact links
- responsive quick-command dock for mobile
- `neofetch` plus hidden `matrix`, `coffee`, and `sudo hire muhammadakfz` commands
- reduced-motion support and keyboard-first interaction

## Stack

- Next.js 15 and React 19
- Tailwind CSS 4
- Framer Motion
- xterm.js
- OpenNext for Cloudflare-compatible output

## Development

```sh
npm install
npm run dev
```

## Validation

```sh
npm run build
npm run build:sites
```

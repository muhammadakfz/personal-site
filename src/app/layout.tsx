import type { Metadata, Viewport } from "next";
import "@xterm/xterm/css/xterm.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "muhammadakfz Linux — Root Terminal",
  description:
    "Explore muhammadakfz's software, AI systems, and technical projects through an interactive root workstation.",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

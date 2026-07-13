"use client";

import dynamic from "next/dynamic";

const TerminalPortfolio = dynamic(() => import("@/components/TerminalPortfolio"), {
  ssr: false,
  loading: () => <main className="workstation" aria-label="Initializing terminal portfolio" />,
});

export default function Home() {
  return <TerminalPortfolio />;
}

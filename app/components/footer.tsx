export default function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col sm:flex-row gap-4 text-sm text-neutral-500">
        <a href="/rss" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">RSS</a>
        <span className="hidden sm:inline">·</span>
        <a href="https://github.com/muhammadakfz" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">GitHub</a>
        <span className="hidden sm:inline">·</span>
        <a href="mailto:muhammadakfz@gmail.com" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">Email</a>
      </div>
      <p className="mt-4 text-xs text-neutral-400">© {new Date().getFullYear()} muhammadakfz</p>
    </footer>
  )
}

import Link from 'next/link'

const navItems = [
  { href: '/', name: 'home' },
  { href: '/blog', name: 'blog' },
  { href: '/contact', name: 'contact' },
]

export function Navbar() {
  return (
    <aside className="mb-12 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row items-center justify-between gap-4" id="nav">
          <Link href="/" className="font-semibold text-lg hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors">
            muhammadakfz
          </Link>
          <div className="flex flex-row items-center gap-4 text-sm text-neutral-500">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  )
}

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Hi, I&apos;m <span className="text-neutral-400">muhammadakfz</span>
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Software developer and physics student building thoughtful software, AI systems,
          and tools that turn complex ideas into useful products.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-flow-dense grid-cols-2 auto-rows-[72px] sm:auto-rows-[112px] gap-2">
        <div className="relative row-span-4 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 group">
          <Image
            src="/profile.jpeg"
            alt="Portrait of muhammadakfz"
            fill
            priority
            className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.025] group-hover:grayscale-0"
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-4 text-white">
            <p className="text-sm font-medium">muhammadakfz</p>
            <p className="mt-1 text-[11px] leading-snug text-white/65">
              Developer · Physics student
            </p>
          </div>
        </div>

        <div className="relative row-span-3 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 group">
          <Image
            src="/bento-software.jpg"
            alt="Minimal coding workspace"
            fill
            className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.035] group-hover:grayscale-0"
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-4 text-white">
            <p className="text-sm font-medium">Software</p>
            <p className="mt-1 text-[11px] leading-snug text-white/65">
              Full-stack · Applied AI
            </p>
          </div>
        </div>

        <div className="relative row-span-4 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 group">
          <Image
            src="/bento-waves.jpg"
            alt="Monochrome ocean waves"
            fill
            className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.045] group-hover:grayscale-0"
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-4 text-white">
            <p className="text-sm font-medium">Wave Studies</p>
            <p className="mt-1 text-[11px] leading-snug text-white/65">
              Waves · Vibrations
            </p>
          </div>
        </div>

        <div className="relative row-span-3 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 group">
          <Image
            src="/bento-prism.jpg"
            alt="A glass prism refracting light"
            fill
            className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.045] group-hover:grayscale-0"
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-4 text-white">
            <p className="text-sm font-medium">Physics</p>
            <p className="mt-1 text-[11px] leading-snug text-white/65">
              Light · Optics
            </p>
          </div>
        </div>

      </div>

      {/* About */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">About</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
            Developer focused on full-stack engineering, applied AI, and technical research.
            Passionate about creating tools that make complex concepts accessible.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
            When not coding, I explore physics—particularly waves, vibrations, and the
            mathematics that describes them.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
            I enjoy problems where the theory matters as much as the interface: turning
            equations, experiments, and rough prototypes into software people can actually use.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Stack</h2>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-neutral-500 mb-1">Frontend</p>
              <div className="flex flex-wrap gap-1">
                {['React', 'Next.js', 'TypeScript', 'Tailwind'].map(s => (
                  <span key={s} className="px-2 py-0.5 text-xs rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-neutral-500 mb-1">Backend</p>
              <div className="flex flex-wrap gap-1">
                {['Node.js', 'Python', 'FastAPI', 'PostgreSQL'].map(s => (
                  <span key={s} className="px-2 py-0.5 text-xs rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-neutral-500 mb-1">AI/ML</p>
              <div className="flex flex-wrap gap-1">
                {['PyTorch', 'LLMs', 'Computer Vision'].map(s => (
                  <span key={s} className="px-2 py-0.5 text-xs rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Focus */}
      <div className="border-y border-neutral-200 py-8 dark:border-neutral-800 space-y-8">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[140px_1fr] md:gap-8">
          <h2 className="text-lg font-semibold">Current Focus</h2>
          <div className="space-y-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            <p>
              I&apos;m currently studying wave phenomena and numerical methods while building
              small tools around AI-assisted workflows and technical learning.
            </p>
            <p>
              The goal is simple: understand the underlying ideas properly, then turn them
              into clear experiments, useful software, and writing I can return to later.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-[140px_1fr] md:gap-8">
          <h2 className="text-lg font-semibold">Interests</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium">Scientific computing</p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                Simulations, numerical models, waves, and visual explanations.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Applied AI</p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                Small systems that support real work without hiding how they operate.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Product engineering</p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                Thoughtful interfaces backed by dependable full-stack systems.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Technical writing</p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                Notes that connect equations, code, experiments, and lessons learned.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Explore</h2>
          <p className="max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            Read my longer notes in Writing, browse the code behind my projects, or send me
            a message if you want to discuss software, physics, or an idea worth building.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/blog" className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors text-sm">Writing</Link>
          <a href="https://github.com/muhammadakfz" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors text-sm">GitHub</a>
          <Link href="/contact" className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors text-sm">Contact</Link>
          <a href="/rss" className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors text-sm">RSS</a>
        </div>
      </div>

    </section>
  )
}

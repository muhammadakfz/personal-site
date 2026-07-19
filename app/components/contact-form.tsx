'use client'

import type { FormEvent } from 'react'

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const subject = String(form.get('subject') || 'Hello from your website')
    const message = String(form.get('message') || '')
    const body = `${message}\n\n—\nFrom: ${name}\nEmail: ${email}`

    window.location.href = `mailto:muhammadakfz@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const inputClass = 'w-full rounded-lg border border-neutral-200 bg-transparent px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-500 dark:border-neutral-800 dark:focus:border-neutral-500'

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="space-y-1.5 text-sm">
          <span className="font-medium">Name</span>
          <input className={inputClass} type="text" name="name" autoComplete="name" placeholder="Your name" required />
        </label>
        <label className="space-y-1.5 text-sm">
          <span className="font-medium">Email</span>
          <input className={inputClass} type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
      </div>

      <label className="block space-y-1.5 text-sm">
        <span className="font-medium">Subject</span>
        <input className={inputClass} type="text" name="subject" placeholder="What would you like to discuss?" required />
      </label>

      <label className="block space-y-1.5 text-sm">
        <span className="font-medium">Message</span>
        <textarea className={`${inputClass} min-h-36 resize-y`} name="message" placeholder="Tell me a little about your idea..." required />
      </label>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-neutral-500">Submitting opens your default email app.</p>
        <button type="submit" className="rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white">
          Send message
        </button>
      </div>
    </form>
  )
}

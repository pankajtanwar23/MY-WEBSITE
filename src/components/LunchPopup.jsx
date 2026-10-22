'use client'
import { useEffect, useState } from 'react'

// Weekend-lunch announcement. Shows once per browser session, on the home page.
// Brand colours: orange #E25439, off-white #F5F4E0, dark green #1E3227.
const STORAGE_KEY = 'knead-lunch-popup-seen'

export default function LunchPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === '1'
    } catch {}
    if (seen) return
    const t = setTimeout(() => setOpen(true), 1200)
    return () => clearTimeout(t)
  }, [])

  function close() {
    setOpen(false)
    try {
      sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {}
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lunch-popup-title"
        className="relative w-full max-w-md rounded-[2rem] bg-[#E25439] px-8 py-10 text-center text-[#F5F4E0] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl font-bold leading-none text-[#F5F4E0] hover:bg-black/10"
        >
          &times;
        </button>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em]">
          Knead Pizzeria
        </p>
        <h2
          id="lunch-popup-title"
          className="text-3xl font-black uppercase leading-tight tracking-tight md:text-4xl"
        >
          Now open for lunch
        </h2>
        <p className="mt-4 text-lg font-bold">
          From 12 pm every Saturday &amp; Sunday
        </p>
        <p className="mt-2 text-sm font-bold opacity-90">
          Try our new San-Dough&rsquo;s, available 12&ndash;3 pm
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#san-dough"
            onClick={close}
            className="rounded-full bg-[#F5F4E0] px-6 py-3 text-sm font-black uppercase tracking-widest text-[#E25439] hover:scale-105 transition-transform"
          >
            See San-Dough&rsquo;s
          </a>
          <a
            href="https://knead-pizzerria.square.site"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-[#F5F4E0] px-6 py-3 text-sm font-black uppercase tracking-widest text-[#F5F4E0] hover:bg-[#F5F4E0]/10"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  )
}

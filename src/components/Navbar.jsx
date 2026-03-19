import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { id: 'overview',  label: 'Visão Geral'   },
  { id: 'scope',     label: 'Escopo'        },
  { id: 'social',    label: 'Redes Sociais' },
  { id: 'demos',     label: 'Demos'         },
  { id: 'pricing',   label: 'Investimento'  },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-night-950/95 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[66px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-glow-sm flex-shrink-0">
              <span className="text-white font-black text-xs tracking-tight">CF</span>
            </div>
            <div className="leading-none">
              <div className="text-white font-black text-sm tracking-tight">CFC Lopes</div>
              <div className="text-white/30 text-[10px] font-medium tracking-wide">Projeto Digital 2026</div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-white/45 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('cta')}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl btn-glow transition-all duration-300"
            >
              Solicitar proposta
              <ChevronRight size={14} />
            </button>
            <button
              className="md:hidden p-2 text-white/50 hover:text-white transition-colors"
              onClick={() => setMobileOpen(v => !v)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed top-[66px] inset-x-0 z-40 bg-night-950/98 backdrop-blur-2xl border-b border-white/[0.07] px-6 py-5 space-y-1"
          >
            {navLinks.map(l => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="block w-full text-left text-white/55 hover:text-white font-medium py-3 text-sm border-b border-white/[0.04] last:border-0 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('cta')}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-bold px-4 py-3.5 rounded-xl mt-3 btn-glow"
            >
              Solicitar proposta
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { ChevronDown, Globe, LayoutDashboard, Smartphone, Share2, Film, TrendingUp } from 'lucide-react'

const features = [
  { icon: Globe,           label: 'Site Profissional' },
  { icon: LayoutDashboard, label: 'Sistema de Controle' },
  { icon: Smartphone,      label: 'App do Aluno' },
  { icon: Share2,          label: 'Redes Sociais' },
  { icon: Film,            label: 'Audiovisual' },
  { icon: TrendingUp,      label: 'Gestão Mensal' },
]

function Counter({ target, suffix = '' }) {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true })
  const count  = useMotionValue(0)
  const rounded = useTransform(count, v => Math.round(v))

  useEffect(() => {
    if (!inView) return
    const ctrl = animate(count, target, { duration: 2.4, ease: 'easeOut' })
    return ctrl.stop
  }, [inView, count, target])

  return (
    <span ref={ref} className="text-5xl lg:text-6xl font-black text-gradient tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}
const itemVariants = {
  hidden:   { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible:  { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.65, ease: [0.25,0.1,0.25,1] } },
}

export default function HeroSection() {
  const heroRef = useRef(null)
  const inView  = useInView(heroRef, { once: true })

  const scrollDown = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex flex-col justify-start overflow-hidden"
      style={{ paddingTop: '0px' }}
    >
      {/* ─── BACKGROUND ─── */}
      <div className="absolute inset-0">
        {/* Sports car hero image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=90)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
            opacity: 0.65,
          }}
        />
        {/* Dark overlay — left side heavier so text readable, right side lighter to reveal car */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(3,3,12,0.95) 0%, rgba(3,3,12,0.75) 40%, rgba(3,3,12,0.15) 100%)' }} />
        {/* Bottom fade */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #03030c 0%, rgba(3,3,12,0.3) 25%, transparent 50%)' }} />
      </div>

      {/* ─── GRID DOT BG ─── */}
      <div className="absolute inset-0 grid-dots opacity-30" />

      {/* ─── RADIAL GLOW ─── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '900px', height: '700px',
          background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)',
        }}
      />

      {/* ─── CONTENT ─── */}
      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10" style={{ paddingTop: 'calc(80px + 6vh)', paddingBottom: '6vh' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="badge glass border border-blue-500/20 text-blue-300 tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Proposta Comercial · 2026
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.6rem,6vw,5rem)] font-black leading-[1.05] tracking-tight text-white mb-6"
          >
            Projeto de{' '}
            <span className="text-gradient">Estruturação Digital</span>
            <br />
            para o <span className="text-white/90">CFC Lopes</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-[clamp(1rem,1.8vw,1.2rem)] text-white/55 leading-relaxed max-w-2xl mb-4"
          >
            Uma proposta completa de presença digital, sistema de gerenciamento,
            aplicativo do aluno e marketing visual para posicionar a autoescola
            com mais autoridade, organização e crescimento.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm text-white/35 leading-relaxed max-w-xl mb-10"
          >
            Este projeto foi pensado para transformar o CFC Lopes em uma operação mais moderna,
            profissional e preparada para captar, acompanhar e converter alunos com muito mais eficiência.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => document.getElementById('scope')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold px-8 py-4 rounded-2xl btn-glow text-sm lg:text-base transition-all"
            >
              Ver escopo completo
            </button>
            <button
              onClick={() => document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 glass border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-2xl text-sm lg:text-base transition-all"
            >
              Explorar demonstrações
            </button>
          </motion.div>

          {/* Feature tags */}
          <motion.div variants={containerVariants} className="flex flex-wrap gap-3 mb-20">
            {features.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="flex items-center gap-2 glass border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white/60 hover:text-white/80 transition-colors cursor-default"
              >
                <Icon size={14} className="text-blue-400 flex-shrink-0" />
                {label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ─── COUNTERS ─── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-3 gap-6 lg:gap-10 max-w-lg"
        >
          {[
            { target: 3,  suffix: '',  label: 'Pilares do projeto'    },
            { target: 6,  suffix: '',  label: 'Frentes de entrega'    },
            { target: 1,  suffix: 'x', label: 'Ecossistema completo'  },
          ].map(({ target, suffix, label }) => (
            <motion.div key={label} variants={itemVariants} className="text-center lg:text-left">
              <Counter target={target} suffix={suffix} />
              <p className="text-white/35 text-xs font-medium mt-1 tracking-wide">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ─── SCROLL INDICATOR ─── */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/25 hover:text-white/50 transition-colors"
      >
        <span className="text-[9px] font-semibold tracking-[3px] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}

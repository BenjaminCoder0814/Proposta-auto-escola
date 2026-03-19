import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Megaphone, UserCheck, Gift, ArrowRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: UserCheck,
    color: 'blue',
    title: 'Aluno formado indica',
    desc: 'Ao concluir o processo e obter a habilitação, o aluno recebe um código de indicação único pelo aplicativo. Sem complicação — um clique para compartilhar.',
  },
  {
    num: '02',
    icon: Megaphone,
    color: 'cyan',
    title: 'Novo cliente se cadastra',
    desc: 'O indicado utiliza o código ao se cadastrar no site ou citar o nome do indicador no WhatsApp. O sistema vincula automaticamente os dois cadastros.',
  },
  {
    num: '03',
    icon: Gift,
    color: 'purple',
    title: 'Recompensa liberada',
    desc: 'Após confirmação do novo matriculado, a recompensa é creditada para o indicador. O valor e a regra são configuráveis pela gestão da autoescola.',
  },
]

const colorMap = {
  blue:   { bg: 'rgba(37,99,235,0.1)',   border: 'rgba(37,99,235,0.2)',   icon: '#93C5FD',  num: '#3B82F6' },
  cyan:   { bg: 'rgba(6,182,212,0.1)',   border: 'rgba(6,182,212,0.2)',   icon: '#22D3EE',  num: '#06B6D4' },
  purple: { bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.2)', icon: '#C4B5FD', num: '#8B5CF6' },
}

export default function ReferralSection() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="referral" ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(139,92,246,0.07) 0%, transparent 100%)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="eyebrow justify-center mb-4" style={{ color: '#C4B5FD' }}>Programa de Indicação</div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5">
            Alunos que indicam <span className="text-gradient-purple">mais alunos</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            O ecossistema digital inclui um programa estruturado de indicação. Os alunos formados
            se tornam canais de captação orgânica para a autoescola — sem custo por lead.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-[calc(16.7%+40px)] right-[calc(16.7%+40px)] h-px"
            style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.4), rgba(6,182,212,0.4), rgba(139,92,246,0.4))' }} />

          {steps.map(({ num, icon: Icon, color, title, desc }, i) => {
            const c = colorMap[color]
            return (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
                className="glass card-hover rounded-3xl p-7 relative"
                style={{ border: `1px solid ${c.border}` }}
              >
                {/* Number */}
                <div className="absolute -top-4 left-7 text-[10px] font-black px-3 py-1 rounded-full"
                  style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.icon }}>
                  Passo {num}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 mt-3"
                  style={{ background: c.bg, border: `1px solid ${c.border}`, boxShadow: `0 0 24px ${c.bg}` }}>
                  <Icon size={22} style={{ color: c.icon }} />
                </div>

                <h3 className="font-black text-white text-lg mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>

                {/* Arrow */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden md:block z-10">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: '#090918', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <ArrowRight size={10} className="text-white/40" />
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-white/30 text-sm mt-10"
        >
          O programa de indicação é parte do ecossistema digital e está integrado ao sistema de gestão e ao aplicativo.
        </motion.p>
      </div>
    </section>
  )
}

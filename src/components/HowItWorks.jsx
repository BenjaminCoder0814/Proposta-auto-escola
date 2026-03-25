import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, Phone, UserPlus, FolderOpen, CreditCard, BookOpen, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Search,
    color: 'blue',
    label: 'Cliente descobre o CFC',
    desc: 'Pelo Google, Instagram ou indicação — o cliente encontra a autoescola com uma presença digital profissional e conteúdo relevante.',
    desc: 'Pelo Google, Instagram ou indicação — o cliente encontra o CFC Lopes com uma presença digital profissional e conteúdo relevante.',
  },
  {
    icon: Phone,
    color: 'cyan',
    label: 'Entra em contato',
    desc: 'Clica no botão do WhatsApp ou preenche o formulário do site. O sistema registra automaticamente o novo lead no dashboard.',
  },
  {
    icon: UserPlus,
    color: 'purple',
    label: 'Cadastrado no sistema',
    desc: 'O atendente registra o aluno no painel, define a etapa inicial e o lead entra no pipeline de acompanhamento.',
  },
  {
    icon: FolderOpen,
    color: 'amber',
    label: 'Documentação e exames',
    desc: 'O sistema controla o status dos documentos e o aluno acompanha pelo aplicativo quais itens estão pendentes.',
  },
  {
    icon: BookOpen,
    color: 'green',
    label: 'Aulas e etapas da CNH',
    desc: 'Cada etapa — teórica, simulado, prática — é atualizada no sistema. O aluno vê o progresso em tempo real no app.',
  },
  {
    icon: CheckCircle,
    color: 'blue',
    label: 'Habilitado e indicando',
    desc: 'Ao concluir, o aluno habilitado é convidado a indicar amigos. O programa de indicação gera novos leads de forma orgânica.',
  },
]

const colorMap = {
  blue:   { bg: 'rgba(37,99,235,0.12)',  border: 'rgba(37,99,235,0.25)',  text: '#93C5FD',  num: '#2563EB' },
  cyan:   { bg: 'rgba(6,182,212,0.12)',  border: 'rgba(6,182,212,0.25)',  text: '#22D3EE',  num: '#06B6D4' },
  purple: { bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.25)', text: '#C4B5FD',  num: '#8B5CF6' },
  amber:  { bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.25)', text: '#FCD34D',  num: '#F59E0B' },
  green:  { bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.25)', text: '#6EE7B7',  num: '#10B981' },
}

export default function HowItWorks() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="howit" ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.07) 0%, transparent 100%)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="eyebrow justify-center mb-4">Fluxo Completo</div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5">
            Jornada do <span className="text-gradient">aluno</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Do primeiro contato até a habilitação — e além. Cada etapa controlada pelo sistema,
            visível para a equipe e acompanhada pelo próprio aluno.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(37,99,235,0.2) 15%, rgba(6,182,212,0.2) 85%, transparent)' }} />

          <div className="space-y-8">
            {steps.map(({ icon: Icon, color, label, desc }, i) => {
              const c = colorMap[color]
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.25,0.1,0.25,1] }}
                  className={`flex items-center gap-6 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Card */}
                  <div className={`flex-1 glass card-hover rounded-2xl p-6 flex gap-4 items-start ${isLeft ? 'lg:mr-8' : 'lg:ml-8'}`}
                    style={{ border: `1px solid ${c.border}30` }}>
                    {/* Icon */}
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: c.bg, border: `1px solid ${c.border}`, boxShadow: `0 0 20px ${c.bg}` }}>
                      <Icon size={18} style={{ color: c.text }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1.5">{label}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>

                  {/* Step number (center) */}
                  <div className="hidden lg:flex w-10 h-10 rounded-full items-center justify-center flex-shrink-0 font-black text-sm z-10"
                    style={{ background: c.bg, border: `2px solid ${c.border}`, color: c.text, boxShadow: `0 0 24px ${c.bg}` }}>
                    {i + 1}
                  </div>

                  {/* Spacer on non-card side */}
                  <div className="hidden lg:block flex-1" />

                  {/* Arrow on mobile */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center">
                      <ArrowRight size={14} className="text-white/20 rotate-90" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

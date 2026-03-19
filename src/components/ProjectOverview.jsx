import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Layers, Star } from 'lucide-react'

const cards = [
  {
    icon: Target,
    color: 'blue',
    title: 'Posicionamento Digital',
    text: 'Transformar a presença online do CFC Lopes de inexistente para referência local, posicionando a marca como a autoescola de confiança da região universitária.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80',
  },
  {
    icon: Layers,
    color: 'cyan',
    title: 'Organização Operacional',
    text: 'Substituir o atendimento manual e desorganizado por um sistema estruturado de pipeline, com controle de cada aluno por etapa e visibilidade total da operação.',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80',
  },
  {
    icon: Star,
    color: 'purple',
    title: 'Experiência do Aluno',
    text: 'Oferecer ao aluno clareza total sobre o progresso da sua habilitação, com um aplicativo intuitivo que reduz dúvidas, atendimentos repetitivos e abandono.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80',
  },
]

const colorMap = {
  blue:   { glow: 'rgba(37,99,235,0.12)',   border: 'rgba(37,99,235,0.25)',   icon: '#60A5FA', badge: 'bg-blue-500/10 border-blue-500/20 text-blue-300' },
  cyan:   { glow: 'rgba(6,182,212,0.12)',   border: 'rgba(6,182,212,0.25)',   icon: '#22D3EE', badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' },
  purple: { glow: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.25)', icon: '#C4B5FD', badge: 'bg-purple-500/10 border-purple-500/20 text-purple-300' },
}

const fade = {
  hidden:  { opacity: 0, y: 36, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25,0.1,0.25,1] } },
}

export default function ProjectOverview() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="overview" className="relative py-28 px-6 overflow-hidden">
      {/* Top radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(37,99,235,0.07) 0%, transparent 100%)' }} />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fade}
          className="text-center mb-20"
        >
          <div className="eyebrow justify-center mb-4">Visão Geral</div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5">
            Visão geral do <span className="text-gradient">projeto</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            O CFC Lopes possui uma oportunidade estratégica de crescimento por estar inserido em uma
            região com forte potencial de captação. Para aproveitar este cenário, o negócio precisa
            de estrutura digital, apresentação profissional e processo comercial organizado.
          </p>
          <p className="text-white/35 text-sm mt-4 max-w-xl mx-auto">
            Mais do que criar um site, esta proposta apresenta uma estrutura completa para fortalecer
            a marca, melhorar a experiência do cliente e organizar a operação da autoescola.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, color, title, text, img }, i) => {
            const c = colorMap[color]
            return (
              <motion.div
                key={title}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={{ ...fade, visible: { ...fade.visible, transition: { ...fade.visible.transition, delay: i * 0.12 } } }}
                className="group glass card-hover rounded-3xl overflow-hidden"
                style={{ border: `1px solid ${c.border}20` }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: 'brightness(0.35) saturate(0.8)' }}
                  />
                  <div className="absolute inset-0"
                    style={{ background: `linear-gradient(180deg, transparent 30%, rgba(8,8,26,0.95) 100%)` }} />
                  {/* Icon badge */}
                  <div className={`absolute bottom-4 left-5 w-10 h-10 rounded-2xl flex items-center justify-center badge border ${c.badge}`}
                    style={{ boxShadow: `0 0 20px ${c.glow}` }}>
                    <Icon size={17} style={{ color: c.icon }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

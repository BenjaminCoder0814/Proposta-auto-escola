import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, ArrowRight, FileText, Clock, ShieldCheck, HeadphonesIcon } from 'lucide-react'

const trust = [
  { icon: FileText,        text: 'Contrato formal e detalhado' },
  { icon: Clock,           text: 'Resposta em até 24 horas' },
  { icon: ShieldCheck,     text: 'Sem compromisso inicial' },
  { icon: HeadphonesIcon,  text: 'Suporte dedicado pós-entrega' },
]

export default function FinalCTA() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const scrollToPricing = () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="cta" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(37,99,235,0.1) 0%, rgba(3,3,12,0) 70%)' }} />
      <div className="absolute inset-0 grid-dots opacity-30 pointer-events-none" />

      {/* Animated glow ring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ border: '1px solid rgba(37,99,235,0.5)', boxShadow: '0 0 120px rgba(37,99,235,0.2)' }} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ border: '1px solid rgba(6,182,212,0.4)' }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25,0.1,0.25,1] }}
        >
          <div className="eyebrow justify-center mb-6">Próximo passo</div>

          <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            Vamos transformar o<br />
            <span className="text-gradient">a Autoescola</span> juntos?
            <span className="text-gradient">CFC Lopes</span> juntos?
          </h2>

          <p className="text-white/50 text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            Este projeto foi desenvolvido especificamente para a realidade e oportunidades
            da autoescola. A próxima etapa é alinhar os detalhes e iniciar a implementação.
            do CFC Lopes. A próxima etapa é alinhar os detalhes e iniciar a implementação.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
        >
          <a
            href="https://wa.me/551900000000?text=Olá!%20Vi%20a%20proposta%20digital%20para%20o%20CFC%20Lopes%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all"
            style={{
              background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
              boxShadow: '0 0 40px rgba(37,99,235,0.35), 0 8px 30px rgba(0,0,0,0.3)',
            }}
          >
            <MessageCircle size={20} />
            Solicitar implementação
            <ArrowRight size={16} />
          </a>

          <button
            onClick={scrollToPricing}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white/60 hover:text-white transition-all border border-white/10 hover:border-white/20"
          >
            Revisar escopo e valores
          </button>
        </motion.div>

        {/* Trust items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {trust.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-white/35">
              <Icon size={14} className="text-white/25" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

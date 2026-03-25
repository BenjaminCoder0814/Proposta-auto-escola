import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Lock, Shield, ChevronRight, Phone as PhoneIcon, Star, ArrowRight } from 'lucide-react'

/* ---------- Mini site content rendered inside the browser frame ---------- */
function MiniSite() {
  return (
    <div style={{ background: '#07071a', minHeight: '180%' }}>

      {/* Mini Nav */}
      <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-3"
        style={{ background: 'rgba(7,7,26,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center gap-2">
          <span className="font-bold text-xs text-white">Autoescola</span>
          <span className="font-bold text-xs text-white">CFC Lopes</span>
        </div>
        <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-[10px] font-bold"
          style={{ background: '#25D366', boxShadow: '0 0 12px rgba(37,211,102,0.3)' }}>
          <PhoneIcon size={9} /> WhatsApp
        </button>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ height: 260 }}>
        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=75"
          alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.18)', objectPosition: 'center' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold mb-3"
            style={{ background: 'rgba(37,99,235,0.2)', border: '1px solid rgba(37,99,235,0.35)', color: '#93C5FD' }}>
            <Star size={8} className="fill-current" /> Autoescola nº1 em Eng. Coelho
            <Star size={8} className="fill-current" /> CFC Lopes nº1 em Eng. Coelho
          </div>
          <h2 className="text-xl font-black text-white mb-2 leading-tight">
            Sua CNH com<br /><span style={{ background: 'linear-gradient(135deg,#93C5FD,#22D3EE)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}> quem é referência</span>
          </h2>
          <p className="text-[10px] text-white/55 mb-4 max-w-[220px]">Processo transparente, acompanhamento digital e equipe experiente.</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-xl text-[10px] font-bold text-white"
              style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)', boxShadow: '0 0 20px rgba(37,99,235,0.4)' }}>
              Quero minha CNH
            </button>
            <button className="px-3 py-2 rounded-xl text-[10px] font-bold text-white/60 border border-white/10">
              Ver o processo
            </button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-0"
        style={{ background: 'rgba(37,99,235,0.08)', borderTop: '1px solid rgba(37,99,235,0.15)', borderBottom: '1px solid rgba(37,99,235,0.15)' }}>
        {[['500+', 'Alunos formados'], ['95%', 'Aprovação na prova'], ['5★', 'Avaliação Google']].map(([v, l]) => (
          <div key={l} className="text-center py-3">
            <p className="text-sm font-black text-white">{v}</p>
            <p className="text-[8px] text-white/40">{l}</p>
          </div>
        ))}
      </div>

      {/* Services */}
      <div className="px-5 py-8">
        <p className="text-[9px] font-bold uppercase tracking-widest text-blue-400 mb-1">Nossos serviços</p>
        <h3 className="text-base font-black text-white mb-5">Tudo para a sua habilitação</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { t: 'Habilitação', i: 'AB', sub: 'Categoria A e B' },
            { t: 'Adição',      i: 'AD', sub: 'Categorias superiores' },
            { t: 'Renovação',   i: 'RN', sub: 'CNH vencida' },
          ].map(({ t, i, sub }) => (
            <div key={t} className="rounded-xl p-3 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="w-7 h-7 rounded-xl mb-2 mx-auto flex items-center justify-center text-[9px] font-black text-white"
                style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}>{i}</div>
              <p className="text-[10px] font-bold text-white">{t}</p>
              <p className="text-[8px] text-white/35 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CNH Process */}
      <div className="px-5 py-8" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <p className="text-[9px] font-bold uppercase tracking-widest text-cyan-400 mb-1">Como funciona</p>
        <h3 className="text-base font-black text-white mb-5">5 etapas até a sua CNH</h3>
        <div className="space-y-2">
          {['Cadastro e documentação', 'Exame médico e psicológico', 'Aulas teórico-técnicas', 'Simulado + Prova teórica', 'Aulas práticas + Prova final'].map((s, i) => (
            <div key={s} className="flex items-center gap-2 rounded-lg px-3 py-2.5"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}>{i+1}</div>
              <span className="text-[10px] text-white/70">{s}</span>
              <ChevronRight size={10} className="ml-auto text-white/25" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="mx-5 mb-8 mt-2 rounded-2xl p-5 text-center"
        style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(6,182,212,0.12))', border: '1px solid rgba(37,99,235,0.25)' }}>
        <p className="text-sm font-black text-white mb-1">Comece hoje</p>
        <p className="text-[10px] text-white/50 mb-3">Sua CNH mais perto do que você imagina.</p>
        <button className="px-5 py-2 rounded-xl text-[10px] font-bold text-white"
          style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}>
          Quero começar agora
        </button>
      </div>

      {/* Footer */}
      <div className="px-5 py-4 text-center border-t border-white/5">
        <p className="text-[8px] text-white/25">Autoescola · Engenheiro Coelho, SP · (19) 9 xxxx-xxxx</p>
        <p className="text-[8px] text-white/25">CFC Lopes · Engenheiro Coelho, SP · (19) 9 xxxx-xxxx</p>
      </div>
    </div>
  )
}

/* ---------- Section ---------- */
export default function DemoSiteSection() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="demo-site" ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(37,99,235,0.09) 0%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="eyebrow justify-center mb-4">Demo Interativo</div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5">
            O site da <span className="text-gradient">Autoescola</span>
            O site do <span className="text-gradient">CFC Lopes</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Navegue pela prévia interativa do site institucional. Design profissional, focado em
            captação de leads e apresentação do processo de habilitação.
          </p>
        </motion.div>

        {/* Browser frame */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25,0.1,0.25,1], delay: 0.1 }}
          className="rounded-3xl overflow-hidden border shadow-deep"
          style={{ borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 40px 120px rgba(0,0,0,0.7), 0 0 60px rgba(37,99,235,0.08)' }}
        >
          {/* Chrome bar */}
          <div className="browser-chrome" style={{ background: '#0a0a1a', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '12px 16px' }}>
            <div className="flex gap-1.5">
              <div className="browser-dot bg-red-400/60" />
              <div className="browser-dot bg-yellow-400/60" />
              <div className="browser-dot bg-green-400/60" />
            </div>
            <div className="browser-url">
              <Lock size={9} className="text-green-400" />
              <span>cfclopes.com.br</span>
            </div>
            <Globe size={14} className="text-white/25 ml-2" />
          </div>

          {/* Scrollable site */}
          <div
            className="overflow-y-auto no-scrollbar"
            style={{
              maxHeight: 680,
              background: '#07071a',
              scrollbarWidth: 'none',
            }}
          >
            <MiniSite />
          </div>

          {/* Footer chrome */}
          <div className="px-4 py-2.5 flex items-center justify-between"
            style={{ background: '#080814', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-1.5">
              <Shield size={11} className="text-green-400" />
              <span className="text-[10px] text-white/30">Conexão segura</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-white/25">
              <ArrowRight size={10} /> Visualização do projeto
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

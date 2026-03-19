import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Monitor, LayoutDashboard, Smartphone, CheckCircle2, Globe, Users, Lock, BarChart2, ShieldCheck, Wifi } from 'lucide-react'

const tabs = [
  {
    id: 'site',
    label: 'Site Institucional',
    icon: Monitor,
    color: 'blue',
    eyebrow: 'Plataforma Web',
    heading: 'Site profissional para captação de alunos',
    description: 'Uma presença digital que transmite credibilidade, converte visitantes em leads e representa o CFC Lopes como referência na região.',
    features: [
      { icon: Globe,      text: 'Estrutura SEO local (Google Maps + busca orgânica)' },
      { icon: Users,      text: 'Formulário de captação de leads com WhatsApp integrado' },
      { icon: ShieldCheck,text: 'Layout profissional responsivo (mobile-first)' },
      { icon: BarChart2,  text: 'Seção completa do processo de habilitação (5 etapas)' },
      { icon: Wifi,       text: 'Integração de chat e botão WhatsApp fixo' },
      { icon: Lock,       text: 'Domínio e hospedagem configurados' },
    ],
    visual: (
      <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-deep">
        <div className="browser-chrome">
          <div className="flex gap-1.5"><div className="browser-dot bg-red-400/70"/><div className="browser-dot bg-yellow-400/70"/><div className="browser-dot bg-green-400/70"/></div>
          <div className="browser-url"><Globe size={10}/> cfclopes.com.br</div>
        </div>
        <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=85" alt="Site demo"
          className="w-full h-60 object-cover" style={{ filter: 'brightness(0.6) saturate(0.7) hue-rotate(200deg)' }} />
        <div className="p-5 space-y-3" style={{ background: '#080814' }}>
          <div className="h-3 w-2/3 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div className="h-2 w-full rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <div className="h-2 w-4/5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <div className="flex gap-2 pt-2">
            <div className="h-7 w-28 rounded-xl" style={{ background: 'rgba(37,99,235,0.35)' }} />
            <div className="h-7 w-24 rounded-xl" style={{ background: 'rgba(255,255,255,0.07)' }} />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'system',
    label: 'Sistema de Gestão',
    icon: LayoutDashboard,
    color: 'cyan',
    eyebrow: 'Dashboard Administrativo',
    heading: 'Controle total dos alunos e leads',
    description: 'Um painel interno para que a equipe gerencie cada aluno por etapa, controle documentações, acompanhe métricas e nunca perca o fio da operação.',
    features: [
      { icon: LayoutDashboard, text: 'Dashboard com métricas em tempo real' },
      { icon: Users,           text: 'Pipeline visual e Kanban por etapas de atendimento' },
      { icon: ShieldCheck,     text: 'Cadastro de alunos com histórico completo' },
      { icon: BarChart2,       text: 'Relatórios de captação por origem (Instagram, Google...)' },
      { icon: Lock,            text: 'Controle de documentação por aluno' },
      { icon: Wifi,            text: 'Multi-atendente com autenticação segura' },
    ],
    visual: (
      <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-deep" style={{ background: '#080816' }}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-600 to-cyan-500"/>
            <span className="text-xs font-bold text-white/70">CFC Lopes Admin</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400"/>
            <span className="text-[9px] text-white/40">Sistema ativo</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 p-3">
          {[['Leads', '12', 'cyan'], ['Alunos', '48', 'blue'], ['Concluídos', '14', 'green']].map(([l,v,c])=>(
            <div key={l} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-[9px] text-white/40 mb-1">{l}</p>
              <p className={`text-lg font-black text-${c}-400`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="px-3 pb-3 space-y-1.5">
          {['carlos-mendes','ana-paula','pedro-rodrigues'].map((n,i)=>(
            <div key={n} className="flex items-center gap-2 rounded-lg px-2 py-1.5" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-[8px] font-bold">{['CM','AP','PR'][i]}</div>
              <div className="flex-1">
                <div className="h-1.5 w-20 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
              </div>
              <div className={`h-4 w-12 rounded-full text-[7px] flex items-center justify-center ${['pill-active','pill-pending','pill-active'][i]}`}>{['Ativo','Pendente','Ativo'][i]}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'app',
    label: 'App do Aluno',
    icon: Smartphone,
    color: 'purple',
    eyebrow: 'Mobile Experience',
    heading: 'O aluno acompanha tudo pelo celular',
    description: 'Um aplicativo intuitivo que dá ao aluno clareza total sobre onde está no processo de habilitação, quais documentos estão pendentes e quais etapas foram concluídas.',
    features: [
      { icon: Smartphone,  text: 'Interface mobile leve (instalável como app)' },
      { icon: BarChart2,   text: 'Barra de progresso visual da CNH' },
      { icon: CheckCircle2,text: 'Etapas concluídas, ativas e pendentes em destaque' },
      { icon: Lock,        text: 'Documentos pendentes com status claro' },
      { icon: Wifi,        text: 'Notificações automáticas de mudança de etapa' },
      { icon: ShieldCheck, text: 'Acesso seguro por autenticação por CPF' },
    ],
    visual: null, // Phone mockup rendered below
  },
]

const colorAccents = {
  blue:   { tab: 'text-blue-400 border-blue-500',  icon: 'text-blue-400', pill: 'bg-blue-500/10 border-blue-500/20 text-blue-300' },
  cyan:   { tab: 'text-cyan-400 border-cyan-500',  icon: 'text-cyan-400', pill: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' },
  purple: { tab: 'text-purple-400 border-purple-500', icon: 'text-purple-400', pill: 'bg-purple-500/10 border-purple-500/20 text-purple-300' },
}

const fade = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25,0.1,0.25,1] } },
}

function AppPhoneMockup() {
  const stages = [
    { label: 'Cadastro',          done: true  },
    { label: 'Exame Médico',      done: true  },
    { label: 'Aula Teórica',      done: true  },
    { label: 'Simulado + Prova',  active: true },
    { label: 'Aula Prática',      pending: true },
    { label: 'Prova Prática',     pending: true },
  ]
  return (
    <div className="phone-frame mx-auto" style={{ width: 220, height: 440 }}>
      {/* Notch */}
      <div className="phone-notch">
        <div className="w-8 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
      </div>
      {/* Screen */}
      <div className="px-4 pt-3 pb-2 h-full overflow-hidden" style={{ background: '#060612' }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-[8px] text-white/40">Olá, Carlos 👋</p>
            <p className="text-[10px] font-bold text-white">Sua CNH</p>
          </div>
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-[7px] font-bold">CM</div>
        </div>
        {/* Progress card */}
        <div className="rounded-xl p-3 mb-3" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(37,99,235,0.15))', border: '1px solid rgba(139,92,246,0.2)' }}>
          <p className="text-[8px] text-purple-300 mb-1">Progresso geral</p>
          <p className="text-xl font-black text-gradient-purple">65%</p>
          <div className="progress-track mt-1.5">
            <div className="progress-fill-purple" style={{ width: '65%' }} />
          </div>
        </div>
        {/* Stages */}
        <p className="text-[8px] text-white/40 mb-1.5 font-semibold uppercase tracking-wider">Etapas</p>
        <div className="space-y-1.5">
          {stages.map(({ label, done, active, pending }) => (
            <div key={label} className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${done ? 'opacity-60' : ''}`}
              style={{ background: active ? 'rgba(139,92,246,0.12)' : 'rgba(255,255,255,0.03)', border: active ? '1px solid rgba(139,92,246,0.2)' : '1px solid transparent' }}>
              <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 ${done ? 'bg-green-500/30' : active ? 'bg-purple-500/30' : 'bg-white/5'}`}>
                {done   && <div className="w-1.5 h-1.5 rounded-full bg-green-400"/>}
                {active && <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"/>}
                {pending&& <div className="w-1.5 h-1.5 rounded-full bg-white/20"/>}
              </div>
              <span className={`text-[8px] font-medium ${done ? 'text-white/40' : active ? 'text-purple-200' : 'text-white/30'}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ScopePanel({ item, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const c      = colorAccents[item.color]
  const Icon   = item.icon
  const isReversed = index % 2 !== 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}
    >
      {/* Number badge + info — always left on even, right on odd */}
      <div className={isReversed ? 'lg:order-2' : ''}>
        {/* Step number */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm"
            style={{ background: colorMap[item.color].bg, border: `1px solid ${colorMap[item.color].border}`, color: colorMap[item.color].icon }}>
            {String(index + 1).padStart(2, '0')}
          </div>
          <Icon size={16} style={{ color: colorMap[item.color].icon }} />
          <span className="eyebrow" style={{ color: colorMap[item.color].icon }}>{item.eyebrow}</span>
        </div>

        <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">{item.heading}</h3>
        <p className="text-white/50 leading-relaxed mb-8 text-base">{item.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {item.features.map(({ icon: FIcon, text }) => (
            <div key={text} className="flex items-start gap-3">
              <div className={`w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border ${c.pill}`}>
                <FIcon size={13} />
              </div>
              <span className="text-sm text-white/65 leading-snug">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Visual */}
      <div className={`flex justify-center ${isReversed ? 'lg:order-1' : ''}`}>
        {item.id === 'app' ? (
          <AppPhoneMockup />
        ) : (
          item.visual
        )}
      </div>
    </motion.div>
  )
}

const colorMap = {
  blue:   { bg: 'rgba(37,99,235,0.12)',   border: 'rgba(37,99,235,0.25)',   icon: '#93C5FD' },
  cyan:   { bg: 'rgba(6,182,212,0.12)',   border: 'rgba(6,182,212,0.25)',   icon: '#22D3EE' },
  purple: { bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.25)', icon: '#C4B5FD' },
}

export default function ScopeSection() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="scope" ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(6,182,212,0.07) 0%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fade} className="text-center mb-20">
          <div className="eyebrow justify-center mb-4">Escopo do Projeto</div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5">
            O que está <span className="text-gradient">incluído</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Três frentes principais que formam o ecossistema digital completo do CFC Lopes.
          </p>
        </motion.div>

        {/* Stacked panels with dividers */}
        <div className="space-y-24">
          {tabs.map((item, i) => (
            <div key={item.id}>
              <ScopePanel item={item} index={i} />
              {i < tabs.length - 1 && (
                <div className="section-divider mt-24" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

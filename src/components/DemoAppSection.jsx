import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Clock, Circle, Bell, FileText, MessageSquare, Home, BarChart2, User } from 'lucide-react'

/* ─── Phone component ─── */
function Phone({ size = 'md', children, style = {} }) {
  const sizes = {
    sm: { width: 190, height: 380, br: 36, inner: 2 },
    md: { width: 260, height: 520, br: 48, inner: 2 },
  }
  const s = sizes[size]
  return (
    <div className="phone-frame" style={{ width: s.width, height: s.height, borderRadius: s.br, ...style }}>
      {/* Notch */}
      <div className="phone-notch" style={{ margin: '0 auto' }}>
        <div style={{ width: 36, height: 4, borderRadius: 4, background: 'rgba(255,255,255,0.12)' }} />
      </div>
      <div style={{ overflow: 'hidden', height: `calc(100% - 22px)`, background: '#060614' }}>
        {children}
      </div>
    </div>
  )
}

/* ─── Screen A: Home ─── */
function HomeScreen() {
  return (
    <div className="px-3 pt-3 h-full" style={{ fontSize: 0 }}>
      <div className="flex items-center justify-between mb-3">
        <div>
          <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>Bem-vindo de volta</p>
          <p style={{ fontSize: 12, fontWeight: 800, color: 'white' }}>Autoescola</p>
          <p style={{ fontSize: 12, fontWeight: 800, color: 'white' }}>CFC Lopes</p>
        </div>
        <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,#3B82F6,#06B6D4)', display:'flex', alignItems:'center', justifyContent:'center', fontSize: 8, fontWeight: 700, color: 'white' }}>
          AS
        </div>
      </div>

      {/* Banner */}
      <div style={{ borderRadius: 14, padding: '10px 12px', marginBottom: 10, background: 'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(6,182,212,0.2))', border: '1px solid rgba(37,99,235,0.3)' }}>
        <p style={{ fontSize: 9, color: 'rgba(147,197,253,0.9)', marginBottom: 3 }}>🚗 Sua habilitação</p>
        <p style={{ fontSize: 11, fontWeight: 800, color: 'white', marginBottom: 6 }}>Categoria B ativo</p>
        <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 99 }}>
          <div style={{ height: '100%', width: '65%', borderRadius: 99, background: 'linear-gradient(90deg,#3B82F6,#06B6D4)' }} />
        </div>
        <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>65% concluído</p>
      </div>

      {/* Quick actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 10 }}>
        {[
          { label: 'Progresso', icon: '📊', color: 'rgba(37,99,235,0.15)' },
          { label: 'Documentos', icon: '📋', color: 'rgba(139,92,246,0.15)' },
          { label: 'Agendamento', icon: '📅', color: 'rgba(16,185,129,0.15)' },
          { label: 'Suporte', icon: '💬', color: 'rgba(245,158,11,0.15)' },
        ].map(({ label, icon, color }) => (
          <div key={label} style={{ borderRadius: 12, padding: '8px 10px', background: color, border: '1px solid rgba(255,255,255,0.07)', textAlign: 'center' }}>
            <div style={{ fontSize: 14, marginBottom: 3 }}>{icon}</div>
            <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Notification */}
      <div style={{ borderRadius: 12, padding: '8px 10px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', gap: 7 }}>
        <Bell size={12} style={{ color: '#6EE7B7', flexShrink: 0 }} />
        <p style={{ fontSize: 8, color: 'rgba(110,231,183,0.8)', lineHeight: 1.4 }}>Aula prática agendada para amanhã às 14h.</p>
      </div>
    </div>
  )
}

/* ─── Screen B: Stages (CENTER) ─── */
function StagesScreen() {
  const stages = [
    { label: 'Cadastro',         sub: 'Concluído em Jan/25',    icon: CheckCircle2, state: 'done' },
    { label: 'Exame Médico',     sub: 'Concluído em Fev/25',    icon: CheckCircle2, state: 'done' },
    { label: 'Aula Teórica',     sub: '30/40 horas concluídas', icon: CheckCircle2, state: 'done' },
    { label: 'Simulado + Prova', sub: 'Em andamento — 80%',     icon: Clock,        state: 'active' },
    { label: 'Aulas Práticas',   sub: 'Aguardando prova teórica',icon: Circle,       state: 'pending' },
    { label: 'Prova Prática',    sub: 'Pendente',                icon: Circle,       state: 'pending' },
  ]

  return (
    <div className="px-3 pt-3 h-full">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)', marginBottom: 1 }}>Carlos Mendes</p>
          <p style={{ fontSize: 12, fontWeight: 800, color: 'white' }}>Minha CNH</p>
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#A78BFA', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.25)', padding: '3px 8px', borderRadius: 99 }}>65%</div>
      </div>

      {/* Progress card */}
      <div style={{ borderRadius: 14, padding: '10px 12px', marginBottom: 10, background: 'linear-gradient(135deg,rgba(139,92,246,0.2),rgba(37,99,235,0.15))', border: '1px solid rgba(139,92,246,0.2)' }}>
        <p style={{ fontSize: 8, color: 'rgba(196,181,254,0.7)', marginBottom: 4 }}>Progresso geral</p>
        <div style={{ height: 5, background: 'rgba(255,255,255,0.08)', borderRadius: 99 }}>
          <div style={{ height: '100%', width: '65%', borderRadius: 99, background: 'linear-gradient(90deg,#8B5CF6,#3B82F6)' }} />
        </div>
        <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>Etapa 4 de 6</p>
      </div>

      {/* Stages list */}
      <p style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: 'rgba(255,255,255,0.3)', marginBottom: 6 }}>Etapas</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {stages.map(({ label, sub, icon: Icon, state }) => (
          <div key={label} style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '7px 9px', borderRadius: 12,
            background: state === 'active' ? 'rgba(139,92,246,0.12)' : 'rgba(255,255,255,0.03)',
            border: state === 'active' ? '1px solid rgba(139,92,246,0.22)' : '1px solid rgba(255,255,255,0.05)',
            opacity: state === 'pending' ? 0.45 : 1,
          }}>
            <Icon size={13} style={{ color: state === 'done' ? '#6EE7B7' : state === 'active' ? '#C4B5FD' : 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: 9, fontWeight: 700, color: state === 'active' ? '#E9D5FF' : 'rgba(255,255,255,0.75)' }}>{label}</p>
              <p style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.35)', marginTop: 1 }}>{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Screen C: Documents ─── */
function DocsScreen() {
  const docs = [
    { name: 'RG / CNH anterior', status: 'ok' },
    { name: 'CPF',               status: 'ok' },
    { name: 'Comprovante resid.', status: 'ok' },
    { name: 'Foto 3x4',          status: 'pending' },
    { name: 'Comprov. pagamento', status: 'ok' },
  ]

  return (
    <div className="px-3 pt-3 h-full">
      <div className="flex items-center justify-between mb-4">
        <p style={{ fontSize: 13, fontWeight: 800, color: 'white' }}>Documentos</p>
        <div style={{ fontSize: 9, color: '#FCD34D', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.25)', padding: '3px 8px', borderRadius: 99 }}>1 pendente</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {docs.map(({ name, status }) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 12, background: 'rgba(255,255,255,0.03)', border: `1px solid ${status === 'ok' ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.25)'}` }}>
            <div style={{ width: 20, height: 20, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: status === 'ok' ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)', flexShrink: 0 }}>
              <FileText size={11} style={{ color: status === 'ok' ? '#6EE7B7' : '#FCD34D' }} />
            </div>
            <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)', flex: 1 }}>{name}</p>
            <div style={{ width: 14, height: 14, borderRadius: '50%', background: status === 'ok' ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {status === 'ok' ? <CheckCircle2 size={9} style={{ color: '#6EE7B7' }} /> : <Clock size={9} style={{ color: '#FCD34D' }} />}
            </div>
          </div>
        ))}
      </div>

      {/* Chat button */}
      <div style={{ marginTop: 12, borderRadius: 14, padding: '10px 12px', background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
        <MessageSquare size={13} style={{ color: '#93C5FD' }} />
        <div>
          <p style={{ fontSize: 9, fontWeight: 700, color: 'rgba(147,197,253,0.9)' }}>Falar com a secretaria</p>
          <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.35)' }}>Resposta em até 30 min</p>
        </div>
      </div>

      {/* Bottom dock */}
      <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, display: 'flex', justifyContent: 'space-around', padding: '0 16px' }}>
        {[Home, BarChart2, FileText, User].map((Icon, i) => (
          <Icon key={i} size={16} style={{ color: i === 2 ? '#93C5FD' : 'rgba(255,255,255,0.2)' }} />
        ))}
      </div>
    </div>
  )
}

/* ─── Section ─── */
export default function DemoAppSection() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="demo-app" ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(139,92,246,0.09) 0%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="eyebrow justify-center mb-4" style={{ color: '#C4B5FD' }}>Demo Interativo</div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5">
            Aplicativo do <span className="text-gradient-purple">aluno</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Interface mobile que o aluno instala no celular para acompanhar cada etapa da sua
            habilitação, ver documentos pendentes e se comunicar com a escola.
          </p>
        </motion.div>

        {/* Three phones */}
        <div className="flex items-end justify-center gap-6">
          {/* Left phone */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotate: -8 }}
            animate={inView ? { opacity: 1, x: 0, rotate: -8 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25,0.1,0.25,1] }}
            style={{ marginBottom: -30, flexShrink: 0 }}
          >
            <Phone size="sm">
              <HomeScreen />
            </Phone>
          </motion.div>

          {/* Center phone (larger) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.25,0.1,0.25,1] }}
            style={{ flexShrink: 0, zIndex: 10 }}
          >
            <Phone size="md">
              <StagesScreen />
            </Phone>
          </motion.div>

          {/* Right phone */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 8 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 8 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25,0.1,0.25,1] }}
            style={{ marginBottom: -30, flexShrink: 0 }}
          >
            <Phone size="sm">
              <DocsScreen />
            </Phone>
          </motion.div>
        </div>

        {/* Labels */}
        <div className="flex justify-center gap-24 mt-16">
          {[
            { label: 'Tela inicial',   color: 'text-white/30' },
            { label: 'Progresso CNH',  color: 'text-purple-400' },
            { label: 'Documentos',     color: 'text-white/30' },
          ].map(({ label, color }) => (
            <p key={label} className={`text-sm font-bold ${color}`}>{label}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

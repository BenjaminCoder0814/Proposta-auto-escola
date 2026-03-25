import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  LayoutDashboard, Users, Route, BarChart2, Instagram, Settings,
  Bell, Search, ChevronDown, TrendingUp, TrendingDown, Plus,
} from 'lucide-react'
import { students, kanbanColumns, metrics } from '../data/mockStudents'

/* ──────────────────────────────────────────── */
const sidebarItems = [
  { icon: LayoutDashboard, active: true },
  { icon: Users },
  { icon: Route },
  { icon: BarChart2 },
  { icon: Instagram },
  { icon: Settings },
]

const metricColors = {
  cyan:  { text: 'text-cyan-400',   bg: 'rgba(6,182,212,0.1)',  border: 'rgba(6,182,212,0.2)' },
  blue:  { text: 'text-blue-400',   bg: 'rgba(37,99,235,0.1)',  border: 'rgba(37,99,235,0.2)' },
  amber: { text: 'text-amber-400',  bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)' },
  green: { text: 'text-green-400',  bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)' },
}

const kanbanColors = {
  cyan:   { bg: 'rgba(6,182,212,0.1)',   border: 'rgba(6,182,212,0.2)',   dot: 'bg-cyan-400',   text: 'text-cyan-400' },
  purple: { bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.2)', dot: 'bg-purple-400', text: 'text-purple-400' },
  amber:  { bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)', dot: 'bg-amber-400',  text: 'text-amber-400' },
  blue:   { bg: 'rgba(37,99,235,0.1)',   border: 'rgba(37,99,235,0.2)',   dot: 'bg-blue-400',   text: 'text-blue-400' },
  green:  { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)', dot: 'bg-green-400',  text: 'text-green-400' },
}

/* ──────────────────────────────────────────── */
export default function DemoSystemSection() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="demo-system" ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(6,182,212,0.08) 0%, transparent 100%)' }} />
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="eyebrow justify-center mb-4" style={{ color: '#22D3EE' }}>Demo Interativo</div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5">
            Sistema de <span className="text-gradient">gestão</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            O painel interno que a equipe da autoescola vai usar para gerenciar alunos,
              O painel interno que a equipe do CFC Lopes vai usar para gerenciar alunos,
            acompanhar o pipeline de atendimento e ter visibilidade total da operação.
          </p>
        </motion.div>

        {/* Dashboard frame */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25,0.1,0.25,1], delay: 0.1 }}
          className="rounded-3xl overflow-hidden border"
          style={{
            borderColor: 'rgba(6,182,212,0.15)',
            boxShadow: '0 40px 120px rgba(0,0,0,0.7), 0 0 60px rgba(6,182,212,0.07)',
            height: 680,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* ─── Top bar ─── */}
          <div className="flex items-center justify-between px-5 py-3 flex-shrink-0"
            style={{ background: '#08081a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs"
                style={{ background: 'linear-gradient(135deg,#3B82F6,#06B6D4)' }}>AS</div>
              <span className="font-bold text-sm text-white">Autoescola</span>
                <span className="font-bold text-sm text-white">CFC Lopes</span>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-full text-[9px]"
                style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.2)', color: '#6EE7B7' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Sistema ativo
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <Search size={11} className="text-white/30" />
                <span className="text-[10px] text-white/25">Buscar aluno...</span>
              </div>
              <div className="relative">
                <Bell size={15} className="text-white/40 cursor-pointer hover:text-white/70 transition-colors" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold"
                  style={{ background: 'linear-gradient(135deg,#8B5CF6,#3B82F6)' }}>AD</div>
                <ChevronDown size={11} className="text-white/30" />
              </div>
            </div>
          </div>

          {/* ─── Body ─── */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="flex flex-col items-center py-4 gap-3 border-r border-white/5"
              style={{ background: '#060610', width: 52 }}>
              {sidebarItems.map(({ icon: Icon, active }, i) => (
                <div key={i} className={`w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer transition-all ${active ? 'bg-blue-600/20 text-blue-400' : 'text-white/25 hover:text-white/50'}`}>
                  <Icon size={16} />
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-5" style={{ background: '#09091a' }}>
              {/* Page header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-black text-white text-base">Controle de Alunos</h3>
                  <p className="text-white/35 text-xs mt-0.5">Visão geral e pipeline de atendimento</p>
                </div>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white"
                  style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)', boxShadow: '0 0 20px rgba(37,99,235,0.3)' }}>
                  <Plus size={12} /> Novo aluno
                </button>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-4 gap-3 mb-5">
                {metrics.map(({ label, value, delta, trend, color }) => {
                  const c = metricColors[color]
                  return (
                    <div key={label} className="rounded-2xl p-4"
                      style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                      <p className="text-[10px] text-white/45 mb-2">{label}</p>
                      <p className={`text-2xl font-black ${c.text}`}>{value}</p>
                      <div className={`flex items-center gap-1 mt-1 text-[9px] ${trend === 'up' ? 'text-green-400' : 'text-amber-400'}`}>
                        {trend === 'up' ? <TrendingUp size={9} /> : <TrendingDown size={9} />}
                        {delta}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Kanban */}
              <div className="mb-5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/35 mb-3">Pipeline de Atendimento</p>
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                  {kanbanColumns.map(({ id, title, count, color, cards }) => {
                    const c = kanbanColors[color]
                    return (
                      <div key={id} className="flex-shrink-0 rounded-2xl p-3"
                        style={{ width: 160, background: c.bg, border: `1px solid ${c.border}` }}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <div className={`w-2 h-2 rounded-full ${c.dot}`} />
                            <span className={`text-[10px] font-bold ${c.text}`}>{title}</span>
                          </div>
                          <span className="text-[9px] text-white/30 bg-white/5 px-1.5 py-0.5 rounded-full">{count}</span>
                        </div>
                        <div className="space-y-1.5">
                          {cards.map((name) => (
                            <div key={name} className="rounded-xl px-2.5 py-2"
                              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                              <p className="text-[9px] text-white/70 font-medium">{name}</p>
                            </div>
                          ))}
                          <div className="rounded-xl px-2.5 py-1.5 text-center cursor-pointer"
                            style={{ border: '1px dashed rgba(255,255,255,0.07)' }}>
                            <span className="text-[8px] text-white/20">+ {count - cards.length} mais</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Student table */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/35 mb-3">Alunos Recentes</p>
                <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                  {/* Table header */}
                  <div className="grid grid-cols-5 px-4 py-2.5"
                    style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {['Aluno', 'Etapa', 'Progresso', 'Status', 'Origem'].map(h => (
                      <p key={h} className="text-[9px] font-bold uppercase tracking-wider text-white/30">{h}</p>
                    ))}
                  </div>
                  {/* Rows */}
                  {students.map(({ id, name, avatar, stage, progress, status, origin }) => (
                    <div key={id} className="grid grid-cols-5 items-center px-4 py-3 hover:bg-white/[0.02] transition-colors"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold flex-shrink-0"
                          style={{ background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)' }}>{avatar}</div>
                        <span className="text-[10px] text-white/80 font-medium truncate">{name}</span>
                      </div>
                      <span className="text-[10px] text-white/45">{stage}</span>
                      <div>
                        <div className="progress-track w-20">
                          <div className={`progress-fill-${status === 'done' ? 'green' : status === 'alert' ? 'amber' : 'blue'}`}
                            style={{ width: `${progress}%` }} />
                        </div>
                        <span className="text-[8px] text-white/25 mt-0.5">{progress}%</span>
                      </div>
                      <span className={`pill text-[8px] px-2 py-0.5 rounded-full font-bold inline-block
                        ${status === 'done' ? 'pill-done' : status === 'active' ? 'pill-active' : status === 'pending' ? 'pill-pending' : 'pill-alert'}`}>
                        {status === 'done' ? 'Concluído' : status === 'active' ? 'Ativo' : status === 'pending' ? 'Pendente' : 'Atenção'}
                      </span>
                      <span className="text-[10px] text-white/35">{origin}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

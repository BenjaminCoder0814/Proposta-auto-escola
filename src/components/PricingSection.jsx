import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Monitor, LayoutDashboard, Smartphone, Camera, Film, CheckCircle2, Star, Package, Repeat } from 'lucide-react'
import { unitPrices, packageDeal, monthly } from '../data/pricing'

/* ─── Icon map ─── */
const iconMap = { Monitor, LayoutDashboard, Smartphone, Camera, Film }

/* ─── Color tokens ─── */
const colorMap = {
  blue:   { bg: 'rgba(37,99,235,0.08)',   border: 'rgba(37,99,235,0.22)',   icon: '#93C5FD',  price: 'text-blue-400',   badge: 'bg-blue-500/10 border-blue-500/20 text-blue-300' },
  cyan:   { bg: 'rgba(6,182,212,0.08)',   border: 'rgba(6,182,212,0.22)',   icon: '#22D3EE',  price: 'text-cyan-400',   badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' },
  purple: { bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.22)', icon: '#C4B5FD', price: 'text-purple-400', badge: 'bg-purple-500/10 border-purple-500/20 text-purple-300' },
  green:  { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.22)', icon: '#6EE7B7', price: 'text-green-400',  badge: 'bg-green-500/10 border-green-500/20 text-green-300' },
  amber:  { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.22)', icon: '#FCD34D', price: 'text-amber-400', badge: 'bg-amber-500/10 border-amber-500/20 text-amber-300' },
}

const fade = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25,0.1,0.25,1] } },
}

const fmt = (n) => n.toLocaleString('pt-BR')

/* ─── Unit Price Card ─── */
function UnitCard({ item, index, inView }) {
  const c    = colorMap[item.color]
  const Icon = iconMap[item.icon] || Monitor
  return (
    <motion.div
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ ...fade, visible: { ...fade.visible, transition: { delay: index * 0.07, duration: 0.6 } } }}
      className="glass card-hover rounded-3xl p-6 flex flex-col"
      style={{ border: `1px solid ${c.border}30` }}
    >
      {/* Icon + title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: c.bg, border: `1px solid ${c.border}` }}>
          <Icon size={18} style={{ color: c.icon }} />
        </div>
        <div>
          <h3 className="font-bold text-white text-sm leading-tight">{item.title}</h3>
          <p className="text-white/35 text-xs">{item.subtitle}</p>
        </div>
      </div>

      {/* Price */}
      <div className="mb-4">
        <span className={`text-xl font-bold ${c.price}`}>A consultar</span>
        <span className="text-xs text-white/35">R$ </span>
        <span className={`text-3xl font-black ${c.price}`}>{fmt(item.price)}</span>
        <span className="text-xs text-white/35 ml-1">único</span>
      </div>

      <p className="text-white/45 text-xs leading-relaxed mb-4">{item.description}</p>

      {/* Features */}
      <ul className="space-y-2 mt-auto">
        {item.features.map(f => (
          <li key={f} className="flex items-start gap-2">
            <CheckCircle2 size={12} className="text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-xs text-white/55">{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

/* ─── Section ─── */
export default function PricingSection() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fade} className="text-center mb-16">
          <div className="eyebrow justify-center mb-4">Investimento</div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5">
            Proposta de <span className="text-gradient">valores</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Cada frente do projeto tem um valor individual definido. A contratação em pacote
            completo oferece uma condição especial significativa.
          </p>
        </motion.div>

        {/* ── Part 1: Unit prices ── */}
        <div className="mb-5">
          <motion.p initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fade}
            className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">
            Valores individuais por entrega
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {unitPrices.map((item, i) => (
              <UnitCard key={item.id} item={item} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* ── Part 2: Package deal ── */}}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden mb-8"
          style={{
            background: 'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(6,182,212,0.08))',
            border: '1px solid rgba(37,99,235,0.3)',
            boxShadow: '0 0 80px rgba(37,99,235,0.12), 0 40px 100px rgba(0,0,0,0.5)',
          }}
        >
          {/* Badge */}
          <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
            style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)', boxShadow: '0 0 20px rgba(37,99,235,0.4)' }}>
            <Star size={11} className="fill-white" /> Recomendado
          </div>

          <div className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left — info */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Package size={20} className="text-blue-400" />
                  <span className="eyebrow" style={{ color: '#93C5FD' }}>Projeto Completo</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-2">Ecossistema Digital Completo</h3>
                                <h3 className="text-3xl font-black text-white mb-2">Ecossistema Digital CFC Lopes</h3>
                <p className="text-white/50 mb-6 text-sm">
                  Todas as frentes contratadas em um único projeto integrado. Entrega coordenada,
                  identidade visual unificada e menor custo total.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {packageDeal.includes.map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-cyan-400 flex-shrink-0" />
                      <span className="text-xs text-white/60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — pricing */}
              <div className="text-center lg:text-right">
                <p className="text-white/40 text-sm mb-1 line-through">
                  R$ {fmt(packageDeal.fullPrice)} somados individualmente
                </p>
                <p className="text-[11px] text-amber-400/70 mb-1">Investindo agora, você economiza R$ {fmt(packageDeal.fullPrice - packageDeal.specialPrice)}</p>
                <div className="inline-flex flex-col items-center lg:items-end">
                  <p className="text-white/40 text-sm font-medium">Projeto completo por</p>
                  <div className="flex items-baseline gap-1 my-2">
                    <span className="text-lg text-white/60">R$</span>
                    <span className="text-6xl font-black text-gradient">{fmt(packageDeal.specialPrice)}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.3)', color: '#6EE7B7' }}>
                    economia de R$ {fmt(packageDeal.fullPrice - packageDeal.specialPrice)}
                  </div>
                </div>
                <p className="text-white/30 text-xs mt-3">Pagamento à vista ou parcelado. Contrato formal.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Part 3: Monthly ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="glass rounded-3xl p-8 border border-white/8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Repeat size={16} className="text-purple-400" />
                <span className="eyebrow" style={{ color: '#C4B5FD' }}>Pós-entrega</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Manutenção mensal</h3>
              <p className="text-white/40 text-sm mb-4">Contrato mínimo de {monthly.minContract}. Garante que todo o ecossistema digital se mantenha atualizado, ativo e estratégico.</p>
              <div className="grid grid-cols-2 gap-2">
                {monthly.includes.map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-purple-400 flex-shrink-0" />
                    <span className="text-xs text-white/55">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/25 text-xs mt-3 italic">{monthly.note}</p>
            </div>
            {/* Right */}
            <div className="text-center lg:text-right">
              <p className="text-white/40 text-sm mb-1">Investimento mensal</p>
              <div className="flex items-baseline gap-1 justify-center lg:justify-end my-1">
                <span className="text-lg text-white/60">R$</span>
                <span className="text-5xl font-black text-gradient-purple">{fmt(monthly.price)}</span>
                <span className="text-white/40 text-lg">/{monthly.label}</span>
              </div>
              <p className="text-white/30 text-xs mt-2">Contrato a partir de {monthly.minContract}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, MessageCircle, Repeat2, TrendingUp, Image, Film, Layout, BookOpen } from 'lucide-react'

const gridImages = [
  { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80', likes: '1.2k', comments: '34' },
  { src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80', likes: '892',  comments: '21' },
  { src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80', likes: '2.1k', comments: '57' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', likes: '743',  comments: '18' },
  { src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80', likes: '1.5k', comments: '42' },
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80', likes: '988',  comments: '29' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80', likes: '3.4k', comments: '88' },
  { src: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&q=80', likes: '1.8k', comments: '51' },
  { src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80', likes: '654',  comments: '16' },
]

const contentTypes = [
  {
    icon: Image,
    color: 'green',
    title: 'Feed Estratégico',
    sub: '8 posts / mês',
    desc: 'Visual consistente com identidade de marca. Posts informativos, depoimentos de alunos, bastidores e dicas sobre a habilitação.',
  },
  {
    icon: BookOpen,
    color: 'blue',
    title: 'Stories Diários',
    sub: '10 stories / mês',
    desc: 'Interação direta com o público: enquetes, dúvidas frequentes, countdown de promoções e conteúdo mais informal.',
  },
  {
    icon: Film,
    color: 'purple',
    title: 'Reels de Alta Alcance',
    sub: '4 reels / mês',
    desc: 'Vídeos curtos de forte alcance orgânico. Processo de habilitação, depoimentos reais e conteúdo educativo em formato vertical.',
  },
]

const colorMap = {
  green:  { icon: 'text-green-400',  glow: 'rgba(16,185,129,0.1)',  pill: 'bg-green-500/10 border-green-500/20 text-green-300' },
  blue:   { icon: 'text-blue-400',   glow: 'rgba(37,99,235,0.1)',   pill: 'bg-blue-500/10 border-blue-500/20 text-blue-300' },
  purple: { icon: 'text-purple-400', glow: 'rgba(139,92,246,0.1)', pill: 'bg-purple-500/10 border-purple-500/20 text-purple-300' },
}

const fade = {
  hidden:  { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.65, ease: [0.25,0.1,0.25,1] } },
}

export default function SocialMediaSection() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="social" ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16,185,129,0.07) 0%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fade} className="text-center mb-16">
          <div className="eyebrow justify-center mb-4" style={{ color: '#6EE7B7' }}>Redes Sociais</div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5">
            Presença digital <span className="text-gradient-green">consistente</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Uma estratégia de conteúdo visual que posiciona o CFC Lopes como autoridade local,
            atrai novos alunos e mantém relacionamento com os atuais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Instagram mockup */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{ ...fade, visible: { ...fade.visible, transition: { delay: 0.15, duration: 0.65 } } }}
          >
            {/* Profile header */}
            <div className="glass rounded-3xl overflow-hidden border border-white/8">
              <div className="p-5 flex items-center gap-4 border-b border-white/5">
                <div className="w-16 h-16 rounded-full flex items-center justify-center font-black text-xl"
                  style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}>CL</div>
                <div>
                  <p className="font-bold text-white text-sm">@cfclopes_ec</p>
                  <p className="text-white/40 text-xs mt-0.5">Autoescola · Engenheiro Coelho, SP</p>
                    <p className="text-white/40 text-xs mt-0.5">CFC Lopes · Engenheiro Coelho, SP</p>
                  <div className="flex gap-4 mt-2 text-xs">
                    <span><b className="text-white">847</b> <span className="text-white/40">posts</span></span>
                    <span><b className="text-white">4.2k</b> <span className="text-white/40">seguidores</span></span>
                    <span><b className="text-white">312</b> <span className="text-white/40">seguindo</span></span>
                  </div>
                </div>
              </div>

              {/* 3×3 grid */}
              <div className="grid grid-cols-3 gap-0.5 p-0.5">
                {gridImages.map(({ src, likes, comments }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                    className="group relative aspect-square overflow-hidden cursor-pointer"
                  >
                    <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      style={{ filter: 'brightness(0.75) saturate(0.85)' }} />
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ background: 'rgba(0,0,0,0.55)' }}>
                      <span className="flex items-center gap-1 text-white text-xs font-bold"><Heart size={12} className="fill-white" />{likes}</span>
                      <span className="flex items-center gap-1 text-white text-xs font-bold"><MessageCircle size={12} />{comments}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content strategy cards */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{ ...fade, visible: { ...fade.visible, transition: { delay: 0.25, duration: 0.65 } } }}
            className="space-y-5"
          >
            {contentTypes.map(({ icon: Icon, color, title, sub, desc }, i) => {
              const c = colorMap[color]
              return (
                <motion.div key={title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="glass card-hover rounded-2xl p-6 flex gap-5"
                  style={{ boxShadow: `0 0 30px ${c.glow}` }}>
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 border ${c.pill}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-white text-sm">{title}</h3>
                      <span className={`badge border text-[9px] ${c.pill}`}>{sub}</span>
                    </div>
                    <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Metrics row */}
            <div className="glass rounded-2xl p-5 border border-white/8">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={14} className="text-green-400" />
                <span className="text-xs font-bold text-white/60 uppercase tracking-wider">Resultados esperados</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Alcance mensal', value: '+5k', color: 'text-green-400' },
                  { label: 'Seguidores/mês', value: '+200', color: 'text-blue-400' },
                  { label: 'Engajamento', value: '↑3.5%', color: 'text-purple-400' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="text-center p-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <p className={`text-xl font-black ${color}`}>{value}</p>
                    <p className="text-[9px] text-white/35 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Repel */}
            <div className="flex items-center gap-2 text-xs text-white/30 px-2">
              <Repeat2 size={13} />
              <span>Estratégia alinhada com datas sazonais, campanhas e promoções da autoescola</span>
              <span>Estratégia alinhada com datas sazonais, campanhas e promoções do CFC Lopes</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="py-10 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-white/50 text-sm">Autoescola · Projeto de Transformação Digital · 2026</span>
        </div>
        <p className="text-white/20 text-xs">Material confidencial — uso interno e apresentação comercial.</p>
      </div>
    </footer>
  )
}

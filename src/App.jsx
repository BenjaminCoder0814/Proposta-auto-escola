import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectOverview from './components/ProjectOverview'
import ScopeSection from './components/ScopeSection'
import SocialMediaSection from './components/SocialMediaSection'
import HowItWorks from './components/HowItWorks'
import DemoSiteSection from './components/DemoSiteSection'
import DemoSystemSection from './components/DemoSystemSection'
import DemoAppSection from './components/DemoAppSection'
import ReferralSection from './components/ReferralSection'
import PricingSection from './components/PricingSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-night-950 text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <div className="section-divider mx-20" />
      <ProjectOverview />
      <div className="section-divider mx-20" />
      <ScopeSection />
      <div className="section-divider mx-20" />
      <SocialMediaSection />
      <div className="section-divider mx-20" />
      <HowItWorks />
      <div className="section-divider mx-20" />
      <DemoSiteSection />
      <div className="section-divider mx-20" />
      <DemoSystemSection />
      <div className="section-divider mx-20" />
      <DemoAppSection />
      <div className="section-divider mx-20" />
      <ReferralSection />
      <div className="section-divider mx-20" />
      <PricingSection />
      <div className="section-divider mx-20" />
      <FinalCTA />
      <Footer />
    </div>
  )
}

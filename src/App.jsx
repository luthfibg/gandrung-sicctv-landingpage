import Header from './components/Header'
import Hero from './components/Hero'
import { Intro, Stats, Pricing } from './sections/Intro'
import { Problem, Solution } from './sections/Story'
import { Steps } from './sections/Steps'
import { Products } from './sections/Products'
import { Quote, Trust, Placements } from './sections/Proof'
import { Advantages, Capabilities, Market } from './sections/Benefits'
import { CtaForm, Testimonials, FinalCta, Faq } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Stats />
        <Pricing />
        <Problem />
        <Solution />
        <Steps />
        <Products />
        <Quote />
        <Trust />
        <Placements />
        <Advantages />
        <Capabilities />
        <Market />
        <CtaForm />
        <Testimonials />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

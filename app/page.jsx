'use client'

import { useState, useEffect } from 'react'

import Navbar      from '@/components/Navbar'
import Modal       from '@/components/Modal'
import Hero        from '@/components/sections/Hero'
import Services    from '@/components/sections/Services'
import Synapse     from '@/components/sections/Synapse'
import Clients     from '@/components/sections/Clients'
import Methodology from '@/components/sections/Methodology'
import About       from '@/components/sections/About'
import Presence    from '@/components/sections/Presence'
import Social      from '@/components/sections/Social'
import CtaBanner   from '@/components/sections/CtaBanner'
import Contact     from '@/components/sections/Contact'
import Footer      from '@/components/sections/Footer'
import Blog        from '@/components/sections/Blog'

import { SERVICES } from '@/lib/data/services'

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [modal, setModal]       = useState(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const activeService = SERVICES.find((s) => s.id === modal)

  return (
    <>
      {activeService && <Modal service={activeService} onClose={() => setModal(null)} />}
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Services onOpenModal={(id) => setModal(id)} />
        <Blog />
        <Synapse />
        <Clients />
        <Methodology />
        <About />
        <Presence />
        <Social />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
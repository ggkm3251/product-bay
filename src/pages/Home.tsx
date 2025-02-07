import React from 'react'
import Footer from '../components/Footer'
import PromotionalBanner from '../components/PromotionalBanner'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
        <PromotionalBanner />
        Home
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home
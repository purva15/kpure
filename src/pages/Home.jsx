import React from 'react'
import MainBanner from '../components/MainBanner'
import BestSeller from '../components/BestSeller'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import PromoBanner from '../components/Promotion'
import FAQs from '../components/FAQs/FAQs'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner />
      <BestSeller />
      <FAQs />
      <Testimonial />
      <PromoBanner />
      <Footer />
    </div>
  )
}

export default Home

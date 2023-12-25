"use client"
import Banner from '@/component/Banner'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import React from 'react'

const page = () => {
  const contactUsImage = '/contacus-banner.webp';
  return (
    <>
    <Header />
    <Banner imageSrc={contactUsImage} pagename="Contact Us"/>
    <Footer />    
    </>
  )
}

export default page
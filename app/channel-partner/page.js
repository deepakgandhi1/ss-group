"use client"
import Banner from '@/component/Banner'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import React from 'react'

const page = () => {
  const channelUsImage = '/channelpartner-banner.webp';
  return (
    <>
     
        <Header />
        <main className="d-flex flex-wrap float-start col-12">
        <Banner imageSrc={channelUsImage} pagename="Channel Partner"/>
        <section>
        <div className='container'>
            <div className='row'>
                <div className='web-container'>
                    <div className='col-lg-12 text-center'>
                        <div className='heading border-0 text-uppercase p-0 mb-4'>
                            <h3 className='effectheading desktop-show' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="500" data-aos-once='true'>JOIN HANDS WITH SS GROUP</h3>
                            <h3 className='effectheading mobile-show' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="500" data-aos-once='true'>JOIN HANDS WITH<br/> SS GROUP</h3>
                            </div>
                    </div>
                    <div className='col-12 float-start text-center'>
                        <p data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>Get ready for a life of growth and prosperity with one of the largest real estate developers in Gurugram. Become a SS Group authorized channel partner and delight your customers with a wide range of residential and commercial properties to choose from across Gurugram.</p>
                        <p data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="600" data-aos-once='true'>For Channel Partner queries, email us at <a href='mailto:sales@ssgroup-india.com'>sales@ssgroup-india.com</a></p>
                    </div>
                </div>
                </div>
        </div>
    </section>
        </main>
        <Footer />
    </>
  )
}

export default page
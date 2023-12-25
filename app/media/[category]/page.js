"use client"
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import Mediatabs from '@/component/Mediatabs';
import MediaNavigation from '@/component/MediaNavigation'
import React from 'react'
import { useParams } from "next/navigation";

const page = () => {
const params = useParams();
const slug = params.category;
const originalString = slug;
  const stringWithoutHyphen = originalString.replace(/-/g, ' ');

return (
    <>
        <Header className='blackheader' />
        <main className="d-flex flex-wrap float-start col-12 mt-5">
        <section>
                <div className='media'>
                    <div className='container'>
                        <div className='row'>
                            <div className=' flex-center'>
                                <div className='col-12 float-start heading text-center'>
                                    <h3 className='effectheading' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>{stringWithoutHyphen}</h3>
                                </div>
                                </div>  
                        </div>
                               <div className='col-lg-10 col-12 m-auto '>
                               <div className='row'>
                                    <div className='col-lg-3 col-12'>
                                        <div className='menubar'>
                                           <MediaNavigation />
                                        </div>
                                    </div>
                                    <div className='col-lg-9 col-12'>
                                        <div className='mediasection'>
                                              <Mediatabs />                                        
                                        </div>
                                </div>
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
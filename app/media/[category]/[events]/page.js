"use client"
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import Mediagallery2 from '@/component/Mediagallery2';
import MediaNavigation from '@/component/MediaNavigation'
import React, {useState, useEffect} from 'react'
import { useParams } from "next/navigation";
import axios from "axios";

const page = () => {
// Dynamic code start
const params = useParams();
const slug = params.category;
const url = window.location.href;
const queryString = url.split("?")[1];
const queryParams = new URLSearchParams(queryString);
const yearVal = queryParams.get("y") || "";
const monthVal = queryParams.get("m") || "";
const eventVal = queryParams.get("cat") || ""
const [pagedata, setPagedata] = useState([]);
  useEffect(() => {
  let mounted = true;
  const loadData = async () => {
     const response = await axios.get(`https://www.ssgroup-india.com/admin_new/api/events_data.php?y=${yearVal}&m=${monthVal}&cat=${eventVal}`);
     if(mounted) {
        console.log(response.data);
         setPagedata(response.data);
     }
  }

  loadData();

  return () => {
      mounted = false;
    };
}, []);

console.log(pagedata);
if (pagedata.length===0) {
  console.log('no data');
  return null;
}

// Dynamic code end

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
                                    <h3 className='effectheading' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>{slug}</h3>
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
                                        <Mediagallery2 gallery_data={pagedata.media} />                                       
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
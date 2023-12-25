import React from 'react';
import Link from 'next/link';

const QuickLinks = ({ ebroucher, application, slug, const_status, virtualtour }) => {
  return (
    <div className='quicklink col-12 float-start'>
      <div className='container'>
        <div className='web-container'>
          <div className='col-12 flaot-start flex-center'>
            <div className='heading text-center border-0'>
              <h3
                className='effectheading'
                data-aos="fade-in"
                data-aos-easing="ease-in"
                data-aos-offset="150"
                data-aos-duration="1000"
                data-aos-once='true'
              >
                Quick link
              </h3>
            </div>
          </div>
          <div className='col-lg-10 col-12 m-auto'>
            <div className='row flex-center'>
                {ebroucher && (
              <div className='col-lg-4 col-12'>
                  <a href={ebroucher} target='_blank'>
                    <button className="realstatebtn text-white">
                      <span className="text-white">BROCHURE</span>
                    </button>
                  </a>
              </div>
                )}
                {application && (
              <div className='col-lg-4 col-12'>
                  <a href={application} target='_blank'>
                    <button className="realstatebtn text-white">
                      <span className="text-white">FLOOR PLANS</span>
                    </button>
                  </a>
              </div>
                )}
              {virtualtour && (
              <div className='col-lg-4 col-12'>
              
                  <a href={virtualtour} target='_blank'>
                    <button className="realstatebtn text-white">
                      <span className="text-white">360<sup>0</sup> View</span>
                    </button>
                  </a>
              </div>              
              )}
              {const_status === "1" && slug && (
              <div className='col-lg-4 col-12'> 
    <Link href={"/construction/" + slug}>
      <button className="realstatebtn text-white">
        <span className="text-white">CONSTRUCTION UPDATES</span>
      </button>
    </Link>
</div>
)}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;

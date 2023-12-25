"use client"
import React from 'react';
import Slider from "react-slick";

const News = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplaySpeed: 5000,
    autoplay: true,
  };
  const newsItems = [
    {
      content: "The Leaf  Project is now  Ready-To-Move-In",
    },
    {
      content: "SS Cendana Residences Project Successfully  Launched at Sector - 83, New Gurugram",
    },
    {
      content: "SS Cendana Residences Project Successfully  Launched at Sector - 83, New Gurugram",
    },
    {
      content: "SS Strada Commercial Project Successfully  Launched at Sector - 84, New Gurugram",
    },
    {
      content: "ICICI Bank is now Operational at SS Omnia Sector 86, New Gurugram",
    }
  ];
  return (
    <>
        <div className='slide'>
        <div className='container'>
                <div className='web-container'>
            <div className='row'>
                <div className='col-lg-8 col-12 m-auto py-5 text-center' data-aos="fade-left" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="800" data-aos-once='true'>
                    <div className='newstitle'>
                        <h3 className='col-lg-10 col-12 m-auto'>LATEST UPDATES</h3>
                    </div>
                <Slider {...settings}>
      {newsItems.map((newsItem, index) => (
        <div key={index}>
          <div className="newslider flex-center">
            <p className='m-0 text-white col-lg-8 col-12 m-auto'>{newsItem.content}</p>
          </div>
        </div>
      ))}
    </Slider>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
  );
};
export default News;
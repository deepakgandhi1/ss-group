import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import Image from 'next/image';

export const GallerySlider = ({ galleryData }) => {
  const sliderContent = galleryData;
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplaySpeed: 8000,
    autoplay: true,
    afterChange: (index) => setCurrentSlide(index),
  };

  const sectionRef = useRef();
  const [inView, setInView] = useState(false);
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  const isOddSlide = currentSlide % 2 === 1;

  return (
    <>
      <section ref={sectionRef}>
        <div className="pgallery col-12 float-start">
          <div className='container'>
            <div className='row'>
              <div className='col-12 flaot-start flex-center'>
                <div className='heading text-center border-0'>
                  <h3 className='effectheading' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="150" data-aos-duration="1000" data-aos-once='true'>GALLERY</h3>
                </div>
              </div>
              <div className='col-lg-10 m-auto col-12'>
                <div className='col-12 float-start insidenavbarbutton'>
                  <Slider {...settings}>
                  {sliderContent && sliderContent.map((slide, index) => (
  <div key={index}>
    <div className={`gallerybanner position-relative ${isOddSlide ? 'zoom-in' : 'zoom-out'}`}>
      <Image
        src={slide.imageSrc}
        width='1500'
        height='1000'
        alt={slide.alttitle || 'SS GROUP'} 
      />
    </div>
  </div>
))}
                  </Slider>
                  <div className="slider-numbers flex-center mt-2">
                    {currentSlide !== null ? currentSlide + 1 : null}/{sliderContent ? sliderContent.length : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GallerySlider;

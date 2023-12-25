"use client"
import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";

const Slick = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplaySpeed: 6000, 
        autoplay: true,
        arrows: false,
        afterChange: (index) => setCurrentSlide(index),
    };

    const sliderContent = [
        {
            imageSrc: '/banner-01.webp',
            altText: 'Image 1',
            heading: 'CRAFTING LIFESTYLE FOR EXQUISITE LIVING',
        },
        {
            imageSrc: '/banner-02.webp',
            altText: 'Image 2',
            heading: 'A LUXURY CALLED HOME',
            subHeading: 'SS Cendana, Sector 83, Gurugram',
        },
        {
            imageSrc: '/banner-03.webp',
            altText: 'Image 3',
            heading: 'THE MOJO OF NEIGHBOURHOOD',
            subHeading: 'SS Strada Sector 84, Gurugram',
        },
        {
            imageSrc: '/banner-04.webp',
            altText: 'Image 4',
            heading: 'EXQUISITE LIVING AWAITS YOU',
            subHeading: 'SS Linden Sector 84-85, Gurugram',
        },
    ];

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
          
                            
                                <Slider {...settings}>
                                    {sliderContent.map((slide, index) => (
                                        <div key={index}>
                                             <div className='swiperslider position-relative'>
                                    <div className={`projectbanner ${isOddSlide ? 'zoom-in' : 'zoom-out'}`}>
                                    <img src={slide.imageSrc} width='1920' height='954'  alt={slide.altText} />
                                    </div>
                                    <div className='home_slidertext position-absolute top-55 text-center text-white col-12 flex-center d-grid'>
                                        <h4>{slide.heading}</h4>
                                        {slide.subHeading && <p>{slide.subHeading}</p>}
                                    </div>
                                </div>
                                        </div>
                                    ))}
                                </Slider>
            
        </>
    );
}
export default Slick;
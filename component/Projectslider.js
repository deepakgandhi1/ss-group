import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import Link from "next/link"

const Projectslider = ({ categoryData }) => {
  console.log(categoryData);
  const projectSliders = useRef([]);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: false,
    responsive: [
      {
        breakpoint: 990, 
        settings: {
          slidesToShow: 1.1,
          arrows: false,
        },
      },
    ]
  };

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
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

  return (
    <>
      {categoryData.homes ?
      <section ref={sectionRef} className="image-effect-section">
        <div className='row'>
          <div className='projectslickslider pb-3 mb-3'>
            <div className='col-12 float-start text-center title' data-aos="fade-left" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="800" data-aos-once='true'>
            <span className="colorborder position-relative"><em></em></span>
              <h3>Homes BY SS GROUP</h3>
            </div>
            <div className='col-11 float-end homes' data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="300" data-aos-duration="1000" data-aos-once='true'>
            {categoryData.homes.LuxuryResidences || categoryData.homes.PremiumResidences || categoryData.homes.OngoingProjects ? 
              <>
              <Slider {...settings}>
              {categoryData.homes.LuxuryResidences && Object.keys(categoryData.homes.LuxuryResidences).map((pd1, index) => (
                  <div key={index}>
                    <Link href={(categoryData.homes.LuxuryResidences[index].linkActive==1) ? "/projects/homes/" + categoryData.homes.LuxuryResidences[index].slug : ""}>
                    <div className={`projectslider`} ref={(el) => projectSliders.current.push(el)}>
                                        <figure className='snip0016'>
                                        <span className='srv_layer'></span>
                                            {categoryData.homes.LuxuryResidences[index].imageSrc ?
                                            <Image src={categoryData.homes.LuxuryResidences[index].imageSrc} width='655' height='597' alt='' />
                                            : null}
                                            <figcaption>
                                                {/* <h4>{categoryData.homes.LuxuryResidences[index].ProjectName}</h4>
                                                <p>{categoryData.homes.LuxuryResidences[index].location}</p> */}
                                                 <h4 dangerouslySetInnerHTML={{ __html: categoryData.homes.LuxuryResidences[index].ProjectName }} />
<p dangerouslySetInnerHTML={{ __html: categoryData.homes.LuxuryResidences[index].location }} />
                                                <p>Know More</p>
                                       </figcaption>
                              </figure>
                        </div>
                        </Link>
                  </div>
                ))}
                {categoryData.homes.PremiumResidences && Object.keys(categoryData.homes.PremiumResidences).map((pd1, index) => (
                  <div key={index}>
                    <Link href={(categoryData.homes.PremiumResidences[index].linkActive==1) ? "/projects/homes/" + categoryData.homes.PremiumResidences[index].slug : ""}>
                    <div className={`projectslider`} ref={(el) => projectSliders.current.push(el)}>
                                        <figure className='snip0016'>
                                        <span className='srv_layer'></span>
                                            {categoryData.homes.PremiumResidences[index].imageSrc ?
                                            <Image src={categoryData.homes.PremiumResidences[index].imageSrc} width='655' height='597' alt='' />
                                            : null}
                                            <figcaption>
                                                <h4>{categoryData.homes.PremiumResidences[index].ProjectName}</h4>
                                                <p>{categoryData.homes.PremiumResidences[index].location}</p>
                                                <p>Know More</p>
                                       </figcaption>
                              </figure>
                        </div>
                        </Link>
                  </div>
                ))}
              </Slider>
              </>
              : null}
            </div>
          </div>
        </div>
      </section>
      : null}
      {/* Retail Data Start */}
      {categoryData.retail ?
      <section ref={sectionRef} className={`image-effect-section`}>
        <div className='row'>
          <div className='projectslickslider pb-3 mb-3'>
          <div className='col-12 float-start text-center title' data-aos="fade-left" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="800" data-aos-once='true'>
              <h3>Retail BY SS GROUP</h3>
            </div>
            <div className='col-11 float-end homes' data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="300" data-aos-duration="1000" data-aos-once='true'>
            {categoryData.retail.LuxuryResidences || categoryData.retail.PremiumResidences || categoryData.retail.OngoingProjects ? 
              <>
              <Slider {...settings}>
              {categoryData.retail.LuxuryResidences && Object.keys(categoryData.retail.LuxuryResidences).map((pd1, index) => (
                  <div key={index}>
                    <Link href={(categoryData.retail.LuxuryResidences[index].linkActive==1) ? "/projects/retail/" + categoryData.retail.LuxuryResidences[index].slug : ""}>
                   
                    <div className={`projectslider`} ref={(el) => projectSliders.current.push(el)}>
                                        <figure className='snip0016'>
                                        <span className='srv_layer'></span>
                                            {categoryData.retail.LuxuryResidences[index].imageSrc ?
                                            <Image src={categoryData.retail.LuxuryResidences[index].imageSrc} width='655' height='597' alt='' />
                                            : null}
                                            <figcaption>
                                                {/* <h4>{categoryData.retail.LuxuryResidences[index].ProjectName}</h4>
                                                <p>{categoryData.retail.LuxuryResidences[index].location}</p> */}
                                                <h4 dangerouslySetInnerHTML={{ __html: categoryData.retail.LuxuryResidences[index].ProjectName }} />
<p dangerouslySetInnerHTML={{ __html: categoryData.retail.LuxuryResidences[index].location }} />
                                                <p>Know More</p>
                                       </figcaption>
                              </figure>
                        </div>
                        </Link>
                  </div>
                ))}
                {categoryData.retail.PremiumResidences && Object.keys(categoryData.retail.PremiumResidences).map((pd1, index) => (
                  <div key={index}>
                    <Link href={(categoryData.retail.PremiumResidences[index].linkActive==1) ? "/projects/retail/" + categoryData.retail.PremiumResidences[index].slug : ""}>
                    <div className={`projectslider`} ref={(el) => projectSliders.current.push(el)}>
                                        <figure className='snip0016'>
                                        <span className='srv_layer'></span>
                                            {categoryData.retail.PremiumResidences[index].imageSrc ?
                                            <Image src={categoryData.retail.PremiumResidences[index].imageSrc} width='655' height='597' alt='' />
                                            : null}
                                            <figcaption>
                                                <h4>{categoryData.retail.PremiumResidences[index].ProjectName}</h4>
                                                <p>{categoryData.retail.PremiumResidences[index].location}</p>
                                                <p>Know More</p>
                                       </figcaption>
                              </figure>
                        </div>
                        </Link>
                  </div>
                ))}
                {categoryData.retail.OngoingProjects && Object.keys(categoryData.retail.OngoingProjects).map((pd1, index) => (
                  <div key={index}>
                    <Link href={(categoryData.retail.OngoingProjects[index].linkActive==1) ? "/projects/retail/" + categoryData.retail.OngoingProjects[index].slug : ""}>
                    <div className={`projectslider`} ref={(el) => projectSliders.current.push(el)}>
                                        <figure className='snip0016'>
                                        <span className='srv_layer'></span>
                                            {categoryData.retail.OngoingProjects[index].imageSrc ?
                                            <Image src={categoryData.retail.OngoingProjects[index].imageSrc} width='655' height='597' alt='' />
                                            : null}
                                            <figcaption>
                                                <h4>{categoryData.retail.OngoingProjects[index].ProjectName}</h4>
                                                <p>{categoryData.retail.OngoingProjects[index].location}</p>
                                                <p>Know More</p>
                                       </figcaption>
                              </figure>
                        </div>
                        </Link>
                  </div>
                ))}
              </Slider>
              </>
              : null}
            </div>
          </div>
        </div>
      </section>
      : null}
    </>
  );
};
export default Projectslider;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Integrity } from './svg-components/Integrity';
import { Sustainable } from './svg-components/Sustainable';
import { Innovative } from './svg-components/Innovative';
import { Excellence } from './svg-components/Excellence';
import { Commitment } from './svg-components/Commitment';

const circleData = [
  {
    title: 'TRUST',
    description: 'Trust is the key foundation to build any relation.',
    icon: <Integrity />,
  },
  {
    title: 'RELIABILITY',
    description: 'Reliability towards our business practices has helped ensure that our investors have faith in us.',
    icon: <Sustainable />,
  },
  {
    title: 'COMMITMENT',
    description: 'We believe in always delivering upon our promises, irrespective of the circumstances.',
    icon: <Commitment />,
    // image: 'commitment.png'
  },
  {
    title: 'QUALITY',
    description: 'The most essential value of all, we believe that great structures can only be built on great quality.',
    icon: <Excellence />,
  },
  {
    title: 'INNOVATIVE',
    description: 'We are dedicated to bringing innovative technologies to planning, design and construction to improve building reliability, functionality and value.',
    icon: <Innovative />,
  },
];

const Circleeffect = () => {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <section>
      <div className="infographics col-12 float-start sm-overflow">
        <div className="container">
          <div className="col-lg-11 m-auto col-12 homeslider position-relative">
            <Slider {...slickSettings}>
              {circleData.map((circle, index) => (
                <div key={index} className="text-center p-2" data-aos="fade-left" data-aos-easing="ease-in" data-aos-offset="300" data-aos-duration="800" data-aos-once='true'>
                  <div className="col-lg-11 m-auto col-12">
                  <div className="circle">
                    {circle.icon && <span>{circle.icon}</span>}
                    {circle.image && <span><img src={circle.image} alt={circle.title} /></span>}
                  </div>
                  <div className="circlecont">
                    <h4>{circle.title}</h4>
                    <p>{circle.description}</p>
                  </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Circleeffect;

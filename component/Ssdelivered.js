import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';

const Ssdelivered = ( {deliveredData} ) => {
  console.log(deliveredData);
    var settings = {
        dots: false,
        infinite: false,
        speed:500,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [
          {
            breakpoint: 990, 
            settings: {
              slidesToShow: 1,
              arrows: false,
            },
          },
        ]
      };
  return (
    <>
         <section>
 <div className="container">
        
 <div className="row">
          <div className="sscompleted col-12 float-start">
        <div className='col-12 float-start text-center title' data-aos="fade-left" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="800" data-aos-once='true'>
            <span className="colorborder position-relative"><em></em></span>
              <h3>Completed</h3>
            </div> 
            <div className="col-lg-11 m-auto col-12 image-effect-section">
            <Slider {...settings} className="col-12 float-start">
  {/* Slide loop start */}
  {Array.from({ length: Math.ceil(deliveredData.length / 8) }).map((_, repeatIndex) => (
    <div key={repeatIndex}>
      {/* Parent div for every 8 projects */}
      {Array.from({ length: 2 }).map((__, slideIndex) => {
        const startIdx = (repeatIndex * 8) + (slideIndex * 4);
        const endIdx = startIdx + 4;
        const projectsInSet = deliveredData.slice(startIdx, endIdx);
        const isLessThanFourProjects = projectsInSet.length < 4;
        return (
          <div key={slideIndex} className={`completeslide ${isLessThanFourProjects ? 'simillarBox' : ''}`}>
            {/* Inner div for every 4 projects */}
            {projectsInSet.map((project, innerIndex) => (
              <div key={innerIndex} className="completeproject">
                <div className="completeimg">
                  <Image src={project.imageSrc} alt="Project Image" width={655} height={597} />
                </div>
                <div className="completedetails">
                  <div className="mantainde">
                    <h4>{project.ProjectName}</h4>
                    <p>{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  ))}
  {/* Slide loop end */}
</Slider>


            </div>
            </div>
      </div>
            </div>
        </section>
    </>
  )
}

export default Ssdelivered
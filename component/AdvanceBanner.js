import React from 'react';
import { Parallax } from 'react-parallax';

export const AdvanceBanner = ({ bannerData }) => {
  const sections = bannerData;

  return (
    <>
      {sections && sections.map((section, index) => (
        <div key={index} className="parallaximage col-12 float-start" data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>
          <Parallax bgImage={section.imageUrl} strength={500} className='h-auto'>
            <div className='full-height'>
              <div className='projectcontent' data-aos="fade-left" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="800" data-aos-once='true'>
                <h3 className='text-uppercase'>{section.content.title}</h3>
                <ul>
                  {section.content.points.map((point, pointIndex) => (
                    <li key={pointIndex} >
                      <strong>{point.split(' ')[0]}</strong> {point.slice(point.split(' ')[0].length)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Parallax>
        </div>
      ))}
    </>
  );
};

export default AdvanceBanner;

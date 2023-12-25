"use client"
import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallerybox({ gallery_data }) {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <div className="Gallerybox mt-4">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]} >
      {gallery_data.map((galData, index) => (
          <a key={index} href={galData.image} data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>
            <div className='galleryimage'>
            <img src={galData.image} alt={galData.titleData + ' ' + galData.news_paperName} />
            </div>
            <div className="lightcont">
              <h4>{galData.titleData}</h4>
              <h5>
                {galData.news_paperName}
                <span className="pull-right">{galData.datemonth}</span>
              </h5>
            </div>
          </a>
        ))}
      </LightGallery>
    </div>
  );
}

export default Gallerybox;

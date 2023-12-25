"use client"
import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallerybox({ typeVal, gallery_data }) {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  const handleImageClick = (event, imageUrl, titleURL, curYear, curMonth, news_paperName) => {
    if (typeVal == 'events') {
      window.location.href = "/media/" + typeVal + "/galley?y=" + curYear + "&m=" + curMonth + "&cat=" + titleURL;
    } else if (typeVal == 'notice-ads') {
      window.location.href = news_paperName;
      // window.open(imageUrl, '_blank');
    } else {
      event.preventDefault();
    }
  };

return (
  <div className="Gallerybox mt-4">
  <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
    {gallery_data.map((galData, index) => {
      const eventNameURL = galData.titleData.replace(/ /g, '+');
      return <>
      <a
        key={index}
        href={(typeVal !== 'events') ? (typeVal !== 'notice-ads') ? galData.image : galData.news_paperName  : "/media/" + typeVal + "/gallery?y=" + galData.yearData + "&m=" + galData.monthData + "cat=" + eventNameURL}  // Provide a placeholder href for non-events type
        onClick={(event) => handleImageClick(event, galData.image, eventNameURL, galData.yearData, galData.monthData, galData.news_paperName)}
        data-aos="fade-up"
        data-aos-easing="ease-in"
        data-aos-offset="100"
        data-aos-duration="500"
        data-aos-once='true'
      >
        <div className='galleryimage'>
          <img src={galData.image} alt={galData.titleData + ' ' + galData.news_paperName} />
        </div>
        <div className="lightcont">
          <h4>{galData.titleData}</h4>
          <h5>
            {(typeVal !== 'notice-ads') ? galData.news_paperName : ''}
            <span className="pull-right">{galData.datemonth}</span>
          </h5>
        </div>
      </a>
      </>
})}
  </LightGallery>
</div>
  );
}

export default Gallerybox;

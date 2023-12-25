"use client"
import React, { useEffect } from 'react';

export const Textmovement = () => {
  useEffect(() => {
    const handleScroll = () => {
      const textElements = document.querySelectorAll('.scroll-animated-text');
      if (textElements) {
        const scrollY = window.scrollY;
        textElements.forEach((textElement) => {
          textElement.style.transform = `translate3d(-${scrollY * 0.5}px, 0, 0)`; // Adjust the factor (0.1) as needed
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='textmovement col-12 float-start position-absolute'>
          <div className='d-flex'>
            <div className='overflow-hidden fulltextcolumn'>
              <h1 className='scroll-animated-text'>SS GROUP</h1>
            </div>
            <div className='overflow-hidden hiddentextcolumn'>
              <h3 className='scroll-animated-text'>SS GROUP</h3>
            </div>
          </div>
      </div>
    </>
  );
};

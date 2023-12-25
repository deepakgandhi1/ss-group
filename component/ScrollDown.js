import React from 'react';

const ScrollDown = ({ targetRef }) => {
  const handleScrollTo = () => {
    if (targetRef.current) {
      const offset = targetRef.current.offsetTop - targetRef.current.clientHeight * 0.55;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <div id="scroll-down" onClick={handleScrollTo} className='desktop-show'>
      <span className="arrow-down flex-center"></span>
    </div>
  );
};

export default ScrollDown;
import React, { useEffect, useState } from 'react';
import { Logo } from './svg-components/Logo';

const Loader = () => {
  const [addClass, setAddClass] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAddClass(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <div className="loader">
      <div className={`manageloader position-relative overflow-hidden ${addClass ? 'viewlogo' : ''}`}>
        <div className="loaderlogo">
         <div className="logoload1 position-absolute">
         <Logo />
         </div>
         <div className="logoload2">
         <Logo />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

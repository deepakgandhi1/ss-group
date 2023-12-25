import { useState, useEffect } from 'react';
import Form from './Form';

export default function Enquiry({ enquireText, requestCallbackText }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Move initialization logic here if needed
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
 <>
    <div className='flex-center'>
     <button onClick={togglePopup} className='realstatebtn text-white'>
        <span className='text-white'>{enquireText}</span>
      </button>
              <div className={`popup flex-center ${isPopupOpen ? 'active' : ''}`}>
          <div className='popupContent col-12 pull-start'>
            <a className='position-absolute col-12 start-0 top-0 py-5 cursor-pointer'>
              <span onClick={togglePopup} className='p-2'>
                Close -
              </span>
            </a>
            <div className='row'>
              <div className='col-lg-3'></div>
              <div className='col-lg-6'>
                <div className='col-12 float-start text-center title'>
                  <h3 className='border-0 text-white'>{requestCallbackText}</h3>
                </div>
               <Form />
              </div>
              <div className='col-lg-3'>
                <div className='ssgroupformtext position-relative col-12 float-start'>
                  <div className='text-transform'>
                    <h2 className='d-flex text-center'>
                      <span>S</span>
                      <span>S</span>
                      <span className='px-2'></span>
                      <span>G</span>
                      <span>R</span>
                      <span>O</span>
                      <span>U</span>
                      <span>P</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
 </>
  );
}

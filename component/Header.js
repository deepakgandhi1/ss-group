import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from './svg-components/Logo';
import Enquiry from './Enquiry';
import Navbar from './Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const [header, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const [formData, setFormData] = useState({
    location: '',
    type: '',
    statusval: '',
  });
  const handleLinkClick = () => {
    setFormData({
      location: '',
      type: '',
      statusval: '',
    });
  };

  return (
    <header {...props}>
      <div className={header ? 'header fixed' : 'header'}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 float-start flex-center m-padding-0 p-0'>
              <div className='col-lg-4'>
                <div className='logo white'>
                  <Link href='/'>
                    <Logo />
                  </Link>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='text-center col-12 float-start text-white'>
                  <Enquiry enquireText='Enquire' requestCallbackText='Request a Call Back' />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='menustn d-flex justify-content-end align-items-center'>
                  <div className='categories desktop-show'>
                    <ul className='d-flex gap-5 m-0'>
                      <li>
                        <Link href='/projects/homes' onClick={handleLinkClick}>HOMES</Link>
                      </li>
                      <li>
                        <Link href='/projects/retail' onClick={handleLinkClick}>RETAIL</Link>
                      </li>
                      <li>
                        <Link href='/projects/offices' onClick={handleLinkClick}>OFFICE</Link>
                      </li>
                    </ul>
                  </div>
                  <Navbar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

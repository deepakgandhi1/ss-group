import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Facebook } from './svg-components/Facebook';
import { LinkedIn } from './svg-components/LinkedIn';
import { Twitter } from './svg-components/Twitter';
import { Instagram } from './svg-components/Instagram';

const Navbar = () => {
  const [canonical, setCanonical] = useState('');

  useEffect(() => {
    // Use window.location.href only on the client side
    setCanonical(window.location.href);
  }, []); // Run the effect only once after the component mounts

  const [menus, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!menus);
  };

  return (
    <>
      <div className="navbar">
                <div className={menus ? 'menus active' : 'menus'} >
                    <ul className='d-flex align-items-center toplinks'>
                        <li><a className='col-12 float-start p-1'><button onClick={handleToggle} className="hemburgur"><span></span><span></span></button></a></li>
                    </ul>
                    <div className='menuslide'>
                        <div onClick={handleToggle} className='cross'><a><em>X</em></a></div>
                        <div className='togmenu'>
                            <div className='row align-items-center'>
                                <div className='col-md-6'>
                                    <div className='leftbox d-flex pb-3'>
                                        <ul>
                                            <li className="wrapper" onClick={handleToggle} ><Link href='/ss-group' className="pseudo-text-effect" data-after="SS Group"><span>SS Group</span></Link></li>
                                            <li className="wrapper"  onClick={handleToggle}><Link href='/projects/homes' className="pseudo-text-effect" data-after="Homes"><span>Homes</span></Link></li>
                                            <li className="wrapper" onClick={handleToggle}><Link href='/projects/retail' className="pseudo-text-effect" data-after="Retail"><span>Retail</span></Link></li>
                                            <li className="wrapper" onClick={handleToggle}><Link href='/projects/offices' className="pseudo-text-effect" data-after="Offices"><span>Offices</span></Link></li>
                                            <li className="wrapper" onClick={handleToggle}><Link href='/contact-us' className="pseudo-text-effect" data-after="Contact Us"><span>Contact Us</span></Link></li>
                                        </ul>
                                    </div>
                                    <div className='col-lg-8 col-12'>
                                        <ul className='d-flex gap-4 text-uppercase sidemenus'>
                                            <li><Link href='/media' onClick={handleToggle}>Media</Link></li>
                                            <li><Link href='/career' onClick={handleToggle}>Career</Link></li>
                                            <li><Link href='/channel-partner' onClick={handleToggle}>Channel Partner</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='rightbox d-flex align-items-center'>
                                        <div className='address'>
                                            <div className='title'>
                                                <h3 className='text-white'>Get In Touch</h3>
                                            </div>
                                            <div className='addressbox'>
                                                <span>T</span>
                                                <p><a href='tel:+911244335100'>+91-124-4335100</a></p>
                                            </div>
                                        </div>
                                        <div className='address'>
                                            <div className='addressbox'>
                                                <span>E</span>
                                                <p><a href='mailto:sales@ssgroup-india.com'>sales@ssgroup-india.com</a></p>
                                            </div>
                                        </div>
                                        <div className='address'>
                                            <div className='addressbox'>
                                                <span>A</span>
                                                <p>77, SS House, <br />
                                                    Sector- 44, Gurgaon,<br />
                                                    (Haryana)- 122003</p>
                                            </div>
                                        </div>
                                        <div className='followus'>
                                            <div className='title mb-2'>
                                                <h3 className='text-white border-0 p-0'>Follow Us</h3>
                                            </div>
                                            <ul className='d-flex p-0 gap-3'>
                                                <li className='p-0'><a className='lh-1 fs-1' href="https://www.facebook.com/ssgrpindia" target="_blank"><Facebook /></a></li>
                                                <li className='p-0'><a className='lh-1 fs-1' href="https://www.instagram.com/ssgroup_in" target="_blank"><Instagram /></a></li>
                                                <li className='p-0'><a className='lh-1 fs-1' href="https://twitter.com/ssgroup_in" target="_blank"><Twitter /></a></li>
                                                <li className='p-0'><a className='lh-1 fs-1' href="https://linkedin.com/company/ssgroup-in"><LinkedIn /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;
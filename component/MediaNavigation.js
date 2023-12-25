import React from 'react'
import Link from 'next/link';

const MediaNavigation = () => {
  return (
    <>
     <ul>
                                                <li><Link href='/media/ad-campaigns'>Ad Campaigns</Link></li>
                                                <li><Link href='/media/events'>Events</Link></li>
                                                <li><Link href='/media/press-coverage'>Press Coverage</Link></li>
                                                <li><Link href='/media/notice-ads'>Notice ads</Link></li>
                                            </ul>
    </>
  )
}
export default MediaNavigation;
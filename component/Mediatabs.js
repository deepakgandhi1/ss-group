'use client'
import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Mediagallery from '@/component/Mediagallery';
// import Event from '@/component/Event'
import { useParams } from "next/navigation";
import axios from "axios";

// Sample image data with years and months
const imageGalleryData = [
  { id: 1, year: 2023, month: 'Jan', imageUrl: 'your_image_url_1' },
  { id: 2, year: 2023, month: 'Feb', imageUrl: 'your_image_url_2' },
  // Add more image data here...
  { id: 12, year: 2022, month: 'Dec', imageUrl: 'your_image_url_12' },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function Mediatabs() {
  const [tabValue, setTabValue] = useState(0);
  const [activeButton, setActiveButton] = useState(2023);
  const [activeMonth, setActiveMonth] = useState('Jan'); // Default to January

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleYearButtonClick = (year) => {
    setActiveButton(year);
  };

  const handleMonthTabClick = (month) => {
    setActiveMonth(month);
  };

  // Filter images based on the active year and month
  const filteredImages = imageGalleryData.filter(
    (image) => image.year === activeButton && image.month === activeMonth
  );
// Dynamic code start
const params = useParams();
const slug = params.category;
const url = window.location.href;
const queryString = url.split("?")[1];
const queryParams = new URLSearchParams(queryString);
const year = queryParams.get("year") || "";
const apiEndpoint = slug === "press-coverage" ? "press.php" : "media.php";
const [pagedata, setPagedata] = useState([]);
  useEffect(() => {
  let mounted = true;
  const loadData = async () => {
     const response = await axios.get(`https://www.ssgroup-india.com/admin_new/api/${apiEndpoint}?type=${slug}&y=${year}`);
     if(mounted) {
        console.log(response.data);
         setPagedata(response.data);
     }
  }

  loadData();

  return () => {
      mounted = false;
    };
}, []);

console.log(pagedata);
if (pagedata.length===0) {
  console.log('no data');
  return null;
}

// Dynamic code end
  return (
    <>
      <div className="galleryfilterstn col-12 float-start">
        <div className="filtertabtopmenu flex-center justify-content-start gap-1">
          {pagedata.mediayears && pagedata.mediayears.map((yearVal) => (
            <div className="menubtn" key={yearVal.year}>
              <a href={"/media/" + slug + "?year=" + yearVal.year}><span className={yearVal.class} onClick={() => handleYearButtonClick(yearVal.year)}>{yearVal.year}</span></a>
            </div>
          ))}
        </div>
        <div className="filterbottommenu col-12 float-start">
        <Tabs value={tabValue} onChange={handleTabChange} centered>
            {pagedata.mediamonths && pagedata.mediamonths.map((month, index) => (
              <Tab
                key={month.monthname}
                label={month.monthname}
                style={tabValue === index ? { color: '#f58634' } : {}}
                onClick={() => handleMonthTabClick(month.monthname)}
                className='col-12 float-start'
              />
            ))}
          </Tabs>
          {pagedata.media && pagedata.media.gallery.map((galleryData, index3) => (
          // <Mediagallery gallery_data={galleryData.galData}/>
          <TabPanel value={tabValue} index={index3} key={index3}>
              <Mediagallery typeVal={slug} gallery_data={galleryData.galData} />
            </TabPanel>
          ))}
          {/* <Event /> */}
        </div>
      </div>
    </>
  );
}

export default Mediatabs;

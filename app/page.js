"use client";
import React, { useEffect, useState, useRef } from "react";
import Slick from "@/component/Slider";
import ScrollDown from "@/component/ScrollDown";
import About from "@/component/About";
import News from "@/component/News";
import Numbers from "@/component/Numbers";
import Projectslider from "@/component/Projectslider";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Accordian from "@/component/Accordian";
import Loader from "@/component/Loader";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);
  // const categoryData = projectData.categories;
  // console.log(categoryData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.ssgroup-india.com/admin_new/api/fetch_cat.php"
        );
        setCategoryData(response.data.categories);
        // console.log(response.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!categoryData) {
    return <p>Error</p>;
  }
  const smoothRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (!loading) {
      const loaderElement = document.querySelector(".loader");
      if (loaderElement) {
        loaderElement.classList.add("hideloader");
      }
    }
  }, [loading]);
  const numberData = [
    { startValue: 5, endValue: 29, speed: 400, label: "YEARS", Plus: "+" },
    {
      startValue: 50,
      endValue: 173,
      speed: 400,
      label: "LAKH SQ.FT. DELIVERED",
    },
    {
      startValue: 7000,
      endValue: 75000,
      speed: 200,
      label: "CUSTOMERS",
      Plus: "+",
    },
  ];
  const homeFaqData = [
    { question: 'What type of properties does SS Group offer?', answer: 'SS Group offers a wide range of residential and commercial properties, including apartments, villas, shops, anchor stores and office spaces. Explore all our properties here at <a href="http://www.ssgroup-india.com" target="_blank">www.ssgroup-india.com</a>' },
    { question: 'Where are SS Group projects currently located?', answer: 'Our projects are strategically located in prime areas of New Gurugram, offering easy access, excellent connectivity and excellent growth. Find details about our residential or commercial project locations here at <a href="http://www.ssgroup-india.com" target="_blank">www.ssgroup-india.com</a>'},
    { question: 'What sets SS Group apart from other real estate developers?', answer: 'SS Group is renowned for its dedication to quality construction, innovative designs, and customer-centric approach. Learn more about us at <a href="http://www.ssgroup-india.com/ss-group" target="_blank">ssgroup-india.com about us page</a>.'},
    { question: 'What is SS Group commitment to sustainability in real estate development?', answer: 'We are dedicated to sustainable development practices, incorporating eco-friendly materials, energy-efficient designs, and green building techniques into our projects.'},
    { question: 'Does SS Group projects are approved by banks?', answer: 'Yes, we work with reputed financial institutions or banks to provide financial options for qualified homebuyers.'},
    { question: 'What is the expected completion timeline for your projects?', answer: 'Completion timelines vary by project. Please visit the individual project pages for specific information.'},
    { question: 'Where can I see a sample flat of SS Group new projects?', answer: 'To know more about SS Group new launches, call <a href="tel:7053109109">7053 109 109</a>'},
    { question: 'How can I contact SS Group? ', answer: 'For property-related queries, you can fill out the online form on the website or call us at <a href="tel:7053109109">7053 109 109</a>.'},
];
  return (
    <>
      <Loader />
      <Header />
      <main className="d-flex flex-wrap float-start col-12">
        <section id="slider">
          <div className="col-12 float-start homeslider position-relative">
            <Slick />
            <ScrollDown targetRef={smoothRef} />
          </div>
          <News />
        </section>
        <section id="about" ref={smoothRef}>
          <About />
        </section>
        <Numbers countersData={numberData} />
        <Projectslider categoryData={categoryData} />
        <Accordian faqData={homeFaqData} />
      </main>
      <Footer />
    </>
  );
}

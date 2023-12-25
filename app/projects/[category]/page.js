"use client";
import { useState, useEffect, useRef } from "react";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import ScrollDown from "@/component/ScrollDown";
import React from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Category from "@/component/Category";
import FilterProject from "@/component/FilterProject";
import Image from "next/image";

const page = () => {
  const [loading, setLoading] = useState(true); 
  const [categoryData, setCategoryData] = useState([]);
  const params = useParams();
  const slug = params.category;
  const url = window.location.href;
  const queryString = url.split("?")[1];
  const queryParams = new URLSearchParams(queryString);
  const location = queryParams.get("location") || "";
  const type = queryParams.get("type") || "";
  const statusval = queryParams.get("statusval") || "";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.ssgroup-india.com/admin_new/api/fetch_cat.php"
        );
        setCategoryData(response.data.categories[slug]);
        console.log(response.data.categories[slug]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filterProjects = (location, type, status) => {
    if (!categoryData) return [];

    const filterSubcategory = (subcategory) => {
      if (!subcategory) return [];

      const lowercasedLocation = location && location.toLowerCase();
      const lowercasedType = type && type.toLowerCase();
      const lowercasedStatus = status && status.toLowerCase();

      return subcategory.filter(
        (project) =>
          (!lowercasedLocation ||
            project.location.toLowerCase() === lowercasedLocation) &&
          (!lowercasedType ||
            project.pro_type.toLowerCase() === lowercasedType) &&
          (!lowercasedStatus ||
            project.pro_status.toLowerCase() === lowercasedStatus)
      );
    };

    const filteredProjects = [
      ...filterSubcategory(categoryData.LuxuryResidences),
      ...filterSubcategory(categoryData.DeliveredProjects),
      ...filterSubcategory(categoryData.PremiumResidences),
    ];

    return filteredProjects;
  };
  const filteredProjects =
    location || type || statusval
      ? filterProjects(location, type, statusval)
      : "";
  console.log(filteredProjects);
  const smoothRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [text, setText] = useState("");
  const fullText = (slug + " BY SS GROUP").toUpperCase();

  useEffect(() => {
    const zoomTimeout = setTimeout(() => {
      setIsZoomed(true);
    }, 0);

    const unzoomTimeout = setTimeout(() => {
      setIsZoomed(false);
    }, 3000);

    const textTimeout = setTimeout(() => {
      displayText();
    }, 1000);

    return () => {
      clearTimeout(zoomTimeout);
      clearTimeout(unzoomTimeout);
      clearTimeout(textTimeout);
    };
  }, []);

  const displayText = () => {
    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 100);
  };

  const sectionRef = useRef();

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };
  const handleFilterSubmit = (formData) => {
    console.log(formData);
  };

  const smoothRef2 = useRef(null);

  useEffect(() => {
    const url = window.location.href;
    const queryString = url.split("?")[1];
    const queryParams = new URLSearchParams(queryString);
    const location = queryParams.get("location") || "";

    if (location) {
      smoothRef2.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Header />
      <main className="d-flex flex-wrap float-start col-12">
        <section className="overflow-hidden ">
          <div className="bannerimage position-relative full-height">
            <div
              className={`projectbanner ${isZoomed ? "zoom-in" : "zoom-out"}`}
            >
              <Image
                src={categoryData.category_bimage || "/ss-banner.webp"}
                width={1920}
                height={980}
                alt={text}
                className="full-height"
                priority
              />
            </div>
            <div className="bannerimagecont position-absolute top-50 text-center col-12 float-start">
              <h2>{text}</h2>
            </div>
          </div>
          <ScrollDown targetRef={smoothRef} />
          <div className="projectfilter float-start col-12" ref={smoothRef}>
            <div className="col-12 float-start">
              <div className="container">
                <div className="row">
                  <div className="breadcumtab">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>{slug}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 float-start filterpadding" ref={smoothRef2}>
              <div className="container">
                <div className="row">
                  <div className="web-container">
                    <div className="col-12 float-start"
                      data-aos="fade-left"
                      data-aos-easing="ease-in"
                      data-aos-offset="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      <FilterProject
                        filterData={categoryData.filterval}
                        searchFloc={location ? location : ""}
                        searchFtype={type ? type : ""}
                        searchFstatus={statusval ? statusval : ""}
                        onSubmit={handleFilterSubmit}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Category categoryToShow={categoryData} filtersearchResult={filteredProjects ? filteredProjects : ""} slugValue={slug}/>
      </main>
      <Footer />
    </>
  );
};

export default page;

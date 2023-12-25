"use client";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import AdvanceBanner from "@/component/AdvanceBanner";
import GallerySlider from "@/component/GallerySlider";
import LocationMap from "@/component/LocationMap";
import Accordian from "@/component/Accordian";
import QuickLinks from "@/component/QuickLinks";
import ProjectOverview from "@/component/ProjectOverview";
import Image from "next/image";
import Link from "next/link";
import ProjectContent from '@/component/ProjectContent'

const page = () => {
  const [loading, setLoading] = useState(true);
  const [project, setprojectData] = useState([]);
  const params = useParams();
  const slug = params.project;
  console.log(slug);
  // const project = projectData.projects.find((project) => project.slug === slug);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.ssgroup-india.com/admin_new/api/fetch_product.php"
        );
        console.log(response);
        const project = response.data.projects.find((p) => p.slug === slug);
        console.log(project);
        setprojectData(project);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  if (!project) {
    return <p>No project found!</p>;
    return false;
  }
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
  return (
    <>
    <div className="loader">
      <div className={`manageloader position-relative overflow-hidden `}>
        <div className="loaderlogo">
        <div className='spinner'></div>
        </div>
      </div>
    </div>
      <Header className="blackheader" />
      <div className="col-12 float-start">
        <div className="container">
          <div className="row">
            <div className="breadcumtab">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href={"/projects/" + project.category}>
                    {project.category}
                  </a>
                </li>
                <li>{project.ProjectName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <main className="d-flex flex-wrap float-start col-12">
        <ProjectOverview project={project} />
        <section>
          <div className="projectwrap">
            <div className="container">
              <div className="row">
                <div className="col-12 float-start">
                  <div className="bannerwrap d-flex flex-wrap">
                    <AdvanceBanner bannerData={project.sections} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <GallerySlider galleryData={project.sliderContent} />
        <LocationMap locationData={project.locationData} />
        {(project.seotitle && project.seodesc) ? 
        <ProjectContent seoheading={project.seoheading} seoTitle={project.seotitle} seoDesc={project.seodesc}/>
        : null}
        <QuickLinks const_status={project.const_status} ebroucher={project.ebroucher} application={project.application} slug={slug} virtualtour={project.virtualtour}/>
        <Accordian faqData={project.faq} />
      </main>
      <Footer />
    </>
  );
};

export default page;

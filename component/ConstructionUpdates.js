"use client";
import React, { useState, useEffect, useRef } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Constructiongallery from "@/component/Constructiongallery";
import Event from "@/component/Event";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useParams } from "next/navigation";
import axios from "axios";
import FilterConstruction from "./FilterConstruction";

function ConstructionUpdates() {
  // Const Image Code Start
  const params = useParams();
  const slug = params.project;

  const url = window.location.href;
  const queryString = url.split("?")[1];
  const queryParams = new URLSearchParams(queryString);
  const year = queryParams.get("year") || "";
  const month = queryParams.get("month") || "";
  console.log(slug);
  const slug2 = year ? year : "";
  const slug3 = month ? month : "";
  const [pagedata, setPagedata] = useState([]);

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      const response = await axios.get(
        `https://www.ssgroup-india.com/admin_new/algorithms/modify_construction_json.php?url=${slug}&url2=${slug2}&url3=${slug3}`
      );
      if (mounted) {
        console.log(response);
        console.log(response.data);
        setPagedata(response.data);
        // setData(response.data.products.accordions);
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  console.log(pagedata);
  if (pagedata.length == 0) {
    console.log("no data");
    return null;
  }

  const handleFilterSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <>
      <div className="galleryfilterstn col-12 float-start">
        <div
          className="col-12 float-start"
          data-aos="fade-left"
          data-aos-easing="ease-in"
          data-aos-offset="50"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <FilterConstruction
            filterData={pagedata}
            searchFyear={
              year
                ? year
                : pagedata.projects[0].construction.category[0]["year"]
            }
            searchFmonth={
              month
                ? month
                : pagedata.projects[0].construction.months[0]["month"]
            }
            onSubmit={handleFilterSubmit}
          />
        </div>
      </div>
      <Constructiongallery gallery_data={pagedata} />
    </>
  );
}

export default ConstructionUpdates;

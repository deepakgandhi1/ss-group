"use client";
import React from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

const page = () => {
  return (
    <>
      <Header className="blackheader" />
      <section>
        <div className="container">
          <div className="row">
            <div className="web-container">
              <div className="webcontent col-12 float-start">
                <div className="col-12 float-start title text-center">
                  <h3 data-aos="zoom-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>DICALIMER</h3>
                </div>
                <div className="col-12 float-start" data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>
		<p>
	This is a general specification with no legal boundations for Builders, Promoters and Investers. Each project has it's own amenities and specifications.</p>
	<p>
	Further, in the interest of maintaining high standards, the Company/Architect reserves the right to modify the details/specifications/features shown and presented here. Further, marble and other things are subject to natural variations in texture and colour.</p>
	<p>
	SS Group reserves the right to make changes or updates to the Projects or Programs described in this Website at any time without notice.</p>
	<p>
	Price - Prices can be changed anytime without prior notice.</p>
	<p>
	Vacancy - The availability can be changed anytime without prior notice.</p>
              </div> 
            </div>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;

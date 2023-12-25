"use client";
import { useRef, useEffect } from "react";
import Banner from "@/component/Banner";
import Circleeffect from "@/component/Circleeffect";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Numbers from "@/component/Numbers";
import OurEthos from "@/component/OurEthos";
import Journey from "@/component/Journey";
import Overview from "@/component/Overview";
import React from "react";
import MDDesk from "@/component/MDDesk";
import VisionMission from "@/component/VisionMission";

const page = () => {
  const aboutUsImage = "/about-banner.webp";
  const overviewRef = useRef(null);
  const ethosRef = useRef(null);
  const journeyRef = useRef(null);

  const handleScrollTo = (ref) => {
    const offset = ref.current.offsetTop - ref.current.clientHeight * 0.2;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  function isElementInViewport(element) {
    if (!element) {
      return false;
    }

    var rect = element.getBoundingClientRect();
    var windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    return rect.top >= 0 && rect.bottom <= windowHeight;
  }

  function triggerTypingEffect() {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      var section = document.querySelector("section");
      var textElement = document.querySelector("#typing-effect");

      if (isElementInViewport(section)) {
        textElement.style.animation = "typing 5s steps(50, end) 1s forwards";
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", triggerTypingEffect);
    return () => {
      window.removeEventListener("scroll", triggerTypingEffect);
    };
  }, []);

  useEffect(() => {
    triggerTypingEffect();
  }, []);
  const numberData = [
    {
      startValue: 5,
      endValue: 29,
      speed: 400,
      label: "YEARS OF EXPERIENCE",
      Plus: "+",
    },
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
      label: "CUSTOMER BASE",
      Plus: "+",
    },
    {
      startValue: 10,
      endValue: 23,
      speed: 200,
      label: "PROJECTS DELIVERED",
      Plus: "+",
    },
    {
      startValue: 100,
      endValue: 146,
      speed: 200,
      label: "LAKH SQ.FT. IN PLANNING",
      Plus: "+",
    },
    {
      Heading: "HUGE",
      label: "LAND BANK IN DELHI NCR",
    },
  ];
  const managemobileview = "managemobileview";
  return (
    <>
      <Header />
      <main className="d-flex flex-wrap float-start col-12">
        <Banner imageSrc={aboutUsImage} pagename="SS GROUP" />
      <Overview />
        <Numbers countersData={numberData} className={managemobileview} />
        <section>
          <div className="quotes">
            <div className="container">
              <div className="web-container">
                <div className="row">
                  <div className="float-start col-12">
                    <p className="text-center position-relative desktop-show">
                      <em className="text-black d-grid" id="typing-effect">
                        SS Group has played an important role in the development
                        of
                        <br />
                        Gurugram with all its developments, like low-rise
                        townships, luxury group housing communities
                        <br /> or modern retail and work spaces, focused in this
                        thriving Millennium City.
                      </em>
                    </p>
                    <p className="mobile-show text-center position-relative">
                      <em>
                        SS Group has played an important role in the development
                        of Gurugram with all its developments, like low-rise
                        townships, luxury group housing communities or modern
                        retail and work spaces, focused in this thriving
                        Millennium City.
                      </em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section ref={ethosRef}>
          <OurEthos />
        </section>
        <VisionMission />
        <Circleeffect />
        <MDDesk />
        <section ref={journeyRef}>
          <Journey />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;

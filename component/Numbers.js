import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/app/About.module.css";
import Counter from "./Counter";

const Numbers = ({ countersData, className }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleParallax = () => {
      if (imageRef.current && typeof window !== "undefined") {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(-${scrollY * 0.2}px)`;
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleParallax);

      return () => {
        window.removeEventListener("scroll", handleParallax);
      };
    }
  }, []);

  return (
    <section>
      <div className={`aboutus col-12 float-start ${className}`}>
        <div className="container">
          <div className="row">
            <div
              className={`col-lg-11 m-auto col-12 p-0 ${styles.parallaxContainer}`}
            >
              <div className={`imagemanager ${styles.parallaxImage}`}>
                <div className={styles.parallaxImageInner} ref={imageRef}>
                  <Image
                    src="/number-banner.webp"
                    width="1600"
                    height="1040"
                    alt="SS Group"
                    priority
                  />
                </div>
              </div>
              <div className="numbercount position-absolute top-0 bottom-0 left-0 right-0 col-12 float-start d-flex align-items-center">
                <div
                  className={`numberrow position-absolute col-12 float-start d-flex gap-5 align-items-center flex-wrap justify-content-center`}
                >
                  {countersData &&
                    Array.isArray(countersData) &&
                    countersData.map((counter, index) => (
                      <div key={index} className="numbercolumn">
                        {counter.startValue !== undefined &&
                        counter.endValue !== undefined ? (
                          <div className="countercount">
                            <Counter
                              startValue={counter.startValue}
                              endValue={counter.endValue}
                              speed={counter.speed}
                              className="m-0 p-0"
                            />
                            <span>{counter.Plus}</span>
                            <span>{counter.Heading}</span>
                          </div>
                        ) : (
                          <div className="countercount">
                            <span>{counter.Plus}</span>
                            <span>{counter.Heading}</span>
                          </div>
                        )}
                        <div className="countercont">
                          <p>{counter.label}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;

import React from "react";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { Restore, ZoomIn, ZoomOut } from "@mui/icons-material";

export const LocationMap = ({ locationData }) => {
  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
      <>
        {locationData ? (
          <div className="locationmapcta position-absolute top-o end-o col-12 float-start d-flex justify-content-end p-2">
            <button onClick={() => zoomIn()}>
              <ZoomIn />
            </button>
            <button onClick={() => zoomOut()}>
              <ZoomOut />
            </button>
            <button onClick={() => resetTransform()}>
              <Restore />
            </button>
          </div>
        ) : null}
      </>
    );
  };

  return (
    <>
       {locationData &&
      locationData.map((locationD, index) => (
        locationD.locationImage.trim() !== '' && Object.keys(locationD.locationInfo).length > 0 ? (
          <section key={locationD.locationTitle}>
            <div className="locationmap sm-overflow">
              <div className="container">
                <div className="col-lg-10 m-auto col-12">
                  <div className="row">
                    <div className="col-12 flaot-start flex-center">
                      <div className="heading text-center border-0">
                        <h3
                          className="effectheading"
                          data-aos="fade-in"
                          data-aos-easing="ease-in"
                          data-aos-offset="150"
                          data-aos-duration="1000"
                          data-aos-once="true"
                        >
                          Location Map
                        </h3>
                      </div>
                    </div>
                    <div className="locationzoommap col-12 float-start">
                      <div className="row">
                        <div
                          className={
                            Object.keys(locationD.locationTitle).length > 0
                              ? "col-lg-9 col-12"
                              : "col-lg-9 col-12 m-auto"
                          }
                          data-aos="fade-left"
                          data-aos-easing="ease-in"
                          data-aos-offset="100"
                          data-aos-duration="500"
                          data-aos-once="true"
                        >
                          <div className="locationimage position-relative">
                            <TransformWrapper>
                              <Controls />
                              <TransformComponent>
                                <img
                                  src={locationD.locationImage}
                                  alt="Location Map"
                                  width="100%"
                                />
                              </TransformComponent>
                            </TransformWrapper>
                          </div>
                        </div>
                        {Object.keys(locationD.locationInfo).length > 0 && (
                          <div
                            className={
                              Object.keys(locationD.locationTitle).length > 0
                                ? "col-lg-3 col-12"
                                : "d-none"
                            }
                            data-aos="fade-right"
                            data-aos-easing="ease-in"
                            data-aos-offset="100"
                            data-aos-duration="500"
                            data-aos-once="true"
                          >
                            <div className="locationcont">
                              <div className="locationheading">
                                <h4>{locationD.locationTitle}</h4>
                              </div>
                              {Object.keys(locationD.locationInfo).map(
                                (category, categoryIndex) => (
                                  <div
                                    className="locationinfo"
                                    key={categoryIndex}
                                  >
                                    <ul>
                                      <li>
                                        <strong>{category}</strong>
                                        {locationD.locationInfo[category].map(
                                          (item, itemIndex) => (
                                            <span key={itemIndex}>{item}</span>
                                          )
                                        )}
                                      </li>
                                    </ul>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null
      ))}
    </>
  );
};

export default LocationMap;

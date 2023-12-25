"use client";
import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function Gallerybox({ gallery_data }) {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="Gallerybox mt-5 float-start col-12">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        className="col-12 float-start"
      >
        <>
          {gallery_data.projects.map((project, index) => (
            <>
              {project.construction.gallery.map((gallery, galIndex) => (
                <>
                  {gallery.galData.map((galData, dataIndex) => (
                    <a
                      key={dataIndex}
                      href={galData.limg}
                      data-aos="fade-up"
                      data-aos-easing="ease-in"
                      data-aos-offset="100"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      <div className="galleryimage">
                        <img src={galData.simg} alt={galData.title} />
                      </div>
                    </a>
                  ))}
                </>
              ))}
            </>
          ))}
        </>
      </LightGallery>
    </div>
  );
}

export default Gallerybox;

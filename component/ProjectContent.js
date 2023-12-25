import React from 'react'

const ProjectContent = ( {seoheading, seoTitle, seoDesc} ) => {
  return (
    <>
    <section>
    <div className="projectcont col-12 float-start">
    <div className="container">
        <div className="web-container">
            <div className="col-12 flaot-start flex-center">
                <div className="col-12 float-start text-center title"><h3 data-aos="zoom-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>{seoheading}</h3></div>
            </div>
            <div className="col-lg-10 col-12 m-auto">
                <div className="row">
                    <div className="col-12 flaot-start flex-center">
                        <div className="heading text-center border-0 mb-2">
                            <h3
                className='effectheading'
                data-aos="fade-in"
                data-aos-easing="ease-in"
                data-aos-offset="150"
                data-aos-duration="1000"
                data-aos-once='true'
              >{seoTitle}</h3>
                        </div>
                    </div>
                    <div className="text-center col-12 float-left" data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>
                        <div dangerouslySetInnerHTML={{ __html: seoDesc }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
    </>
  )
}

export default ProjectContent
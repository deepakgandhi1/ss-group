// ProjectOverview.js
import React, { useState, useEffect } from 'react';

const ProjectOverview = ({ project }) => {
  const [showH1, setShowH1] = useState(false);
  const [showH2, setShowH2] = useState(false);
  const [showP, setShowP] = useState(false);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setShowH1(true);
    }, 100);

    const fadeTimeout = setTimeout(() => {
      setShowH2(true);
    }, 1000);

    const fadePTimer = setTimeout(() => {
      setShowP(true);
    }, 1500);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(fadeTimeout);
      clearTimeout(fadePTimer);
    };
  }, []);

  return (
    <section>
      <div className='overview col-12 float-start'>
        <div className='container'>
          <div className="col-lg-8 col-12 m-auto text-center">
            <div className="heading">
              {showH1 && <h1 className="runtext lh-1 text-uppercase">{project.ProjectName}</h1>}
              {showH2 && <h2>{project.Location}</h2>}
            </div>
            <div className="col-12 float-start">
              <p className={showP ? "m-0 fade-up show text-center" : "m-0 fade-up"}>
                {project.Overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;

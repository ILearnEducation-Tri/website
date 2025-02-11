import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';
import { SubNavbar } from '../../components/Navbar/SubNavbar';
import './MGE.css';

const CourseSection = ({ title, items }) => (
  <div className="mb-4 uiux-course-content">
    <h2 className="text-white mb-3">{title}</h2>
    <ul className="list-unstyled">
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          <i className="bi bi-dot text-primary me-2"></i>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

function MGE() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    const courseSections = {
        courseOutline: [
            "Design Principles",
            "Creative Visualization",
            "Typography Colour Theory",
            "Animation Principles",
            "Parallax Animation",
            "Puppet warp animation",
            "Vfx for broadcast"
        ]
    };
    const careerPath = [
        "Motion graphic designer",
        "Motion graphic artist",
        "VFX compositor",
        "Motion graphic & video"
    ];
    
    const software = [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Premier",
        "Cinema 4D",
        "Adobe After Effect",
        "Blender"
    ];

  return (
    <div>
        <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.1/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />
      <SubNavbar/>
      {/* Header Section */}
      <section className="mge-landing-section d-flex align-items-center justify-content-center text-center py-5">
        <div className="container transparent m-4">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="mge-landing-form-side p-4">
                <h1>MOTION GRAPHICS EXPERT</h1>
                <h4 className="mt-3">DURATION : 4 MONTHS</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Description */}
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mt-5">
            <div className="bg-white p-4 bg-transparent">
              {/* <h2 className="text-center text-dark">Course Description</h2> */}
              <p className="text-muted">
                Motion Graphics/Motion Designs are piction which create the illusion of motion, 
                it's a beautiful and exciting worina and other visual elements seamslsy blend to 
                create amazing enchanting visuals
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-10 d-lg-flex justify-content-center mge-image d-none d-lg-flex">
            <img src="/assets/images/mge-aboute.png" alt="Computer" class="img-fluid" />
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="container pt-5">
        <div className="row">
          {/* Left Column */}
          <div class="col-lg-4 pt-5">
              <img src="/assets/images/mge-out.png" alt="Computer" class="img-fluid" />
          </div>
          {/* Right Column */}
          <div className="col-lg-8">
            <div className="bg-white p-4 rounded shadow-sm mb-4">
              <CourseSection title="INTRODUCTION" items={courseSections.courseOutline} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row justify-content-center">
            <div className="col-lg-12 mx-auto mb-4">
                <div className="bg-white p-4 rounded shadow-sm">
                    <h2 className="text-center mb-4">Software Tools</h2>
                    <div className="d-flex flex-wrap gap-5 justify-content-center">
                        {software.map((tool, index) => (
                            <span key={index} className="badge bg-primary px-3 py-2">
                                <i className="bi bi-tools me-2"></i>
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-lg-12 mx-auto">
              <div className="bg-white p-4 rounded shadow-sm">
                  <h2 className="text-center mb-4">CAREER PATH</h2>
                  <ul className="list-unstyled text-center d-flex justify-content-center flex-wrap gap-3">
                      {careerPath.map((path, index) => (
                          <li key={index} className="mb-2">
                              <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                              {path}
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
        </div>
      </div>

      <Footer />
      <Whatsapp />
    </div>
  )
}

export default MGE
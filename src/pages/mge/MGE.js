import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';

const CourseSection = ({ title, items }) => (
    <div className="mb-4">
      <h2 className="text-dark mb-3">{title}</h2>
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
        {/* Header Section */}
        <div className="bg-primary text-white py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <h1 className="display-5 fw-bold mb-0">MOTION GRAPHICS EXPERT</h1>
                        <div className="bg-dark d-inline-block px-3 py-1 mt-2">
                            <h2 className="h5 mb-0 text-white">DURATION: 4 MONTHS</h2>
                        </div>
                    </div>
                    {/* <div className="col-md-4">
                    <img
                        src="/assets/images/ui_ux.jpg"
                        alt="UI/UX Design Illustration"
                        className="img-fluid rounded"
                    />
                    </div> */}
                </div>
            </div>
        </div>
        {/* Course Description */}
        <div className="container mt-4">
            <div className="bg-white p-4 rounded shadow-sm">
                {/* <h2 className="text-center text-dark">Course Description</h2> */}
                <p className="text-muted">
                    Motion Graphics/Motion Designs are piction which create the illusion of motion, 
                    it's a beautiful and exciting worina and other visual elements seamslsy blend to 
                    create amazing enchanting visuals
                </p>
            </div>
        </div>
        {/* Main Content */}
      <div className="container py-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
            <div className="bg-white p-4 rounded shadow-sm mb-4">
              <CourseSection title="INTRODUCTION" items={courseSections.courseOutline} />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-4">
            <div className="bg-white p-4 rounded shadow-sm mb-4">
              <h2 className="text-center mb-4">CAREER PATH</h2>
              <ul className="list-unstyled">
                {careerPath.map((path, index) => (
                  <li key={index} className="mb-2">
                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                    {path}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="mb-4">Software Tools</h2>
              <div className="d-flex flex-wrap gap-2">
                {software.map((tool, index) => (
                  <span key={index} className="badge bg-primary px-3 py-2">
                    <i className="bi bi-tools me-2"></i>
                    {tool}
                  </span>
                ))}
              </div>
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
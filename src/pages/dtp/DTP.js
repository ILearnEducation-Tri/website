import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';
import { SubNavbar } from '../../components/Navbar/SubNavbar';
import './DTP.css';
import SoftwareList from '../../components/SoftwareList/Software';

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

const DTP = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const courseSections = {
    courseOutline: [
      "Concepts of Desktop Publishing",
      "Introduction to Publishing software",
      "Concepts of page layouting",
      "Newspaper & Magazine layouting",
      "Newspaper & Magazine ads",
      "Book layouts",
      "Column setting",
      "Story, Text flow, text wrap & page numbering",
      "Plugins for page layouting",
      "Image editing",
      "Vector graphics & Raster graphic",
      "Making color designs for offset printing",
      "Designing of cards, brochures, book covers, flyers",
      "Making ready to print files"
    ]
  };

  const careerPath = [
    "Desktop Publisher",
    "Digital Painter",
    "Pre-Press Specialist",
    "Photo Studio Professional"
  ];

  const software = [
    "Adobe Photoshop",
    "Coreldraw",
    "Adobe PageMaker",
    "Malayalam Typing"
  ];

  return (
    <div className="bg-light min-vh-100">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.1/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />
      <SubNavbar/>
      <section className="dtp-landing-section d-flex align-items-center justify-content-center text-center py-5">
        <div className="container transparent m-4">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="dtp-landing-form-side p-4">
                <h1>DESKTOP PUBLISHING</h1>
                <h4 className="mt-3">DURATION : 3 MONTHS</h4>
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
                Print media has transformed significantly with the introduction of media software. 
                Raster and vector graphics, along with layout software, play a crucial role in the 
                printing and publishing industry. This course enables learners to create various 
                print media elements, including advertisements, books, newspaper layouts, magazine 
                layouts, and more.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-10 d-lg-flex justify-content-center dtp-image d-none d-lg-flex">
            <img src="/assets/images/dtp-aboute.png" alt="Computer" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container pt-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-4 pt-5">
              <img src="/assets/images/dtp-out.png" alt="Computer" className="img-fluid" />
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
            {/* Right Column */}
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
            {/* Left Column */}
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
      <SoftwareList/>
      <Footer />
      <Whatsapp />
    </div>
  );
};

export default DTP;

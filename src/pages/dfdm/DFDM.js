import React, { useEffect } from 'react'
import Whatsapp from '../../components/Footer/Whatsapp'
import Footer from '../../components/Footer/Footer'
import { SubNavbar } from '../../components/Navbar/SubNavbar';
import './DFDM.css';
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

function DFDM() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const courseSections = {
      module1: [
        "Script interpretation",
        "Developing visual style and tone",
        "Scene blocking and camera angles",
        "Actor performance guidance",
        "Collaboration with cinematography and editing departments",
        "Managing production schedules and budgets",
        "Creative decision-making",
      ],
      module2: [
        "Screenwriting",
        "Directing actors",
        "Camera work",
        "Lighting",
        "Production and post-production",
        "Film industry terminology",
        "Safety protocols",
        "Film analysis and appreciation",
      ]
    };
  
  const software = [
    "Final Draft",
    "Adobe Premiere Pro",
    "Final Cut Pro",
    "Adobe After Effects",
    "Nuke",
    "DaVinci Resolve",
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
      <section className="dfdm-landing-section d-flex align-items-center justify-content-center text-center py-5">
          <div className="container transparent m-4">
              <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="dfdm-landing-form-side p-1">
                          <h1>Diploma in Film Direction & Making</h1>
                          <h4 className="mt-3">DURATION : 6 MONTHS</h4>
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
                    Film direction involves guiding the entire production process of visual media, such as films and television shows. 
                    Our 6-month Diploma in Film Direction & Making course is designed to equip you with the essential skills and knowledge 
                    required to excel in this field.
                  </p>
                </div>
            </div>
            <div class="col-lg-6 col-md-10 d-lg-flex justify-content-center dfdm-image d-none d-lg-flex">
                <img src="/assets/images/dfdm-aboute.png" alt="Computer" class="img-fluid" />
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
              <div className="row">
                  <div className="col-lg-6 col-sm-12">
                      <div className="bg-white p-4 rounded shadow-sm mb-4">
                          <CourseSection title="MODULE 1" items={courseSections.module1} />
                      </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                      <div className="bg-white px-4 pt-4 rounded shadow-sm">
                          <CourseSection title="MODULE 2" items={courseSections.module2} />
                      </div>
                  </div>
              </div>
          </div>

          <div className="container mb-5">
            <div className="row justify-content-center">
                <div className="col-lg-12 mx-auto mb-4">
                    <div className="bg-white p-4 rounded shadow-sm row">
                      <h2 className="text-center mb-4">Software Tools</h2>
                      <div className="d-flex flex-wrap gap-5 justify-content-center mb-4">
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
          <SoftwareList/>
      <Footer/>
      <Whatsapp/>
    </div>
  )
}

export default DFDM
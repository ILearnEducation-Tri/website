import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Whatsapp from '../../components/Footer/Whatsapp'
import { SubNavbar } from '../../components/Navbar/SubNavbar';
import './CV.css'

const CourseSection = ({ moduleTitle, sectionTitle, items }) => (
  <div className="mb-4 uiux-course-content">
    <h2 className="text-white mb-3">{moduleTitle}</h2>
    <h3 className="text-primary mb-2">{sectionTitle}</h3>
    <ul className="list-unstyled">
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          <i className="bi bi-dot text-primary me-2"></i> {item}
        </li>
      ))}
    </ul>
  </div>
);

function CV() {
  useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const courseSections = {
      module1: {
        moduleTitle: "Module 1",
        sectionTitle: "Cinematography",
        items: [
          "Sets the scene",
          "Emphasizes emotions, details",
          "Establishes context",
          "Creates conversation dynamic",
          "Immerses the viewer",
          "Shifts focus between subjects",
          "Controls focus, blur",
        ],
      },
      module2: {
        moduleTitle: "Module 2 :",
        sectionTitle: "Photography",
        items: [
          "Composition",
          "Lighting (natural, artificial)",
          "Exposure (aperture, shutter speed, ISO)",
          "Focus (depth of field, bokeh)",
          "Perspective",
          "Framing",
          "Leading lines",
          "Texture",
          "Post-processing (editing)",
        ],
      },
      module3: {
        moduleTitle: "Module 3 :",
        sectionTitle: "Videography",
        items: [
          "Camera movement",
          "Lighting",
          "Composition",
          "Sound design",
          "Editing",
          "Visual effects",
          "Color grading",
          "Time-lapse photography",
        ],
      }
    };

  const careerPath = [
    "Professional Photographer / Videography",
    "Photojournalist",
    "Commercial Photographer / Videography",
    "Fine Art Photographer",
    "Wedding Photographer / Videography",
    "Portrait Photographer",
    "Landscape Photographer",
    "Photo Editor",
    "Photography Teacher",
    "Stock Photographer",
    "Sound Designer",
    "Camera Operator",
  ]

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
      <section className="cv-landing-section d-flex align-items-center justify-content-center text-center py-5">
          <div className="container transparent m-4">
              <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="cv-landing-form-side p-1">
                          <h1>Cinematography & Videography</h1>
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
                  <p className="text-muted">
                    Cinematography is the art and science of capturing images for film, television, or other visual media.
                    Photography is the art, science, and practice of capturing images using light-sensitive materials or devices.
                  </p>
                </div>
            </div>
            <div class="col-lg-6 col-md-10 d-lg-flex justify-content-center cv-image d-none d-lg-flex">
                <img src="/assets/images/cv-aboute.png" alt="Computer" class="img-fluid" />
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
          <div className="row">
              <div className="col-lg-6 col-sm-12">
                  <div className="bg-white p-4 rounded shadow-sm mb-4">
                    <CourseSection {...courseSections.module1} />
                    <CourseSection {...courseSections.module2} />
                  </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                  <div className="bg-white px-4 pt-4 rounded shadow-sm">
                    <CourseSection {...courseSections.module3} />
                  </div>
              </div>
          </div>
      </div>

      <div className="container mb-5">
        <div className="row justify-content-center">
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

      <Footer/>
      <Whatsapp/>
    </div>
  )
}

export default CV
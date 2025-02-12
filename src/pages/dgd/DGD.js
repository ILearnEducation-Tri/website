import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Whatsapp from '../../components/Footer/Whatsapp'
import { SubNavbar } from '../../components/Navbar/SubNavbar';
import './DGD.css'
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

function DGD() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    const courseSections = {
      introduction: [
        "Concepts of digital imaging",
        "Color theory",
        "Optimization theory",
        "Designing concepts & digital design",
        "Making of screen & printing designs",
        "Color separation",
        "Raster & vector graphics",
        "Different types of printing units",
        "Magazine ads & layouts",
        "Newspaper ads & layouts",
        "Designing of brochures & flyers",
        "Offset works",
        "Digital media print file",
        "Digital photo manipulation",
        "Scanning & capturing of images",
        "Photo restoration",
        "Product modeling",
        "Higher-end designing in ads",
      ]  
    };

    const careerPath = [
      "Adobe Photoshop",
      "CorelDraw",
      "Adobe Illustrator",
      "Adobe PageMaker",
      "Adobe InDesign",
      "Malayalam Typing",
  ];
  
  const software = [
    "Adobe Photoshop",
    "CorelDraw",
    "Adobe Illustrator",
    "Adobe PageMaker",
    "Adobe InDesign",
    "Malayalam Typing",
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
        <section className="dgd-landing-section d-flex align-items-center justify-content-center text-center py-5">
          <div className="container transparent m-4">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="dgd-landing-form-side p-4">
                  <h1>DIPLOMA IN GRAPHIC DESIGN</h1>
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
                  Through digital photo editing, graphical design principles, and pre-press work, this course empowers users to create 
                  a variety of brochures, cards, logos, and other graphical outputs like illustrations. This involves digital photo 
                  manipulation and quality effects in print and advertisement works.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 d-lg-flex justify-content-center dgd-image d-none d-lg-flex">
              <img src="/assets/images/dgd-aboute.png" alt="Computer" className="img-fluid" />
            </div>
          </div>
        </div>
  
  
        {/* Main Content */}
        <div className="container pt-5">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-4 pt-5">
                <img src="/assets/images/dgd-out.png" alt="Computer" className="img-fluid" />
            </div>
            {/* Right Column */}
            <div className="col-lg-8">
              <div className="bg-white p-4 rounded shadow-sm mb-4">
                <CourseSection title="INTRODUCTION" items={courseSections.introduction} />
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
        <SoftwareList/>
        <Footer />
        <Whatsapp />
      </div>
    )
}
export default DGD
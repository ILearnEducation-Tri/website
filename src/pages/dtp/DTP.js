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

      {/* Header Section */}
      <div className="bg-primary text-white py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="display-5 fw-bold mb-0">DESKTOP PUBLISHING</h1>
              <div className="bg-dark d-inline-block px-3 py-1 mt-2">
                <h2 className="h5 mb-0 text-white">DURATION: 3 MONTHS</h2>
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
            Print media has transformed significantly with the introduction of media software. 
            Raster and vector graphics, along with layout software, play a crucial role in the 
            printing and publishing industry. This course enables learners to create various 
            print media elements, including advertisements, books, newspaper layouts, magazine 
            layouts, and more.
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
  );
};

export default DTP;

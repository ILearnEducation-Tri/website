import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';
import './AID.css';

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

function AID() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    const courseSections = {
      module1: [
        "Python",
        "Data science",
        "Data visualization",
        "Machine learning",
        "Deep learning",
        "Natural language processing"
      ],
      module2: [
        "Research and development of AI/ML algorithms",
        "Data preprocessing and modeling",
        "Building and training AI models",
        "Integrating AI with other technologies (e.g., computer vision, NLP)",
        "Testing and debugging AI systems",
        "Deploying AI models to production environments",
        "Maintaining and updating AI systems",
        "Collaborating with cross-functional teams (e.g., data science, engineering)"
      ]
    };

    const careerPath = [
      "Machine learning engineer",
      "Search scientist",
      "Business intelligent developers",
      "Computer vision engineer",
      "Data scientist",
      "Natural language processing"
  ];
  
  const software = [
    "Python",
    "Jupyter Notebook",
    "Google Colab",
    "Power BI"
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
          <section className="aid-landing-section d-flex align-items-center justify-content-center text-center py-5">
              <div className="container transparent m-4">
                  <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6 col-sm-10">
                          <div className="aid-landing-form-side p-1">
                              <h1>AI Developer</h1>
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
                            An AI developer is a professional responsible for designing, developing, and deploying artificial intelligence (AI) 
                            and machine learning (ML) systems. Their primary goal is to create intelligent systems that can perform tasks that 
                            typically require human intelligence.
                          </p>
                      </div>
                  </div>
                  <div class="col-lg-6 col-md-10 d-lg-flex justify-content-center aid-image d-none d-lg-flex">
                      <img src="/assets/images/aid-abote.png" alt="Computer" class="img-fluid" />
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

export default AID
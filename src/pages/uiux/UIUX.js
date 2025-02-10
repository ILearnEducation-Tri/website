import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';
import './UIUX.css'

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

const UIUX = () => {
  useEffect(() => {
        window.scroll(0, 0);
    }, []);
  const courseSections = {
    introduction: [
      "Course Overview",
      "What is User Experience",
      "Dynamic Nature of UX",
      "Differences between UI and UX",
      "Different fields related to UX in industry and Tools"
    ],
    uxOnboarding: [
      "UX origin",
      "Benefits of UX",
      "Good UX vs Bad UX",
      "Research Methods",
      "Process Models",
      "Product Analysis",
      "Competitor Analysis"
    ],
    devicesAndOS: [
      "Types of devices",
      "Mobile/Watch/Desktop/Tab/TV",
      "Understanding Operating system",
      "Windows Vs MacOS",
      "Android Vs IOS"
    ],
    visualDesign: [
      "Design fundamentals",
      "Design principles",
      "Basic design",
      "Typography",
      "Iconography"
    ],
    designerResponsibilities: [
      "Empathize",
      "Ideate",
      "Prototype",
      "Test"
    ],
    userCenteredFocusInDesign: [
      "UCD Process",
      "Personas",
      "Scenarios",
      "Story board",
      "Customer Journey",
      "Use Cases"
    ],
    uxResearchMethodology: [
      "Types of Research Methods",
      "Expert Review",
      "User Interview",
      "Surveys and Email Surveys"
    ],
    usabilityTestingInUXDesign: [
      "What is Usability Testing in UX Design",
      "Usability Testing carried out by UX designer",
      "A/B Testing",
      "Case Study on Google Maps"
    ],
    prototyping: [
      "Sketching basic UI elements",
      "Paper sketching wireframes",
      "Paper sketching screens",
      "Sketching onboarding screens",
      "Sketching user scenario screens",
      "Paper prototyping"
    ],
    projectAndPortfolioDevelopment: [
      "Creating designer resume",
      "Projects"
    ],
    placementTraining: [
      "Interview tips",
      "UX/UI Design latest trends",
      "Mockup Interview"
    ]    
  };  

  const careerPath = [
    "UX Designer",
    "UI Designer",
    "Visual Designer",
    "UX Researcher",
    "User Researcher",
    "Information Architect",
    "Wireframe Expert",
    "Interaction Designer",
    "Usability Analyst",
    "Design Manager"
  ];

  const software = [
    "Adobe Photoshop",
    "Adobe Xd",
    "Adobe Animate",
    "Figma",
    "Notion",
    "Miro"
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
      <div className="uiux-landing-section text-white py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="display-5 fw-bold mb-0">DIPLOMA IN UI/UX DESIGNING</h1>
              <div className="bg-dark d-inline-block px-3 py-1 mt-2">
                <h2 className="h5 mb-0 text-white">DURATION : 6 MONTHS</h2>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="/assets/images/ui_ux.jpg"
                alt="UI/UX Design Illustration"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
          <div className="bg-white p-4 rounded shadow-sm mb-4">
              <CourseSection title="INTRODUCTION" items={courseSections.introduction} />
              <CourseSection title="UX ONBOARDING" items={courseSections.uxOnboarding} />
              <CourseSection title="DEVICES & OS" items={courseSections.devicesAndOS} />
              <CourseSection title="VISUAL DESIGN" items={courseSections.visualDesign} />
              <CourseSection title="DESIGNER RESPONSIBILITIES" items={courseSections.designerResponsibilities} />
              <CourseSection title="USER-CENTERED FOCUS IN DESIGN" items={courseSections.userCenteredFocusInDesign} />
              <CourseSection title="UX RESEARCH METHODOLOGY" items={courseSections.uxResearchMethodology} />
              <CourseSection title="USABILITY TESTING IN UX DESIGN" items={courseSections.usabilityTestingInUXDesign} />
              <CourseSection title="PROTOTYPING" items={courseSections.prototyping} />
              <CourseSection title="PROJECT AND PORTFOLIO DEVELOPMENT" items={courseSections.projectAndPortfolioDevelopment} />
              <CourseSection title="PLACEMENT TRAINING" items={courseSections.placementTraining} />
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
      <Footer/>
      <Whatsapp/>
    </div>
  );
};

export default UIUX;
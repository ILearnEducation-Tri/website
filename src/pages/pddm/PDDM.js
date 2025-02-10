import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';
import './PDDM.css';

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

function PDDM() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const courseSections = {
        module1: [
            "Introduction to Digital Marketing",
            "Facebook Marketing",
            "Youtube Marketing",
            "Instagram Marketing",
            "LinkedIn Marketing",
            "Google + Marketing",
            "Snapchat Marketing"
        ],
        module2: [
            "Mobile Marketing",
            "Content Marketing",
            "Email Marketing",
            "Video Marketing"
        ],
        module3: [
            "Introduction to Search Engine Optimization",
            "Keyword Research",
            "On-Page Optimization",
            "Technical SEO",
            "Wordpress SEO",
            "Off-Page Optimization",
            "SEO Auditing"
        ],
        module4: [
            "Google Analytics",
            "Google My Business",
            "Google Adwords(PPC)",
            "Google Adsense",
            "Affiliate Marketing",
            "Conversion Rate Optimization (CRO)",
            "SMS Marketing",
            "Whatsapp Marketing",
            "Blogging, Vlogging",
            "Google Data Studio",
            "App Search Optimization (ASO)"
        ],
        liveProject: [
            "Website Development",
            "Run Paid Google Ad Campaigns",
            "Strategy & Planning",
            "Case Study Analysis",
            "Work on Live SEO Projects",
            "Organic Social Markrting",
            "Paid Social Ad Campaining",
            "Project Centric Learning"
        ]
    };
    const careerPath = [
        "Digital Marketing Analyst",
        "Digital Marketing Specialist/Expert",
        "Digital Marketing Team Lead",
        "Social Media Manager/Executive",
        "Media Planner",
        "SEO Analyst",
        "SEO Programmer",
        "Media Buyer",
        "Online Advertising Sales Expert",
        "Channel Manager",
        "UI Designer",
        "Online Market Research Analyst",
        "SMS Specialist Expert"
    ];
    
    const software = [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Wordpress"
    ];

    const optionalSoftware = [
        "Adobe After Effects",
        "Adobe Premier Pro"
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
      {/* Header Section */}
      <section className="pddm-landing-section d-flex align-items-center justify-content-center text-center py-5">
        <div className="container m-4">
          <div className="row justify-content-end">
              <div className="col-lg-3 col-md-6 col-sm-10">
                  <div className="pddm-landing-form-side p-1">
                      <h1>PROFESSIONAL DIPLOMA IN DIGITAL MARKETING</h1>
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
                  The objective of the course is to help students to understand all digital marketing methods. It covers all parts 
                  of digital marketing especially in PPC and Advanced Search Engine Optimization (SEO) techniques, which help to 
                  transform them into an industry-ready professional. It provides participants with a rich set of digital skills to 
                  plan and implement an engaging successful digital strategy that delivers and supports business objectives.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-10 d-lg-flex justify-content-center pddm-image d-none d-lg-flex">
            <img src="/assets/images/pddm-aboute.png" alt="Computer" class="img-fluid" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="bg-white px-4 pt-4 rounded shadow-sm">
              <CourseSection title="MODULE 1" items={courseSections.module1} />
              <CourseSection title="MODULE 2" items={courseSections.module2} />
              <CourseSection title="MODULE 3" items={courseSections.module3} />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="bg-white p-4 rounded shadow-sm mb-4">
              <CourseSection title="MODULE 4" items={courseSections.module4} />
              <CourseSection title="LIVE PROJECTS & CASE STUDIES" items={courseSections.liveProject} />
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
                  <h2 className="text-center mb-4">Optional Software Tools</h2>
                  <div className="d-flex flex-wrap gap-5 justify-content-center">
                      {optionalSoftware.map((tool, index) => (
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

export default PDDM
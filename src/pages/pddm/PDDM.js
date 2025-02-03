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
        <div className="bg-primary text-white py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <h1 className="display-5 fw-bold mb-0">PROFESSIONAL DIPLOMA IN DIGITAL MARKETING</h1>
                        <div className="bg-dark d-inline-block px-3 py-1 mt-2">
                            <h2 className="h5 mb-0 text-white">DURATION : 6 MONTHS</h2>
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
                    The objective of the course is to help students to understand all digital marketing methods. It covers all parts 
                    of digital marketing especially in PPC and Advanced Search Engine Optimization (SEO) techniques, which help to 
                    transform them into an industry-ready professional. It provides participants with a rich set of digital skills to 
                    plan and implement an engaging successful digital strategy that delivers and supports business objectives.
                </p>
            </div>
        </div>
        {/* Main Content */}
      <div className="container py-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
            <div className="bg-white p-4 rounded shadow-sm mb-4">
              <CourseSection title="MODULE 1" items={courseSections.module1} />
              <CourseSection title="MODULE 2" items={courseSections.module2} />
              <CourseSection title="MODULE 3" items={courseSections.module3} />
              <CourseSection title="MODULE 4" items={courseSections.module4} />
              <CourseSection title="LIVE PROJECTS & CASE STUDIES" items={courseSections.liveProject} />
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
              <h2 className="my-4">Optional Software Tools</h2>
              <div className="d-flex flex-wrap gap-2">
                {optionalSoftware.map((tool, index) => (
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
  )
}

export default PDDM
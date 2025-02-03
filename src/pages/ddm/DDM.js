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

function DDM() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    const courseSections = {
        module1: [
            "Introduction To Digital Marketing",
            "Facebook Marketing",
            "Youtube Marketing",
            "Instagram Marketing",
            "LinkedIn Marketing",
            "Google Marketing",
            "Snapchat Marketing"
        ],
        module2: [
            "Mobile Marketing",
            "Content Marketing",
            "Email Marketing",
            "Video Marketing"
        ],
        module3: [
            "Introduction To Search Engine",
            "Optimization (SEO)",
            "Keyword Research",
            "Onpage Optimization",
            "Technical SEO",
            "Wordpress SEO",
            "Off Page Optimization",
            "SEO Auditing"
        ],
        module4: [
            "Google Analytics",
            "Google My Business",
            "Google Adwords (PPC)",
            "Google Adsense",
            "Affiliate Marketing",
            "Conversion Rate Optimization (CRO)",
            "SMS Marketing",
            "Whatsapp Marketing",
            "Blogging",
            "Vlogging"
        ]
    };
    
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
                        <h1 className="display-5 fw-bold mb-0">DIPLOMA IN DIGITAL MARKETING</h1>
                        <div className="bg-dark d-inline-block px-3 py-1 mt-2">
                            <h2 className="h5 mb-0 text-white">DURATION : 4 MONTHS</h2>
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
                    The objective of this course will be on developing digital marketing concepts along wim practical application. 
                    This course has provided all all Social media marketing and SEO Training with HTML. We expect the students to 
                    start their career in the area of digital marketing arketing Methods of this course will be confident
                </p>
            </div>
        </div>
        {/* Main Content */}
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="bg-white p-4 rounded shadow-sm mb-4">
                        <CourseSection title="MODULE 1" items={courseSections.module1} />
                        <CourseSection title="MODULE 3" items={courseSections.module3} />
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="bg-white p-4 rounded shadow-sm mb-4">
                        <CourseSection title="MODULE 2" items={courseSections.module2} />
                        <CourseSection title="MODULE 4" items={courseSections.module4} />
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        <Whatsapp/>
    </div>
    )
}

export default DDM

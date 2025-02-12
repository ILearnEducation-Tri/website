import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';
import { SubNavbar } from '../../components/Navbar/SubNavbar';
import './DDM.css';
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
        <SubNavbar/>
        {/* Header Section */}
        <section className="ddm-landing-section d-flex align-items-center justify-content-center text-center py-5">
            <div className="container transparent m-4">
                <div className="row justify-content-start">
                    <div className="col-lg-3 col-md-6 col-sm-10">
                        <div className="ddm-landing-form-side p-1">
                            <h1>DIPLOMA IN DIGITAL MARKETING</h1>
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
                            The objective of this course will be on developing digital marketing concepts along wim practical application. 
                            This course has provided all all Social media marketing and SEO Training with HTML. We expect the students to 
                            start their career in the area of digital marketing arketing Methods of this course will be confident
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-10 d-lg-flex justify-content-center ddm-image d-none d-lg-flex">
                    <img src="/assets/images/ddm-aboute.png" alt="Computer" className="img-fluid" />
                </div>
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
        <SoftwareList/>
        <Footer/>
        <Whatsapp/>
    </div>
    )
}

export default DDM

import React from 'react';
import './Course.css';
import { Link } from 'react-router-dom';

const courses = [
    { shortForm: 'MDDA', title: 'Master Diploma in Digital Animation' },
    { shortForm: 'MDMA', title: 'Master Diploma in Multimedia and Animation' },
    { shortForm: 'DMA', title: 'Diploma in Multimedia and Animation' },
    { shortForm: 'MDGD', title: 'Master Diploma in Game Design' },
    { shortForm: 'VFX', title: 'Video Editing & VFX' },
    { shortForm: 'DVE', title: 'Diploma in Video Editing' },
    { shortForm: 'DGD', title: 'Diploma in Graphic Design' },
    { shortForm: 'DA', title: 'Diploma in Animation' },
    { shortForm: 'ADWD', title: 'Advance Diploma in Web Designing' },
    { shortForm: 'GWE', title: 'Graphic and Web Expert' },
    { shortForm: 'UI/UX', title: 'Diploma in UI/UX Designing' },
    { shortForm: 'DTP', title: 'Desktop Publishing' },
    { shortForm: 'MGE', title: 'Motion Graphics Expert' },
    { shortForm: 'PDDM', title: 'Professional Diploma in Digital Marketing' },
    { shortForm: 'DDM', title: 'Diploma in Digital Marketing' },
    { shortForm: 'CDM', title: 'Certificate in Digital Marketing' },
    { shortForm: 'AID', title: 'AI Developer' },
    { shortForm: 'DFDM', title: 'Diploma in Film Direction & Making' },
    { shortForm: 'CV', title: 'Cinematography & Videography' },
  ];
  

function Courses() {
  return (
    <section class="service-section" id="services">
        <div class="container">
            <h2>Course We Provide</h2>
            <div class="nav-tabs"/>
            <div class="tab-content mt-4" id="serviceTabContent">
                <div class="tab-pane fade show active" id="iso" role="tabpanel" aria-labelledby="iso-tab">
                    <div class="row">
                        {courses.map((card,index)=>(
                            <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0" key={index}>
                                <div class="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark feature-box">
                                    <div class="icon-bg water-wave">
                                        <div class="background-animation"></div>
                                        <img src="./logo192.png" alt="Icon" class="icon" style={{backgroundSize : "cover", width: "90%"}}/>
                                    </div>
                                    <h4 class="mb-4 oneway">{card.shortForm}</h4>
                                    <p>{card.title}</p>
                                    <Link class="course_btn" to={card.shortForm.toLowerCase()}>Read More</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Courses
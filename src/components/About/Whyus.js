import React from 'react';
import './Whyus.css'

const cardContent = [
    {
      title: 'ISO Certification',
      content: 'Gain ISO standard certification, boosting your career.',
      description: 'Our ISO 9001:2015 certification courses are tailored to enhance your professional standards and open up new, globally recognized opportunities. Elevate your career with industry-approved credentials.'
    },
    {
      title: 'Year-long Support',
      content: 'Receive comprehensive support for a year post-course.',
      description: 'We ensure our support extends even after your course is completed. For a whole year, we provide the guidance and assistance you need, guaranteeing a smooth path towards your professional success.'
    },
    {
      title: 'Profile Building',
      content: 'Get expert help in creating an impressive CV.',
      description: 'Our services include helping you craft a standout professional profile and creating an impressive CV. We aim to make you more noticeable to top employers, enhancing your job prospects.'
    },
    {
      title: 'Placement Assistance',
      content: 'Ensure a secure job with our placement program.',
      description: 'Our 100% placement assistance program connects you with leading organizations. We strive to ensure you find a job that matches your skills and aspirations, securing a bright future for you.'
    }
  ];
  
  
  

function Whyus() {
  return (
    <div>
    <section className="why-choose-us">
        <div className="container">
            <h2>Why Choose Us?</h2>
            <div className="row ">
                {cardContent.map((card, index)=>(
                    <div key={index} className="col-lg-3 col-md-6 mb-4">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <div className="icon-bg water-wave">
                                        <div className="background-animation"></div>
                                        <i className="fa fa-star icon"></i>
                                    </div>
                                    <h4 className="mb-4">{card.title}</h4>
                                    <p className="whyus_content">{card.content}</p>
                                </div>
                                <div className="flip-card-back">
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}                
            </div>
        </div>
    </section>
    <section className="why-choose-us">
        <div className="cartoon_container">
            <img className="cartoon" src="/assets/images/cartoon.png" alt="Cartoon"/>
            <img className="Cartoon_text" src="/assets/images/cartoon_text.png" alt="cartoon text"/>
        </div>
    </section>
    </div>

  )
}

export default Whyus
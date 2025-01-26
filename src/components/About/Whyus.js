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
    <section class="why-choose-us">
        <div class="container">
            <h2>Why Choose Us?</h2>
            <div class="row ">
                {cardContent.map((card, index)=>(
                    <div key={index} class="col-lg-3 col-md-6 mb-4">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                <div class="icon-bg water-wave">
                                        <div class="background-animation"></div>
                                        <i class="fa fa-star icon"></i>
                                    </div>
                                    <h4 class="mb-4">{card.title}</h4>
                                    <p class="whyus_content">{card.content}</p>
                                </div>
                                <div class="flip-card-back">
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}                
            </div>
        </div>
    </section>
    <section class="why-choose-us">
        <div class="cartoon_container">
            <img class="cartoon" src="/assets/images/cartoon.png" alt="Cartoon"/>
            <img class="Cartoon_text" src="/assets/images/cartoon_text.png" alt="cartoon text"/>
        </div>
    </section>
    </div>

  )
}

export default Whyus
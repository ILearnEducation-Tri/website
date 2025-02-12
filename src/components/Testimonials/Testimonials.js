import React from 'react'

function Testimonials() {
  return (
    <section className="testimonials-section">
        <div className="container">
            <div className="testimonials-header">
                <h2>What People Say About <span>I Learn Education</span>!</h2>
            </div>
            <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="0" className="active"
                        aria-current="true"></button>
                    <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="testimonial-box">
                            <i className="fas fa-quote-left"></i>
                            <p>"Fantastic services for ISO 9001:2015, ISO 14001:2015, and CE Mark Certificate. Highly
                                recommend Making ISO Certification for their expertise!"</p>
                            <div className="testimonial-client">
                                <div className="client-image">
                                    <img src="img/icon_1.png" alt="Client"/>
                                </div>
                                <div className="client-info">
                                    <h5>Nabeel Kidwai</h5>
                                    <small>Senior Director</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="testimonial-box">
                            <i className="fas fa-quote-left"></i>
                            <p>"Making ISO Certification provided professional and timely support for ISO 27001:2013.
                                Exceptional service!"</p>
                            <div className="testimonial-client">
                                <div className="client-image">
                                    <img src="img/icon-3.png" alt="Client"/>
                                </div>
                                <div className="client-info">
                                    <h5>Isha Malik</h5>
                                    <small>Project Manager</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="testimonial-box">
                            <i className="fas fa-quote-left"></i>
                            <p>"ISO 22000:2018 certification was made easy thanks to the knowledgeable team at Making
                                ISO Certification!"</p>
                            <div className="testimonial-client">
                                <div className="client-image">
                                    <img src="img/icon-4.webp" alt="Client"/>
                                </div>
                                <div className="client-info">
                                    <h5>Diya Enterprise</h5>
                                    <small>Business Owner</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
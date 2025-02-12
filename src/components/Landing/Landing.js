import React from 'react'
import './Landing.css'

function Landing() {
  return (
    <section className="landing-section">
        <div className="container">
            <div className="row  align-items-center">
                <div className="col-lg-7 col-md-6 text-center text-lg-start content-side">
                    <h1>Learn To Create Your Own World</h1>
                    <p className="mt-4">
                        <b>Welcome to I Learn Education Your Gateway to Expertise and Career Growth.</b><br/>
                        we provide ISO 9001:2015 certified courses, ensuring top-quality education.
                        Our experienced trainers are dedicated to training students, offering placement assistance,
                        and fostering skill development.
                    </p>
                    <a href="#services"><button className="bts mt-4">Explore Courses</button></a>
                </div>
                <div className=" col-lg-4 col-md-6">
                    <div className="form-side">
                        <h2>
                            Join us at 
                            <span style={{ color: "#007bff" }}>I Learn Education</span>.
                            We are committed to turning your aspirations into reality.
                            <br/><span className='enquiry-form'>How Can We Help You ?</span>
                        </h2>
                        <form action="https://formsubmit.co/ilearncomputereducation@gmail.com" method="POST">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required autoComplete="name"/>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" required autoComplete="email"/>
                            <input type="tel" className="form-control" id="phone" name="phone" placeholder="Your Contact No" required autoComplete="tel"/>
                            <input type="text" className="form-control" id="Education" name="Education" placeholder="Your Education" required autoComplete="education"/>
                            <textarea className="form-control" id="message" name="msg" rows="4" placeholder="Your Message" autoComplete="off"></textarea>
                            <button type="submit" name="submit" className="btn btn-custom w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Landing
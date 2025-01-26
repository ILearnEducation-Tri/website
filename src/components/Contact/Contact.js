import React from 'react'

function Contact() {
  return (
    <section class="contact-section" id="contact">
        <div class="container">
            <div class="contact-header">
                <h2>Get in Touch with <span style={{color:"#007bff"}}>I Learn Education</span></h2>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="contact-card">
                            <i class="fas fa-phone"></i>
                            <h5>Phone</h5>
                            <a href="tel: +91 9072737314">
                                <p>+91 9072737314</p>
                            </a>
                            <a href="tel: 04832821136">
                                <p>04832821136</p>
                            </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <a href="mailto: ilearncomputereducation@gmail.com">
                        <div class="contact-card">
                            <i class="fas fa-envelope"></i>
                            <h5>Email</h5>
                            <p>ilearncomputereducation@gmail.com</p>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <a href="https://maps.app.goo.gl/5AvT9jvgD9rc3BVN7">
                        <div class="contact-card">
                            <i class="fas fa-map-marker-alt"></i>
                            <h5>Address</h5>
                            <p>I Learn Education - Trippanachi, Manjeri, Malappuram, Kerala 673641</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
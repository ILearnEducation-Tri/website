import React from 'react';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Contact Header */}
        <div className="contact-header text-center mb-4">
          <h2>
            Get in Touch with{' '}
            <span style={{ color: '#007bff' }}>I Learn Education</span>
          </h2>
        </div>

        {/* Contact Information */}
        <div className="row g-4">
          {/* Phone Card */}
          <div className="col-lg-4 col-md-6">
            <div className="contact-card text-center p-3">
              <i className="fas fa-phone fa-2x mb-3"></i>
              <h5>Phone</h5>
              <p>
                <a href="tel:+919072737314" className="d-block">
                  +91 9072737314
                </a>
                <a href="tel:04832821136" className="d-block">
                  04832821136
                </a>
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="col-lg-4 col-md-6">
            <a
              href="mailto:ilearncomputereducation@gmail.com"
              className="contact-card-link"
            >
              <div className="contact-card text-center p-3">
                <i className="fas fa-envelope fa-2x mb-3"></i>
                <h5>Email</h5>
                <p>ilearncomputereducation@gmail.com</p>
              </div>
            </a>
          </div>

          {/* Address Card */}
          <div className="col-lg-4 col-md-6">
            <a
              href="https://maps.app.goo.gl/5AvT9jvgD9rc3BVN7"
              target="_blank"
              rel="noreferrer"
              className="contact-card-link"
            >
              <div className="contact-card text-center p-3">
                <i className="fas fa-map-marker-alt fa-2x mb-3"></i>
                <h5>Address</h5>
                <p>
                  I Learn Education - Trippanachi, Manjeri, Malappuram, Kerala
                  673641
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

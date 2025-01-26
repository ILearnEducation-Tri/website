import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Footer Content */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">I Learn Education</h5>
            <p>
              Providing ISO certification courses in digital-marketing, Editing,
              filmography, and more through online and offline platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="offset-1 col-lg-2 col-md-6 mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">
                  <i className="fas fa-angle-right me-2"></i>Home
                </Link>
              </li>
              <li>
                <a href="#about">
                  <i className="fas fa-angle-right me-2"></i>About Us
                </a>
              </li>
              <li>
                <a href="#services">
                  <i className="fas fa-angle-right me-2"></i>Courses
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="fas fa-angle-right me-2"></i>Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Our Process</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#contact">
                  <i className="fas fa-check-circle me-2"></i>Temporary Period
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="fas fa-check-circle me-2"></i>Course Period
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="fas fa-check-circle me-2"></i>Year-long Support
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="fas fa-check-circle me-2"></i>Placement Assistance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Contact Info</h5>
            <ul className="list-unstyled">
              <li>
                <a href="tel:+919072737314">
                  <i className="fas fa-phone me-2"></i>+91 9072737314
                </a>
              </li>
              <li>
                <a href="mailto:ilearncomputereducation@gmail.com">
                  <i className="fas fa-envelope me-2"></i>
                  ilearncomputereducation@gmail.com
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/5AvT9jvgD9rc3BVN7" target="_blank" rel="noreferrer">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  I Learn Education - Trippanachi, Manjeri, Malappuram, Kerala 673641
                </a>
              </li>
            </ul>
            <div className="social-icons mt-3">
              <span className="follow-us">Follow Us:</span>
              <a
                href="https://www.instagram.com/ilearn__education"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/share/1EXJrTsebu/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://wa.me/9072737314" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 border-top pt-3">
        <p className="mb-0">&copy; 2024 I Learn Education. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

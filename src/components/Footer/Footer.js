import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer class="footer">
        <div class="container">
            <div class="row">
                {/* <!-- Footer Content --> */}
                <div class="col-lg-3 col-md-6 mb-4">
                    <h5 class="footer-heading">I Learn Education</h5>
                    <p>Providing ISO certification courses in digital-marketing, Editing, filimography and etc.. through online and offline platfrom.</p>
                </div>

                {/* <!-- Quick Links --> */}
                <div class="offset-1 col-lg-2 col-md-6 mb-4">
                    <h5 class="footer-heading">Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><Link to="/"><i class="fas fa-angle-right me-2"></i>Home</Link></li>
                        <li><a href="#about"><i class="fas fa-angle-right me-2"></i>About Us</a></li>
                        <li><a href="#services"><i class="fas fa-angle-right me-2"></i>Courses</a></li>
                        <li><a href="#contact"><i class="fas fa-angle-right me-2"></i>Contact</a></li>
                    </ul>
                </div>

                {/* <!-- Our Services --> */}
                <div class=" col-lg-3 col-md-6 mb-4">
                    <h5 class="footer-heading">Our Process</h5>
                    <ul class="list-unstyled">
                        <li><a href="#contact"><i class="fas fa-check-circle me-2"></i>Temporary Period</a></li>
                        <li><a href="#contact"><i class="fas fa-check-circle me-2"></i>Course Period</a>
                        </li>
                        <li><a href="#contact"><i class="fas fa-check-circle me-2"></i>Year-long Support</a>
                        </li>
                        <li><a href="#contact"><i class="fas fa-check-circle me-2"></i>Placement Assistance</a></li>
                    </ul>
                </div>

                {/* <!-- Contact Info --> */}
                <div class="col-lg-3 col-md-6 mb-4">
                    <h5 class="footer-heading">Contact Info</h5>
                    <ul class="list-unstyled">
                        <a href="tel: +91 9072737314">
                            <li><i class="fas fa-phone me-2"></i>+91 9072737314</li>
                        </a>
                        <a href="mailto: ilearncomputereducation@gmail.com ">
                            <li><i class="fas fa-envelope me-2"></i>ilearncomputereducation@gmail.com</li>
                        </a>
                        <div class="address">
                            <i class="fas fa-map-marker-alt me-2"></i>
                            <a href="https://maps.app.goo.gl/5AvT9jvgD9rc3BVN7">
                                <li>I Learn Education - Trippanachi, Manjeri, Malappuram, Kerala 673641</li>
                            </a>
                        </div>


                    </ul>
                    <div class="social-icons mt-3">
                        <a class="follow-us">Follow Us:</a>
                        <a href="https://www.instagram.com/ilearn__education" target='_blank'><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/share/1EXJrTsebu/" target='_blank'><i class="fab fa-facebook-f"></i></a>
                        <a href="https://wa.me/9072737314" target='_blank'><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-4 border-top pt-3">
            <p class="mb-0">&copy; 2024 I Learn Education. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
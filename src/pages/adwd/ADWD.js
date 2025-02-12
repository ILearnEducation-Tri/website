import React, { useEffect } from 'react'
import './ADWD.css'
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';
import { SubNavbar } from '../../components/Navbar/SubNavbar';
import SoftwareList from '../../components/SoftwareList/Software';

function ADWD() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
  return (
    <div>
        <SubNavbar/>
        <section className="adwd-landing-section d-flex align-items-center justify-content-center text-center py-5">
        <div className="container transparent m-4">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="adwd-landing-form-side p-4">
                <h1>ADVANCE DIPLOMA IN WEB DESIGNING</h1>
                <h4 className="mt-3">DURATION : 6 MONTHS</h4>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section class="dma-section" id="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12 mdma-content text-center text-lg-start">
                        <p class="mt-4">
                            This is a course with trio modules of web designing, multimedia authoring, and hardcore web programming. 
                        </p>
                        <p>                            
                            This course provides the ability to gain the skills and project-based experience needed for entry into web 
                            technology and development careers
                        </p>
                    </div>
                    <div class="col-lg-6 col-md-10 d-flex justify-content-center adwd-image">
                        <img src="/assets/images/web_designing.jpg" alt="Computer" class="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
        <section className="mdma-course-section">
            <div class="container">
                <div class="row">
                    <h1>Course Outline</h1>
                    <div class="nav-tabs"/>
                    <div class="col-lg-6 mdda-course-content">
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h2>Module 1 :</h2>
                        <h3>WEB PAGE DESIGNING</h3>
                        <ul>
                            <li>Concept of digital imaging</li>
                            <li>Types of Image Graphics</li>
                            <li>Raster & Vector graphics</li>
                            <li>Understanding Resolution and Pixels</li>
                            <li>Understanding Color Modes</li>
                            <li>Digital Photo Manipulation</li>
                            <li>Different Types of File Format</li>
                            <li>Photoshop Tools with Realtime Examples</li>
                            <li>Scanning Capturing of images</li>
                            <li>Web Page Designing</li>
                            <li>Web Banner Designing</li>
                            <li>Adapting Web Page Layout for Tablets, Mobile Phones & Desktop</li>
                        </ul>
                        <div class="mdma-course-software">
                            <strong>Software:</strong> Adobe Photoshop
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h2>Module 3 :</h2>
                        <h3>WEB DEVELOPMENT & PROGRAMING</h3>
                        <ul>
                            <li>HTML coding CSS & Bootstrap</li>
                            <li>Action script Fundamentals</li>
                            <li>Web programming</li>
                            <li>Streaming video & audio</li>
                            <li>Web hosting & maintenance</li>
                        </ul>
                        <div class="mdma-course-software">
                            <strong>Software:</strong> Adobe Dreamweaver, WordPress, Visual Studio, Sublime Text, HTML 5, CSS 3 Responsive Web Design, Bootstrap, JavaScript
                        </div>                     
                    </div>

                    <div class="col-lg-6 mdma-course-content">
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h2>Module 2 :</h2>
                        <h3>WEB ANIMATION</h3>
                        <ul>
                            <li>Creating animation</li>
                            <li>Working with scenes Using symbols, instances, and library assets</li>
                            <li>Inserting Media Elements</li>
                            <li>Working with text</li>
                            <li>Working with sound</li>
                            <li>Working with video</li>
                            <li>Web banner advertisement</li>
                            <li>Creating and publishing Animate Video</li>
                            <li>Concept of Action Script</li>
                            <li>Publishing Animate content</li>
                            <li>Exporting from Animate</li>
                        </ul>
                        <div class="mdma-course-software">
                            <strong>Software:</strong> Adobe Animate
                        </div>
                        <div class="mdma-course-career">
                            <h2 className='text-center'>CAREER PATH</h2>
                            <ul className='text-left'>
                                <li>Web Designer</li>
                                <li>UI Designer</li>
                                <li>Web Developer</li>
                                <li>Web Programmer</li>
                                <li>Layout Designer</li>
                                <li>Front end Developer</li>
                                <li>Web Animator</li>
                                <li>Multimedia Authoring artist</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SoftwareList/>
        <Footer/>
        <Whatsapp/>
    </div>
  )
}

export default ADWD
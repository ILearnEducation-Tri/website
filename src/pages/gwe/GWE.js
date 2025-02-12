import React, { useEffect } from 'react'
import './GWE.css'
import Footer from '../../components/Footer/Footer'
import Whatsapp from '../../components/Footer/Whatsapp'
import { SubNavbar } from '../../components/Navbar/SubNavbar';
import SoftwareList from '../../components/SoftwareList/Software';

function GWE() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
  return (
    <div>
        <SubNavbar/>
        <section className="gwe-landing-section d-flex align-items-center justify-content-center text-center py-5">
        <div className="container transparent m-4">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="gwe-landing-form-side p-4">
                <h1>GRAPHIC AND WEB EXPERT</h1>
                <h4 className="mt-3">DURATION : 10 MONTHS</h4>
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
                            The future looks bright for students who opt for a career in Graphic and Web Industry. 
                        </p>
                        <p>                            
                            In today’s technology driven world, the scope and growth in Print Media and Web Industry is ever increasing. 
                            The job opportunities are increasing in this field. The Graphic and Web expert course from ILEARN COMPUTER 
                            EDUCATION gives an upper edge for the students to become highly professional in their approach.
                        </p>
                    </div>
                    <div class="col-lg-6 col-md-10 d-flex justify-content-center adwd-image">
                        <img src="/assets/images/gwe-aboute.png" alt="Computer" class="img-fluid" />
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
                        <h3>GRAPHICS</h3>
                        <ul>
                            <li>Concepts of digital imaging</li>
                            <li>Color theory</li>
                            <li>Optimization theory</li>
                            <li>Designing concepts & Digital design</li>
                            <li>Making of Onscreen & Printing designs</li>
                            <li>Color separation</li>
                            <li>Raster & Vector graphics</li>
                            <li>Different types of printing</li>
                            <li>Magazine ads & Lay outs</li>
                            <li>Newspaper ads & Lay outs</li>
                            <li>Designing of ads, brochures & flyers</li>
                            <li>Office works</li>
                            <li>Getting ready to print</li>
                            <li>Designing & photo manipulation</li>
                            <li>Scanning & capturing of images</li>
                            <li>Photo Restoration</li>
                            <li>Product modeling</li>
                            <li>Indoor and designing in ads</li>
                        </ul>
                        <div class="mdma-course-software">
                            <strong>Software:</strong>  Adobe Photoshop, Adobe Illustrator, CorelDraw
                                                        Adobe PageMaker, Adobe InDesign, MsDTP, typing
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h2>Module 3 :</h2>
                        <h3>WEB DEVELOPMENT & PROGRAMMING</h3>
                        <ul>
                            <li>HTML coding</li>
                            <li>Action script Fundamentals</li>
                            <li>Web programming</li>
                            <li>Web hosting & maintenance</li>
                            <li>CSS & Bootstrap</li>
                        </ul>
                        <div class="mdma-course-software">
                            <strong>Software:</strong>  Adobe Dreamweaver, WordPress,
                                                        Visual Studio, Sublime Text,
                                                        HTML 5, CSS 3, Responsive Web Design,
                                                        Bootstrap, Java script
                        </div>             
                    </div>

                    <div class="col-lg-6 mdma-course-content">
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h2>Module 2 :</h2>
                        <h3>WEB ANIMATION (CMS)</h3>
                        <ul>
                            <li>Creating animation</li>
                            <li>Working with scenes using symbols, instances, and library assets</li>
                            <li>Working with Motion tweens</li>
                            <li>Working with shape tweens</li>
                            <li>Working with text</li>
                            <li>Working with sound</li>
                            <li>Working with video</li>
                            <li>Creating an interactive website</li>
                            <li>Web based content and animation</li>
                            <li>Creating an interactive Flash Video</li>
                            <li>Components of Action Script</li>
                            <li>Publishing for online content</li>
                            <li>Exporting animation</li>
                        </ul>
                        <div class="mdma-course-software">
                            <strong>Software:</strong> Adobe Animate
                        </div>    
                        <div class="mdma-course-career">
                            <h2 className='text-center'>CAREER PATH</h2>
                            <ul className='text-left'>
                                <li>Graphic Designer</li>
                                <li>Designer</li>
                                <li>Digital Painter</li>
                                <li>Matte Painter</li>
                                <li>Photo Studio Professionals</li>
                                <li>Pre-press specialist</li>
                                <li>Desktop Publisher</li>
                                <li>Web Designer</li>
                                <li>Web Animator</li>
                                <li>Front end Developer</li>
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

export default GWE
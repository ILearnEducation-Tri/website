import React, { useEffect } from 'react'
import './MDDA.css'
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';

function MDDA() {
    useEffect(() => {
            window.scroll(0, 0);
        }, []);
  return (
    <div>
        <section className="mdda-landing-section-one d-flex align-items-center justify-content-center text-center py-5">
            <div className="container transparent m-4">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="mdda-landing-form-side p-4">
                            <h1>MASTER DIPLOMA IN DIGITAL ANIMATION</h1>
                            <h4 className="mt-3">DURATION : 14 MONTHS</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mdda-section" id="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 mdda-content">
                        <p class="mt-4">
                            This course aims to mentor you in all areas of Design, Animation, Vfx and Editing.
                            It empowers you with multiple skill sets, thus giving you an edge over your peers.
                        </p>
                        <p>
                            You have access to case studies and research material provided by us.
                            You will also be interacting with our Subject Matter Experts, who have worked on projects that have
                            been acclaimed both nationally and internationally.
                        </p>
                        <p>
                            The program also covers the development framework of Multimedia and Animation.
                        </p>
                        <ul class="mt-3 d-none">
                            <li>5 years of Experience In ISO Certification</li>
                            <li>Affordable Certification Packages</li>
                            <li>Expert Guidance</li>
                            <li>Timely Process Completion</li>
                            <li>100% Customer Satisfaction</li>
                            <li>No Hidden Costs</li>
                        </ul>
                    </div>
                    <div class="col-lg-6 mdda-image">
                        <img src="/assets/images/mdda_about.png" alt="cartoon"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="mdda-landing-section">
            <div className="container">
                <div className="row  align-items-center justify-content-end">
                    <div className="col-lg-4 col-md-6">
                        <div className="mdda-landing-form-side">
                            <h1>
                                LEARN MULTIMEDIA & VFX
                            </h1>
                            <h4>
                                FROM INDUSTRIAL EXPERTS
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="mdda-course-section">
            <div class="container">
                <div class="row">
                    <h1>Course Outline</h1>
                    <div class="nav-tabs"/>
                    <div class="col-lg-6 mdda-course-content">
                        {/* ---------------------------------------------------------------------------------------------- */}         
                        <h2>Module 1 :</h2>
                        <h3>Graphic Design</h3>
                        <ul>
                            <li>Concept of Digital Imaging & Color Theory</li>
                            <li>Optimization Theory & Color Separation</li>
                            <li>Designing Concepts & Printing Designs</li>
                            <li>Raster & Vector Graphics</li>
                            <li>Different Types of Printing</li>
                            <li>Magazine Ads & Layouts</li>
                            <li>Newspaper Ads & Layouts</li>
                            <li>Designing of Cards, Brochures & Flyers</li>
                            <li>Offset Works & Setting Ready to Print File</li>
                            <li>Digital Photo Manipulation</li>
                            <li>Scanning & Capturing of Images</li>
                            <li>Photo Restoration & Product Modeling</li>
                            <li>Higher-End Designing in Ads</li>
                            <li>Digital Painting & Matte Painting</li>
                        </ul>
                        <div class="mdda-course-software">
                            <strong>Software:</strong> Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe Lightroom
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h2>Module 2:</h2>
                        <h3>2D Ultimate</h3>
                        <ul>
                            <li>Concept of 2D Animation</li>
                            <li>Key in and out Animation</li>
                            <li>Character Animation</li>
                            <li>2D Animation with Software</li>
                            <li>Animation for Kids</li>
                            <li>Presentations CDs & Portfolios</li>
                            <li>2D Animation Movie Creation</li>
                            <li>Story Board</li>
                        </ul>
                        <div class="mdda-course-software">
                            <strong>Software:</strong> Adobe Character Animator, Adobe Animate
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h3>3D Ultimate</h3>
                        <ul>
                            <li>3D Modeling (Organic & Inorganic)</li>
                            <li>Texturing</li>
                            <li>Lighting Camera</li>
                            <li>Animation</li>
                            <li>Scene Planning</li>
                            <li>Special Effects & Dynamics</li>
                            <li>Rendering</li>
                        </ul>
                        <div class="mdda-course-software">
                            <strong>Software:</strong> Autodesk Maya, Blender
                        </div>
                    </div>

                    <div class="col-lg-6 mdda-course-content">
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h3>VFX Ultimate</h3>
                        <ul>
                            <li>Pre-Visualization</li>
                            <li>Introduction to Nuke</li>
                            <li>Rotoscopy Using Silhouette</li>
                            <li>Wire Removal</li>
                            <li>Colour Correction</li>
                            <li>Green/Blue Screen</li>
                            <li>Match Moving & Camera Tracking</li>
                            <li>Matte Painting, Crowd Simulation</li>
                            <li>Working with Arnold Renderer</li>
                            <li>Working with External Plugins</li>
                            <li>Video Editing</li>
                        </ul>
                        <div class="mdda-course-software">
                            <strong>Software:</strong> Adobe After Effects, Cinema 4D, Nuke, Blackmagic Feature
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h2>Module 3:</h2>
                        <h3>Digital Compositing & Editing (Post-Production)</h3>
                        <ul>
                            <li>Concept of Editing & Post-Production</li>
                            <li>Video Settings & Formats</li>
                            <li>Elements of Editing</li>
                            <li>Non-Linear Editing</li>
                            <li>Editing, Dubbing, Mixing</li>
                            <li>Rendering</li>
                            <li>Titling with Edit Suite</li>
                        </ul>
                        <div class="mdda-course-software">
                            <strong>Software:</strong> Adobe Premiere Pro, Adobe Audition
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <div class="mdda-course-career">
                            <h2>CAREER PATH</h2>
                            <ul>
                                <li>VFX Artist</li>
                                <li>2D Animator</li>
                                <li>3D Modeler & Animator</li>
                                <li>Graphic Designer</li>
                                <li>3D Game Designer</li>
                                <li>Motion Graphic Designer</li>
                                <li>Web 3D Graphics</li>
                                <li>Interactive Product Demo Artist</li>
                                <li>Interactive Architectural Designer</li>
                                <li>Game Tester</li>
                                <li>3D Game Modeller</li>
                                <li>Video Editor</li>
                                <li>Creative Art Director</li>
                                <li>Digital Painter</li>
                                <li>Texting & Lighting Artist</li>
                                <li>Rigging Artist</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <Whatsapp/>
    </div>
  )
}

export default MDDA
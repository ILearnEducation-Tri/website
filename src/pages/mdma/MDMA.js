import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';
import { SubNavbar } from '../../components/Navbar/SubNavbar';
import './MDMA.css';
import SoftwareList from '../../components/SoftwareList/Software';

function MDMA() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
  return (
    <div>
        <SubNavbar/>
        <section className="mdma-landing-section-one d-flex align-items-center justify-content-center text-center py-5">
            <div className="container transparent m-4">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="mdma-landing-form-side p-4">
                            <h1>MASTER DIPLOMA IN MULTIMEDIA AND ANIMATION</h1>
                            <h4 className="mt-3">DURATION : 10 MONTHS</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-5" id="about">
        <div className="container">
            <div className="row gy-4 align-items-center">
                <div className="col-lg-6 order-lg-1 order-2">
                    <div className="pe-lg-4">
                    <p className="mt-4">
                            The Master Animation program provides a balance of creative and technical skills necessary for success
                            in multimedia production.
                            Students will gain a strong foundation in both traditional and computer-based forms of animation. 
                        </p>
                        <p>
                            Students will engage in a complementary set of courses designed to teach the necessary skills and to 
                            provide a venue for further development of skill sets within a creative production environment. 
                        </p>
                        <p>This program will give a conceptual understanding of different forms of multimedia and animation.</p>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-1">
                    <div className="text-center px-4 mdma-image">
                        <img src="/assets/images/mdma-cartoon.png" alt="cartoon" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section className="mdma-course-section">
            <div className="container">
                <div className="row">
                    <h1>Course Outline</h1>
                    <div className="nav-tabs"/>
                    <div className="col-lg-6 mdma-course-content">
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
                        </ul>
                        <div className="mdma-course-software">
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
                        </ul>
                        <div className="mdma-course-software">
                            <strong>Software:</strong> Adobe Character Animator, Adobe Animate
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h2>Module 3:</h2>
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
                        <div className="mdma-course-software">
                            <strong>Software:</strong> Autodesk Maya, Blender, Arnold Simulation
                        </div>
                    </div>

                    <div className="col-lg-6 mdma-course-content">
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
                        </ul>
                        <div className="mdma-course-software">
                            <strong>Software:</strong> Arnold Simulation, Adobe After Effects, Cinema 4D, Nuke
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h2>Module 4:</h2>
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
                        <div className="mdma-course-software">
                            <strong>Software:</strong> Adobe Premiere Pro, Adobe Audition
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <div className="mdma-course-career">
                            <h2>CAREER PATH</h2>
                            <ul>
                                <li>VFX Artist & Editor - 2D Animator</li>
                                <li>3D Modeler & Animator</li>
                                <li>Graphic Designer</li>
                                <li>3D Game Designer</li>
                                <li>Web 3D Graphics</li>
                                <li>Interactive Product Demo Artist</li>
                                <li>Interactive Architectural Designer</li>
                                <li>Game Tester</li>
                                <li>3D Game Modeller</li>
                                <li>Digital Painting Artist</li>
                                <li>Video Editor</li>
                                <li>Texturing & Lighting Artist</li>
                                <li>Pre-Production & Post Production</li>
                                <li>Web Designer</li>
                                <li>Web Animator</li>
                                <li>Multimedia Authoring Artist</li>
                                <li>Motion Graphic Designer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SoftwareList/>
        <Footer />
        <Whatsapp />
    </div>
  )
}

export default MDMA
import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';
import { SubNavbar } from '../../components/Navbar/SubNavbar';
import './DMA.css'
import SoftwareList from '../../components/SoftwareList/Software';

function DMA() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
  return (
    <div>
        <SubNavbar/>
        <section className="dma-landing-section-one d-flex align-items-center justify-content-center text-center py-5">
            <div className="container transparent m-4">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="dma-landing-form-side p-4">
                            <h1>DIPLOMA IN MULTIMEDIA AND ANIMATION</h1>
                            <h4 className="mt-3">DURATION : 8 MONTHS</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="dma-section" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 mdma-content text-center text-lg-start">
                        <p className="mt-4">
                            This program works as a quick ride to the world of Print & animation industry.                            
                        </p>
                        <p>
                            It helps to work on graphics & animation technologies and software, one can dare to create images & animations 
                            for print and visual media.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 mdma-image text-center">
                        <img src="/assets/images/dma-about.png" className="img-fluid" alt="cartoon"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="mdma-course-section">
            <div className="container">
                <div className="row">
                    <h1>Course Outline</h1>
                    <div className="nav-tabs"/>
                    <div className="col-lg-6 mdda-course-content">
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h2>Module 1 :</h2>
                        <h3>Graphic Design</h3>
                        <ul>
                            <li>Concepts of digital imaging</li>
                            <li>Color theory</li>
                            <li>Optimization theory</li>
                            <li>Designing concepts & Digital design</li>
                            <li>Making of on Screen & Printing designs</li>
                            <li>Color separation</li>
                            <li>Different types of printing</li>
                            <li>Magazine ads & Layouts</li>
                            <li>Newspaper ads & Layouts</li>
                            <li>Designing of cards, brochures & flyers</li>
                            <li>Offset works</li>
                            <li>Digital photo manipulation</li>
                            <li>Print ready file setting</li>
                            <li>Scanning & capturing of images</li>
                            <li>Photo Restoration</li>
                            <li>Product modeling</li>
                            <li>Higher end designing in ads</li>
                        </ul>
                        <div className="mdma-course-software">
                            <strong>Software:</strong> Adobe Photoshop, Adobe Illustrator, Adobe InDesign & Adobe Lightroom
                        </div>
                        
                    </div>

                    <div className="col-lg-6 mdma-course-content">
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h2>Module 2:</h2>
                        <h3>2D ANIMATION</h3>
                        <ul>
                            <li>2D ANIMATION</li>
                            <li>Concepts of 2D animation</li>
                            <li>Keys and in-betweens</li>
                            <li>Character animation</li>
                            <li>2D animation with software</li>
                            <li>Animation for making presentations CDs & Portfolios</li>
                            <li>2D animation movie creation</li>
                        </ul>
                        <div className="mdma-course-software">
                            <strong>Software:</strong> Adobe Character Animator, Adobe Animate
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h3>3D ANIMATION</h3>
                        <ul>
                            <li>3D modeling (Organic & Inorganic)</li>
                            <li>Texturing</li>
                            <li>Light & camera</li>
                            <li>Animation</li>
                            <li>Scene planning</li>
                            <li>Special effects & Dynamics</li>
                            <li>Rendering</li>
                        </ul>
                        <div className="mdma-course-software">
                            <strong>Software:</strong> Autodesk Maya
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="mdgd-course-career text-center">
                                    <h2>CAREER PATH</h2>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <ul>
                                                <li>Graphic Designer</li>
                                                <li>Compositor - 2D/3D Animator</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul>
                                                <li>3D Modeler</li>
                                                <li>Texturing & Lighting Artist</li>
                                                <li>Layout Designer</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul>
                                                <li>Effects Artist - Visualizer</li>
                                                <li>Layout Artist : Rigging Artist</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default DMA
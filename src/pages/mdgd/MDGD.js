import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';
import { SubNavbar } from '../../components/Navbar/SubNavbar';
import './MDGD.css'
import SoftwareList from '../../components/SoftwareList/Software';

function MDGD() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
  return (
    <div>
        <SubNavbar/>
        <section className="mdgd-landing-section-one d-flex align-items-center justify-content-center text-center py-5">
            <div className="container transparent m-4">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="mdgd-landing-form-side p-4">
                            <h1>MASTER DIPLOMA IN GAME DESIGN</h1>
                            <h4 className="mt-3">DURATION : 12 MONTHS</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="mdgd-section" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mdda-content">
                        <p className="mt-4">
                            Master Diploma in Game Design is an intensive program designed to equip students with 
                            essential skills and knowledge required for successful career in game designing industry.
                        </p>
                        <p> 
                            Student will develop a comprehensive understanding of game design pipeline from initial 
                            concept art to final game production.
                        </p>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center mdgd-image">
                        <img src="/assets/images/mdgd-cartoon.png" alt="Game Development"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="mdda-course-section">
            <div className="container">
                <div className="row">
                    <h1>Course Outline</h1>
                    <div className="nav-tabs"/>
                    <div className="col-lg-6 mdda-course-content">
                        {/* ---------------------------------------------------------------------------------------------- */}         
                        <h2>Module 1 :</h2>
                        <h3>Fine Arts</h3>
                        <ul>
                            <li>Pre-Production Design & Visualization</li>
                            <li>Concept of design and compositions</li>
                            <li>Light, Colour and Perspective</li>
                            <li>Anatomy and Environment</li>
                            <li>Character Sketching</li>
                            <li>Storytelling, Script writing, Story board and Animatics</li>
                            <li>Pre-production Design Portfolio</li>
                        </ul>
                        <div className="mdda-course-software">
                            <strong>Software:</strong> Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe Lightroom
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h2>Module 2:</h2>
                        <h3>Game Art & Design</h3>
                        <ul>
                            <li>Game Art Fundamentals</li>
                            <li>Digital art</li>
                            <li>Visual Development for Games</li>
                            <li>Game Art using Photoshop</li>
                            <li>Vector illustrations for Games</li>
                        </ul>
                        <div className="mdda-course-software">
                            <strong>Software:</strong> Adobe Photoshop, Adobe Illustrator
                        </div>                        
                    </div>

                    <div className="col-lg-6 mdda-course-content">
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h2>Module 3:</h2>
                        <h3>3D Art & Design</h3>
                        <ul>
                            <li>Introduction to 3D Tools</li>
                            <li>3D modelling with 3D tools</li>
                            <li>Modelling under limited low poly and higher poly count</li>
                            <li>Lighting, Texturing and rigging with 3D tools</li>
                            <li>Animation in 3D tools</li>
                            <li>Rendering with 3D tools</li>
                        </ul>
                        <div className="mdda-course-software">
                            <strong>Software:</strong> Autodesk Maya, Blender, Substance Painter
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h2>Module 4:</h2>
                        <h3>Game Design</h3>
                        <ul>
                            <li>Introduction to Unreal</li>
                            <li>Game Essential with Unreal</li>
                            <li>Creating Game Environment</li>
                            <li>Rendering with Unreal</li>
                            <li>Portfolio making</li>
                        </ul>
                        <div className="mdda-course-software">
                            <strong>Software:</strong> Unreal
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                    </div>
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="mdgd-course-career text-center">
                                    <h2>CAREER PATH</h2>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <ul>
                                                <li>Game Designer</li>
                                                <li>3D Game Artist</li>
                                                <li>3D Asset Artist</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul>
                                                <li>Texturing Artist</li>
                                                <li>Environment Artist</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul>
                                                <li>3D Animator</li>
                                                <li>3D Generalist</li>
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
        <Footer/>
        <Whatsapp />
    </div>
  )
}

export default MDGD
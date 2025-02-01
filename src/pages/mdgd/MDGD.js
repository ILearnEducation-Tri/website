import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';
import './MDGD.css'

function MDGD() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
  return (
    <div>
        <section class="mdgd-section" id="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 mdda-content">
                        <h1>MASTER DIPLOMA IN GAME DESIGN</h1>
                        <h2>DURATION :</h2><h2> 12 MONTHS</h2>
                        <p class="mt-4">
                            Master Diploma in Game Design is an intensive program designed to equip students with 
                            essential skills and knowledge required for successful career in game designing industry.
                        </p>
                        <p> 
                            Student will develop a comprehensive understanding of game design pipeline from initial 
                            concept art to final game production.
                        </p>
                    </div>
                    <div class="col-lg-6 mdgd-image">
                        <img src="/assets/images/game_designing.jpg" alt="Game Development"/>
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
                        <div class="mdda-course-software">
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
                        <div class="mdda-course-software">
                            <strong>Software:</strong> Adobe Photoshop, Adobe Illustrator
                        </div>                        
                    </div>

                    <div class="col-lg-6 mdda-course-content">
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
                        <div class="mdda-course-software">
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
                        <div class="mdda-course-software">
                            <strong>Software:</strong> Unreal
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                    </div>
                    <div class="container mt-5">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="mdgd-course-career text-center">
                                    <h2>CAREER PATH</h2>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <ul>
                                                <li>Game Designer</li>
                                                <li>3D Game Artist</li>
                                                <li>3D Asset Artist</li>
                                            </ul>
                                        </div>
                                        <div class="col-md-4">
                                            <ul>
                                                <li>Texturing Artist</li>
                                                <li>Environment Artist</li>
                                            </ul>
                                        </div>
                                        <div class="col-md-4">
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
        <Footer/>
        <Whatsapp />
    </div>
  )
}

export default MDGD
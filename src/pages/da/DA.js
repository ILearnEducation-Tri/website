import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Whatsapp from '../../components/Footer/Whatsapp'
import './DA.css'

function DA() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
  return (
    <div>
        <section class="da-section" id="about">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-6 col-md-10 text-center text-lg-start mdda-content">
                        <h1 class="fw-bold">DIPLOMA IN ANIMATION</h1>
                        <h2 class="mt-3">DURATION: <span class="fw-normal">6 MONTHS</span></h2>
                        <p class="mt-4">
                            One can hold control on animation world moving perfect hand on, concepts, principles by animation & software’s.
                        </p>
                        <p>
                            This particular course supports every individual as professional in the area of 2D and 3D animation, it stands 
                            to be specialized training in Character animation, Modeling, Walk through animation etc.
                        </p>
                    </div>
                    <div class="col-lg-6 col-md-10 d-flex justify-content-center da-image">
                        <img src="/assets/images/dv_aboute.png" alt="Elephant cartoon" class="img-fluid" />
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
                        <ul>
                            <li>Concepts of digital imaging</li>
                            <li>Color theory</li>
                            <li>Optimization theory</li>
                            <li>Designing concepts & Digital design</li>
                            <li>Color separation</li>
                            <li>Raster & Vector graphics</li>
                            <li>Digital photo manipulation</li>
                            <li>Scanning & capturing of images</li>
                            <li>Photo Restoration</li>
                        </ul>
                        <div class="mdda-course-software">
                            <strong>Software:</strong> Adobe Photoshop, Illustrator
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h2>Module 2:</h2>
                        <h3>2D ANIMATION</h3>
                        <ul>
                            <li>Concepts of 2D animation</li>
                            <li>Keys and In-betweens</li>
                            <li>Character animation</li>
                            <li>2D animation with software</li>
                            <li>Animation for making presentation CDs & Portfolios</li>
                            <li>2D animation movie creation</li>
                        </ul>
                        <div class="mdda-course-software">
                            <strong>Software:</strong> Adobe Animate, Adobe Character Animator
                        </div>
                    </div>

                    <div class="col-lg-6 mdda-course-content">
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h2>Module 3:</h2>
                        <h3>3D ANIMATION</h3>
                        <ul>
                            <li>3D modeling (Organic & Inorganic)</li>
                            <li>Texturing</li>
                            <li>Light & camera</li>
                            <li>Animation</li>
                            <li>Scene planning</li>
                            <li>Special effects & Dynamic</li>
                            <li>Rendering</li>
                        </ul>
                        <div class="mdda-course-software">
                            <strong>Software:</strong> Autodesk Maya, Arnold Simulation
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <div class="mdda-course-career">
                            <h2>CAREER PATH</h2>
                            <ul>
                                <li>Layout Artist</li>
                                <li>2D Animator</li>
                                <li>3D Modeler & Animator</li>
                                <li>3D Creative Designer</li>
                                <li>Video Game Designer</li>
                                <li>Texturing & Lighting Artist</li>
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

export default DA
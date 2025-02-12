import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Whatsapp from '../../components/Footer/Whatsapp'
import { SubNavbar } from '../../components/Navbar/SubNavbar';
import './DA.css'
import SoftwareList from '../../components/SoftwareList/Software';

function DA() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
  return (
    <div>
        <SubNavbar/>
        <section className="da-landing-section d-flex align-items-center justify-content-center text-center py-5">
        <div className="container transparent m-4">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="da-landing-form-side p-4">
                <h1>DIPLOMA IN ANIMATION</h1>
                <h4 className="mt-3">DURATION : 6 MONTHS</h4>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section className="da-section" id="about">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10 text-center text-lg-start mdda-content">
                        <p className="mt-4">
                            One can hold control on animation world moving perfect hand on, concepts, principles by animation & software’s.
                        </p>
                        <p>
                            This particular course supports every individual as professional in the area of 2D and 3D animation, it stands 
                            to be specialized training in Character animation, Modeling, Walk through animation etc.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-10 d-flex justify-content-center da-image">
                        <img src="/assets/images/da-about.png" alt="cartoon" className="img-fluid" />
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
                        <div className="mdda-course-software">
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
                        <div className="mdda-course-software">
                            <strong>Software:</strong> Adobe Animate, Adobe Character Animator
                        </div>
                    </div>

                    <div className="col-lg-6 mdda-course-content">
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
                        <div className="mdda-course-software">
                            <strong>Software:</strong> Autodesk Maya, Arnold Simulation
                        </div>
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <div className="mdda-course-career">
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
        <SoftwareList/>
        <Footer/>
        <Whatsapp/>
    </div>
  )
}

export default DA
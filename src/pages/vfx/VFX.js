import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';
import { SubNavbar } from '../../components/Navbar/SubNavbar';
import './VFX.css'
import SoftwareList from '../../components/SoftwareList/Software';

function VFX() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
  return (
    <div>
        <SubNavbar/>
        <section className="vfx-landing-section-one d-flex align-items-center justify-content-center text-center py-5">
            <div className="container transparent m-4">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="vfx-landing-form-side p-4">
                            <h1>DIPLOMA IN VIDEO EDITING AND VFX</h1>
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
                            This program is specialized in audio, video editing and post production works.                            
                        </p>
                        <p>                            
                            After completing this course one can work on editing & compositing software using edit suites and other advanced equipment’s 
                            with effective background, sounds and music, adding dynamic special effects
                        </p>
                    </div>
                    <div class="col-lg-6 d-flex justify-content-center align-items-center vfx-image">
                        <img src="/assets/images/vfx-about.png" alt="Game Development"/>
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
                        <ul>
                            <li>Concepts of editing & Post production</li>
                            <li>Video compressions</li>
                            <li>Video settings & Formats</li>
                            <li>Elements of Editing, Post production & VFX</li>
                            <li>Linear & Non-linear editing</li>
                            <li>Transitions effects</li>
                            <li>Compositing (2D & 3D)</li>
                            <li>Special effects Tiling</li>
                            <li>Rough cutting - Rendering</li>
                            <li>Motion Graphics Rotoscopy</li>
                            <li>Parallax Photography Intro</li>
                        </ul>
                        <div class="mdma-course-software">
                            <strong>Software:</strong> 
                                Adobe Photoshop, Adobe premiere,
                                Adobe After Effects, Adobe Flash
                                FCP & Pro Tools, Cinema 4D, Nuke
                        </div>                        
                    </div>

                    <div class="col-lg-6 mdma-course-content">
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <h3>PROJECT Compositing & Visual effects</h3>
                        <ul>
                            <li>Commercial Advertisement</li>
                            <li>Movie trailer with title work</li>
                            <li>Composited video using Rotoscopy/Chroma</li>
                            <li>Motion graphics advertisement</li>
                            <li>Video shooting and editing</li>
                            <li>(Preproduction, Production and Post Production)</li>
                        </ul>
                        <div class="mdma-course-software">
                            <strong>Software:</strong> Adobe Character Animator, Adobe Animate
                        </div>
                    </div>
                    <div class="container mt-5">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="mdgd-course-career text-center">
                                    <h2>CAREER PATH</h2>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <ul>
                                                <li>Post production Specialist</li>
                                                <li>VFX Specialist</li>
                                                <li>SFX Specialist</li>
                                            </ul>
                                        </div>
                                        <div class="col-md-4">
                                            <ul>
                                                <li>2D Compositor</li>
                                                <li>3D Compositor</li>
                                            </ul>
                                        </div>
                                        <div class="col-md-4">
                                            <ul>
                                                <li>Editor Movie Marketing Artist</li>
                                                <li>Motion Graphic Designer</li>
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

export default VFX
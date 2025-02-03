import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';
import './VFX.css'

function VFX() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
  return (
    <div>
        <section class="dma-section" id="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12 mdma-content text-center text-lg-start">
                        <h1>DIPLOMA IN VIDEO EDITING AND VFX</h1>
                        <h2>DURATION:</h2>
                        <h2>6 MONTHS</h2>
                        <p class="mt-4">
                            This program is specialized in audio, video editing and post production works.                            
                        </p>
                        <p>                            
                            After completing this course one can work on editing & compositing software using edit suites and other advanced equipment’s 
                            with effective background, sounds and music, adding dynamic special effects
                        </p>
                    </div>
                    <div class="col-lg-6 col-md-12 mdma-image">
                        <div class="mdma-course-career">
                            <h2 className='text-center'>CAREER PATH</h2>
                            <ul className='text-left'>
                                <li>Post production Specialist</li>
                                <li>VFX Specialist</li>
                                <li>SFX Specialist</li>
                                <li>2D Compositor</li>
                                <li>3D Compositor</li>
                                <li>Editor Movie Marketing Artist</li>
                                <li>Motion Graphic Designer</li>
                            </ul>
                        </div>
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
                </div>
            </div>
        </section>
        <Footer />
        <Whatsapp />
    </div>
  )
}

export default VFX
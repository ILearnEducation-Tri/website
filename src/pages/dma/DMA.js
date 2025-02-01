import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';
import './DMA.css'

function DMA() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
  return (
    <div>
        <section class="dma-section" id="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12 mdma-content text-center text-lg-start">
                        <h1>DIPLOMA IN MULTIMEDIA AND ANIMATION</h1>
                        <h2>DURATION:</h2>
                        <h2>8 MONTHS</h2>
                        <p class="mt-4">
                            This program works as a quick ride to the world of Print & animation industry.                            
                        </p>
                        <p>
                            It helps to work on graphics & animation technologies and software, one can dare to create images & animations 
                            for print and visual media.
                        </p>
                    </div>
                    <div class="col-lg-6 col-md-12 mdma-image">
                        <div class="mdma-course-career">
                            <h2 className='text-center'>CAREER PATH</h2>
                            <ul className='text-left'>
                                <li>Graphic Designer</li>
                                <li>Compositor - 2D/3D Animator</li>
                                <li>3D Modeler</li>
                                <li>Texturing & Lighting Artist</li>
                                <li>Layout Designer</li>
                                <li>Effects Artist - Visualizer</li>
                                <li>Layout Artist : Rigging Artist</li>
                            </ul>
                        </div>
                        <img src="/assets/images/cartoon_bird.png" class="img-fluid d-none" alt="Lizard cartoon"/>
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
                        <div class="mdma-course-software">
                            <strong>Software:</strong> Adobe Photoshop, Adobe Illustrator, Adobe InDesign & Adobe Lightroom
                        </div>
                        
                    </div>

                    <div class="col-lg-6 mdma-course-content">
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
                        <div class="mdma-course-software">
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
                        <div class="mdma-course-software">
                            <strong>Software:</strong> Autodesk Maya
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

export default DMA
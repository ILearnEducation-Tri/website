import React, { useEffect } from 'react';
import './DVE.css';
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';
import { SubNavbar } from '../../components/Navbar/SubNavbar';

function DVE() {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
  return (
    <div>
        <SubNavbar/>
      <section className="dve-landing-section d-flex align-items-center justify-content-center text-center py-5">
        <div className="container transparent m-4">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="dve-landing-form-side p-4">
                <h1>DIPLOMA IN VIDEO EDITING</h1>
                <h4 className="mt-3">DURATION : 4 MONTHS</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mdgd-section" id="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 mdda-content">
                        <p class="mt-4">
                            The Diploma in Video Editing program provides students with essential skills and knowledge for a successful 
                            career in video editing. Participants will learn the entire video editing process, from initial concepts to 
                            final production, and master techniques in post-production, transitions, special effects, and motion graphics. 
                        </p>
                        <p> 
                            Graduates will be prepared for various roles in the industry, such as post-production specialist, 2D compositor, 
                            and motion graphic designer.
                        </p>
                    </div>
                    <div class="col-lg-6 d-flex justify-content-center align-items-center mdgd-image">
                        <img src="/assets/images/dve-aboute.png" alt="Game Development"/>
                    </div>
                </div>
            </div>
      </section>
      <section className="mdda-course-section py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <img src="/assets/images/dve-toolbox.png" alt="Video Editing" className="img-fluid"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h1 className="text-right mb-4">Course Outline</h1>
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-right">
                            <ul className="w-100 px-3">
                                <li>Concepts of editing & Post production</li>
                                <li>Video compressions</li>
                                <li>Video settings & Formats</li>
                                <li>Elements of Editing, Post production</li>
                                <li>Linear & Non-linear editing</li>
                                <li>Transitions & effects</li>
                                <li>Special effects. Titling</li>
                                <li>Rough cutting - Rendering</li>
                                <li>Motion Graphics Rotoscopy</li>
                                <li>Photography Intro</li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-right">
                        <div className="border p-3 text-right mt-4" style={{ maxWidth: '900px', width: '100%' }}>
                            <strong>Software:</strong> Final Cut Pro, Premiere Pro, DaVinci Resolve, Edius
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-lg-12 col-md-10 col-sm-12">
                    <img src="/assets/images/dve-track.png" alt="Game Development" className="img-fluid"/>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-lg-10 col-md-10 col-sm-12">
                    <div className="mdda-course-career text-center p-4">
                        <h2>CAREER PATH</h2>
                        <div className="row mt-3">
                            <div className="col-md-4 col-sm-6">
                                <ul>
                                    <li>Post Production Specialist</li>
                                    <li>2D Compositor</li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <ul>
                                    <li>Sport Editor</li>
                                    <li>Editor Movie Marketing Artist</li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <ul>
                                    <li>SFX Specialist</li>
                                    <li>Motion Graphic Designer</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-5 d-none'>
              <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="mdda-course-career text-left p-4">
                      <h2>CAREER PATH</h2>
                      <div className="row mt-3">
                          <div className="col-md-12">
                              <ul>
                                  <li>Post Production Specialist</li>
                                  <li>2D Compositor</li>
                                  <li>Sport Editor</li>
                                  <li>Editor Movie Marketing Artist</li>
                                  <li>SFX Specialist</li>
                                  <li>Motion Graphic Designer</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="text-left p-4">
                      <h2>TOOLS TO USE</h2>
                      <ul>
                          <li>Importing & Exporting</li>
                          <li>Cutting & Trimming</li>
                          <li>Arranging Clips</li>
                          <li>Transitions</li>
                          <li>Audio Editing</li>
                          <li>Color Grading</li>
                          <li>Text & Titles</li>
                          <li>Special Effects</li>
                          <li>Masking & Tracking</li>
                          <li>Chroma Key</li>
                      </ul>
                  </div>
              </div>
            </div>
        </div>
      </section>
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default DVE;
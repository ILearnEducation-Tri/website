import React, { useEffect } from 'react';
import './DVE.css';
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Footer/Whatsapp';

function DVE() {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
  return (
    <div>
      <section className="dve-landing-section d-flex align-items-center justify-content-center text-center py-5">
        <div className="container transparent m-4">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="dve-landing-form-side p-4">
                <h1>DIPLOMA IN VIDEO EDITING</h1>
                <h4 className="mt-3">DURATION: 4 MONTHS</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mdda-course-section py-5">
        <div className="container">
          <h1 className="text-center mb-4">Course Outline</h1>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
              <ul className="w-75 px-3">
                <li>Concepts of editing & Post production</li>
                <li>Video compressions</li>
                <li>Video settings & Formats</li>
                <li>Elements of Editing, Post production</li>
                <li>Linear & Non-linear editing</li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
              <ul className="w-75 px-3">
                <li>Transitions & effects</li>
                <li>Special effects. Titling</li>
                <li>Rough cutting - Rendering</li>
                <li>Motion Graphics Rotoscopy</li>
                <li>Photography Intro</li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="border p-3 text-center mt-4" style={{ maxWidth: '900px', width: '100%' }}>
              <strong>Software:</strong> Final Cut Pro, Premiere Pro, DaVinci Resolve, Edius
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
        </div>
      </section>
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default DVE;
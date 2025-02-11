import React from 'react'

function SoftwareList() {
  return (
    <section className="mdda-icons-section px-5">
        <ul className="d-none d-lg-flex w-100 justify-content-between align-items-center list-unstyled">
            {
                toolslist.map((item)=>(
                    <li className="p-2">
                        <img src="/assets/icons/{}.png" alt="Photoshop" className="icon"/>
                    </li>
                ))
            }            
            {/* <li className="p-2">
                <img src="/assets/icons/Illustrator.png" alt="Illustrator" className="icon"/>
            </li>
            <li className="p-2">
                <img src="/assets/icons/InDesign.png" alt="InDesign" className="icon"/>
            </li>
            <li className="p-2">
                <img src="/assets/icons/Lightroom.png" alt="Lightroom" className="icon"/>
            </li>
            <li className="p-2">
                <img src="/assets/icons/CharacterAnimator.png" alt="Character Animator" className="icon"/>
            </li>
            <li className="p-2">
                <img src="/assets/icons/Nuke.png" alt="Nuke" className="icon"/>
            </li>
            <li className="p-2">
                <img src="/assets/icons/Maya.png" alt="Maya" className="icon"/>
            </li>
            <li className="p-2">
                <img src="/assets/icons/Blender.png" alt="Blender" className="icon"/>
            </li>
            <li className="p-2">
                <img src="/assets/icons/PremierePro.png" alt="Premiere Pro" className="icon"/>
            </li>
            <li className="p-2">
                <img src="/assets/icons/Audition.png" alt="Audition" className="icon"/>
            </li>
            <li className="p-2">
                <img src="/assets/icons/AfterEffects.png" alt="After Effects" className="icon"/>
            </li>
            <li className="p-2">
                <img src="/assets/icons/4D.png" alt="4D" className="icon"/>
            </li> */}
        </ul>
    </section>
  )
}

export default SoftwareList
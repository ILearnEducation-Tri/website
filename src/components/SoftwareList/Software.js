import React from 'react'
import './Software.css'

function SoftwareList() {
    const toolsList = [
        "Photoshop",
        "Illustrator",
        "InDesign",
        "Lightroom",
        "CharacterAnimator",
        "Nuke",
        "Maya",
        "Blender",
        "PremierePro",
        "Audition",
        "AfterEffects",
        "4D"
    ];
  return (
    <section className="icons-section px-5">
        <ul className="d-none d-lg-flex w-100 justify-content-between align-items-center list-unstyled">
            {toolsList.map((item, index) => (
            <li key={index} className="p-2">
                <img src={`/assets/icons/${item}.png`} alt={item} className="icon" />
            </li>
            ))}
        </ul>
    </section>
  )
}

export default SoftwareList
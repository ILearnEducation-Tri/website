import React from 'react'

const stages = [
    {
      title: 'Temporary Period',
      description: 'Two-week period to assess strengths and interests.',
      icon: 'fa-hourglass-start'
    },
    {
      title: 'Course Enrollment',
      description: 'Join courses, undertake individual projects, and build profiles.',
      icon: 'fa-book'
    },
    {
      title: 'Year-long Support',
      description: 'Receive one year of support after course completion.',
      icon: 'fa-life-ring'
    },
    {
      title: 'Placement Assistance',
      description: 'Get placement assistance and embark on your career journey.',
      icon: 'fa-briefcase'
    }
  ];
 
  
function Process() {
  return (
    <section className="process-section" id="process">
        <div className="container">
            <h2>Our Process</h2>
            <div className="row g-4">
                {stages.map((card, index)=>(
                    <div className="col-lg-3 col-md-6" key={index}>
                        <div className="process-card">
                            <i className={`fas ${card.icon}`}></i>
                            <h5>Step {index + 1}</h5>
                            <h5>{card.title}</h5>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}               
            </div>
        </div>
    </section>
  )
}

export default Process
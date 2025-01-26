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
    <section class="process-section" id="process">
        <div class="container">
            <h2>Our Process</h2>
            <div class="row g-4">
                {stages.map((card, index)=>(
                    <div class="col-lg-3 col-md-6" key={index}>
                        <div class="process-card">
                            <i class={`fas ${card.icon}`}></i>
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
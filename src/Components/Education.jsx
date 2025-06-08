import React from 'react'

function Education() {
  return (
    <>
      
<div className="container py-5" id="education">
  <h2 className="section-title">Educations</h2>
  <div className="row align-items-center">
    {/* Left side: Image */}
    <div className="col-md-6 text-center">
      <img src="/edu.jpg" alt="Education Image" className="edu-img" />
    </div>
    {/* Right side: Education Cards */}
    <div className="col-md-6">
      <div className="education-card">
        <small>2024 - Present</small>
        <h5><i className="bi bi-person-fill" />Full Stack Development</h5>
        <p className="mb-0">Red And White Institute </p>
      </div>
      <div className="education-card">
        <small>2018 - 2022</small>
        <h5><i className="bi bi-person-fill" />Bachelor Degree in Computer Engeneering</h5>
        <p className="mb-0">S S Agrawal Institute </p>
      </div>
      <div className="education-card">
        <small>2016 - 2018</small>
        <h5><i className="bi bi-person-fill" />Higher Secondary</h5>
        <p className="mb-0">A B School Navsari</p>
      </div>
      <div className="education-card">
        <small>2014 - 2016</small>
        <h5><i className="bi bi-person-fill" />Secondary School School</h5>
        <p className="mb-0">A B School Navsari</p>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Education

import React from 'react'

function Projects() {
  return (
    <>
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="section-title mb-5">PROJECTS</h2>
          <div className="row g-4">
            {/* Project 1 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src="/HomePage.png" className="card-img-top" alt="Blog Project Screenshot" />
                <div className="card-body">
                  <h5 className="card-title">Blog Project</h5>
                  <p className="card-text">A simple Blog App using Node.js, Express, MongoDB, and EJS. Users can CRUD blogs.</p>
                  <a href="https://pr-7-blog-passport.onrender.com" target="_blank" className="btn btn-primary me-2">Live Demo</a>
                  <a href="https://github.com/bhavini1105/PR-7-Blog-Passport" target="_blank" className="btn btn-outline-dark">GitHub</a>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src="/loader.png" className="card-img-top" alt="Loader Screenshot" />
                <div className="card-body">
                  <h5 className="card-title">Loader</h5>
                  <p className="card-text">A smooth preloader animation created using jQuery.</p>
                  <a href="https://clinquant-conkies-d859c9.netlify.app/" target="_blank" className="btn btn-primary me-2">Live Demo</a>
                  <a href="https://github.com/bhavini1105/Jquerypracticle-Exam/blob/main/Preloader/index.html" target="_blank" className="btn btn-outline-dark">GitHub</a>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src="/dog.png" className="card-img-top" alt="Dog API Screenshot" />
                <div className="card-body">
                  <h5 className="card-title">Dog Image API</h5>
                  <p className="card-text">Web app that fetches and shows random dog images using API.</p>
                  <a href="https://guileless-mandazi-c8369e.netlify.app/" target="_blank" className="btn btn-primary me-2">Live Demo</a>
                  <a href="https://github.com/bhavini1105/Javascript/commit/48cd8d33fdae63a031ff14dd4c5c374c17d14489" target="_blank" className="btn btn-outline-dark">GitHub</a>
                </div>
              </div>
            </div>
            {/* Project 4 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src="/quiz.png" className="card-img-top" alt="Quiz App Screenshot" />
                <div className="card-body">
                  <h5 className="card-title">Quiz App</h5>
                  <p className="card-text">Quiz Application with multiple choice questions built using JavaScript.</p>
                  <a href="https://jazzy-syrniki-096822.netlify.app/" target="_blank" className="btn btn-primary me-2">Live Demo</a>
                  <a href="https://github.com/bhavini1105/Javascript/tree/main/js-project-qa" target="_blank" className="btn btn-outline-dark">GitHub</a>
                </div>
              </div>
            </div>
            {/* Project 5 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src="/ecommerce.png" className="card-img-top" alt="E-commerce Screenshot" />
                <div className="card-body">
                  <h5 className="card-title">E-commerce Site</h5>
                  <p className="card-text">An E-commerce app with cart, authentication, and admin panel.</p>
                  <a href="https://pr-e-commerce.onrender.com" target="_blank" className="btn btn-primary me-2">Live Demo</a>
                  <a href="https://github.com/bhavini1105/PR-E-Commerce" target="_blank" className="btn btn-outline-dark">GitHub</a>
                </div>
              </div>
            </div>
            {/* Project 6 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src="/storage.png" className="card-img-top" alt="Storage App Screenshot" />
                <div className="card-body">
                  <h5 className="card-title">Storage App</h5>
                  <p className="card-text">A React app for feedback submission using Local &amp; Session Storage.</p>
                  <a href="https://session-storage-rust.vercel.app/" target="_blank" className="btn btn-primary me-2">Live Demo</a>
                  <a href="https://github.com/bhavini1105/Session-Storage" target="_blank" className="btn btn-outline-dark">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Projects

import React from 'react'
import { Link } from 'react-router'

function Home() {

    const codeSnippet = `
const coder = {
  name: 'Bhavini Patel',
  skills: [ 'HTML', 'CSS', 'React', 'Bootstrap', 'Express', 'Nodejs', 'MongoDB'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;

    return (
        <>

            <div className="container hero-section">
                <div className="row align-items-center">
                    {/* Left Side */}
                    <div className="col-md-6 text-center text-md-start">
                        <h2 className="highlight-blue">Hello,</h2>
                        <h1 className="highlight-blue">This is <span className="highlight-pink">BHAVINI PATEL</span>,<br />I'm a Professional
                            <span className="highlight-green"><br />Web Developer</span>.</h1>
                        <div className="social-icons my-4">
                            <i className="bi bi-github" />
                            <i className="bi bi-linkedin" />
                            <i className="bi bi-facebook" />

                        </div>
                        <div className="mt-3">
                            <button className="btn btn-outline-light me-2">
                                <Link class="nav-link" to="/contact">  CONTACT ME 👤 </Link> </button>
                            <button className="btn btn-gradient">GET RESUME 📄</button>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="col-md-6 mt-5 mt-md-0">
                        <div className="code-box bg-dark text-white p-3 rounded">
                            <pre><code>{codeSnippet}</code></pre>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Home

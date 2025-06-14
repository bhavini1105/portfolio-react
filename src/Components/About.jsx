import React from 'react'

function About() {
    return (
        <>

            <section id="about" className="container py-5 text-white">

                <h2 className="section-title mb-5">ABOUT</h2>
                
                <h3 className="mb-5">Hi, I'm Bhavini 👋</h3>
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4">
                        <h2 className="mb-4">Full-Stack Developer</h2>
                        <p className='list-unstyled'>
                            I am a passionate Full-Stack Developer with expertise in modern web technologies.
                            I love creating interactive, responsive, and user-friendly applications that make an impact.
                        </p>
                        <ul className="list-unstyled">
                            <li className="mb-3"><strong>💼Skills:</strong> HTML, CSS, JavaScript, React, Node.js</li>
                            <li className="mb-3"><strong>🎓 Education:</strong> B.E. in Computer Engineering, S S Agrawal College (2018 – 2022)</li>
                            <li className="mb-3"><strong>💬 Soft Skills:</strong> Good communicator, team player, always eager to learn new tools
                                and technologies</li>
                            <li className="mb-3"><strong>📧 Email:</strong> bhavinipatel7532@gmail.com</li>
                            <li className="mb-3"><strong>📞Phone:</strong> +91 95101 09252</li>
                            <li className="mb-3"><strong>📍Location:</strong> At. Sarpore, Post-Pardi, Ta &amp; Dist - Navsari</li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-4 ">
                        <img src="/about.jpg" alt="aboutimg" className='edu-img w-100' />
                    </div>
                </div>
            </section>


        </>
    )
}

export default About

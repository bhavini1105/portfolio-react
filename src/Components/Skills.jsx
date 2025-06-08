import React from 'react'

function Skills() {
    return (
        <>
            <section id="skills" className="container py-5 text-white">
                <div className="container text-center">
                    <h2 className="section-title mb-5">SKILLS</h2>
                    <p className="mb-4">I enjoy diving into new technologies. Here's a list of what I work with:</p>
                    <div className="row g-4">
                        <div className="col-6 col-md-3">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <i className="bi bi-filetype-html fs-1 text-primary" />
                                    <h6 className="mt-3">HTML</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <i className="bi bi-filetype-css fs-1 text-info" />
                                    <h6 className="mt-3">CSS</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <i className="bi bi-filetype-js fs-1 text-warning" />
                                    <h6 className="mt-3">JavaScript</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <i className="bi bi-code-slash fs-1 text-success" />
                                    <h6 className="mt-3">React</h6>
                                </div>
                            </div>
                        </div>
                        {/* Add more cards here */}
                        <div className="col-6 col-md-3">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <i className="bi bi-github fs-1 text-dark" />
                                    <h6 className="mt-3">GitHub</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <i className="bi bi-server fs-1 text-secondary" />
                                    <h6 className="mt-3">Node.js</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <i className="bi bi-database-fill fs-1 text-success" />
                                    <h6 className="mt-3">MongoDB</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Skills

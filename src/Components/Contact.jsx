import React from 'react'

function Contact() {
    return (
        <>

            <div>
                <div className="container py-5">
                    <h2 className="text-success mb-4 fw-bold">Quick Ways to Get Connected</h2>
                    <div className="row">
                        <div className="col-md-6 d-flex flex-column justify-content-center text-white gap-3 fs-5">

                            {/* Email Button */}
                            <div>
                                <i className="bi bi-envelope-fill me-2 text-info"></i>
                                <strong>Email:</strong>
                                <a
                                    href="mailto:bhavinipatel7532@gmail.com"
                                    className="btn btn-sm btn-outline-success ms-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Send Email
                                </a>
                            </div>

                            {/* Phone */}
                            <div>
                                <i className="bi bi-telephone-fill me-2 text-danger"></i>
                                <strong>Call:</strong>
                                <a href="tel:+919510109252" className="text-white text-decoration-none ms-2">
                                    +91 95101 09252
                                </a>
                            </div>


                            {/* LinkedIn */}
                            <div>
                                <a
                                    href="https://www.linkedin.com/in/bhavini-patel-94823b2a8/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-lg mt-3 d-inline-flex align-items-center"
                                >
                                    <i className="bi bi-linkedin me-2 fs-4"></i>
                                    Connect on LinkedIn
                                </a>
                            </div>

                            {/* Location */}
                            {/* <div>
                                <i className="bi bi-geo-alt-fill me-2 text-warning"></i>
                                <strong>I'm From:</strong>
                                <span className="ms-2">Navsari, Gujarat, India</span>
                            </div> */}

                        </div>
                    </div>
                </div>

                {/* Side Tab */}
                <div className="side-tab">CONTACT</div>
            </div>

        </>
    )
}

export default Contact

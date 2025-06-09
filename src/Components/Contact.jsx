import React from 'react'

function Contact() {
    return (
        <>

            <div>
                <div className="container py-5">
                    <h4 className="text-success mb-4">CONTACT WITH ME</h4>
                    <div className="row">
                        {/* Contact Form */}
                        <div className="col-md-6">
                            <div className="contact-form">
                                <p>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Your Name:</label>
                                        <input type="text" className="form-control bg-dark text-white border-0" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Your Email:</label>
                                        <input type="email" className="form-control bg-dark text-white border-0" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Your Message:</label>
                                        <textarea rows={4} className="form-control bg-dark text-white border-0" defaultValue={""} />
                                    </div>
                                    <button type="submit" className="btn send-btn text-white px-4">
                                        SEND MESSAGE <i className="fas fa-paper-plane ms-2" />
                                    </button>
                                </form>
                            </div>
                        </div>
                        {/* Contact Details */}
                        <div className="col-md-6 d-flex flex-column justify-content-center text-white">

                            <p>📧bhavinipatel7532@gmail.com</p>
                            <p>📞+91 95101 09252</p>
                            <p>📍 At. Sarpore, Post-Pardi, Ta &amp; Dist - Navsari </p>
                            <div className="social-icons mt-3">
                                <a href="https://github.com/bhavini1105"><i className="bi bi-github" /></a>
                                <a href="https://www.linkedin.com/in/bhavini-patel-94823b2a8/"><i className="bi bi-linkedin" /></a>
                                <a href="https://www.facebook.com/bhavini.bhavini.96995"><i className="bi bi-facebook" /></a>
                            </div>
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

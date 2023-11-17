import React from "react";

const MyServices = () => {
    return (
        <>
                    <div className="page-front">
                        <h1 className="title">My Services</h1>
                        <div className="services-box">
                            <div className="services-content">
                                <i className="bx bx-code-alt"></i>
                                <h3>Web Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="#" className="btn">Read More</a>
                            </div>
                            <div className="services-content">
                                <i className="bx bxs-paint"></i>
                                <h3>Creative Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="#" className="btn">Read More</a>
                            </div>
                            <div className="services-content">
                                <i className="bx bx-right-top-arrow-circle"></i>
                                <h3>Routing & Switching</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="#" className="btn">Read More</a>
                            </div>
                            <div className="services-content">
                                <i className="bx bx-lock-alt"></i>
                                <h3>VPN</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="#" className="btn">Read More</a>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default MyServices;
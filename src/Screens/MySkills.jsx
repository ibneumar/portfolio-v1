import React from "react";

const MySkills = () => {
    return (
        <>
                    <div className="page-back">
                        <h1 className="title">My Skills</h1>
                        <div className="skills-box">
                            <div className="skills-content">
                                <h3>Frontend</h3>
                                <div className="content">
                                    <span><i className="bx bxl-html5"></i>HTML</span>
                                    <span><i className="bx bxl-css3"></i>CSS</span>
                                    <span><i className="bx bxl-javascript"></i>JS</span>
                                    <span><i className="bx bxl-react"></i>React</span>
                                    <span><i className="bx bxl-bootstrap"></i>Bootstrap</span>
                                </div>
                            </div>
                        
                            <div className="skills-content">
                                <h3>Backend</h3>
                                <div className="content">
                                    <span><i className="bx bxl-nodejs"></i>NodeJS</span>
                                    <span><i className="bx bxl-php"></i>PHP</span>
                                </div>
                            </div>
                        
                            <div className="skills-content">
                                <h3>Networking</h3>
                                <div className="content">
                                    <span><i className="bx bx-right-top-arrow-circle"></i>Routing</span>
                                    <span><i className="bx bx-right-top-arrow-circle"></i>Switching</span>
                                    <span><i className="bx bx-lock-alt"></i>VPN</span>
                                </div>
                            </div>
                        </div>
                    </div>
        
        </>
    )
}

export default MySkills;
import React from "react";

const LatestProject = () => {
    return (
        <>
                    <div className="page-front">
                        <h1 className="title">Latest Project</h1>
                        <div className="portfolio-box">
                            <div className="img-box">
                                <img src="images/portfolio.png" alt="" />
                            </div>
                        
                            <div className="info-box">
                                <div className="info-title">
                                    <h3>Datashare Website</h3>
                                    <a href="http://www.datashare.pk" target="_blank">Live Preview<i className="bx bx-link-external"></i></a>
                                </div>
                                    <p>Tech Used</p>
                                    <p>HTML5, CSS3, Javscript</p>
                                
                            </div>
                            {/* <div className="btn-box">
                                <a href="#" className="btn">Source Code</a>
                                <a href="#" className="btn">More Projects</a>
                            </div> */}
                        </div>
                    </div>
        </>
    )
}

export default LatestProject;
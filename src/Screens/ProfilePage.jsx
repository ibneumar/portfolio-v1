import React from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
    return (
        <>
            <div className="book-page">
                <div className="profile-page">
                    <img src="images/photo.jpg" alt="" />
                    <h1>Muhammad Adnan</h1>
                    <h3>Network Engineer</h3>
                    <div className="social-media">
                        <a href="#"><i className="bx bxl-facebook"></i></a>
                        <a href="#"><i className="bx bxl-twitter"></i></a>
                        <a href="#"><i className="bx bxl-linkedin"></i></a>
                        <a href="#"><i className="bx bxl-instagram"></i></a>
                    </div>
                    <p>AoA, I'm Muhammad Adnan, a Network Engineer.</p>
                    <div className="btn-box">
                        <a href="#" className="btn">Download CV</a>
                        <Link to="contact" className="btn conatct-me">Contact Me</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;
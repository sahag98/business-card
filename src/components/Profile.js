import React from "react"
import profile from "../assets/sahakprofile.jpg"
import emailLogo from "../assets/email-logo.png"

export default function Profile() {
    return (
        <div className="profile">
           <img src={profile} className="profile-img" alt="profile"/>
            <div className="profile-center">
                <h1 className="name">Sahak Arzoumanian</h1>
                <h3>Front End Developer</h3>
                <h4>sahagarz.website</h4> 
            </div>
            <div className="profile-center-buttons">
                    <div className="buttons">
                        <img src={emailLogo} className="info-logo" alt="email"/>
                        <div className="email">Email</div>
                    </div>
                    <div className="linkedIn-buttons">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" className="linkedIn-logo" alt="linkedIn"/>
                        LinkedIn
                    </div>
            </div>  
        </div>
    )
}
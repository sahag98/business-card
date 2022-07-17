import React from "react"
import instagram from "../assets/instagram-logo.png"
import facebook from "../assets/facebook-logo.png"

export default function Footer() {
    return (
        <div className="footer">
        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384033.png" className="footer-icon" alt="logo"/>
        <img src={instagram} className="footer-icon" alt="logo"/>
        <img src={facebook} className="footer-icon" alt="logo"/>
        <img src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png" className="footer-icon" alt="logo"/>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="footer-icon" alt="logo"/>
        </div>
    )
}
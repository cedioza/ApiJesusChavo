import React from "react";
import ImgLogo from "../../../img/logoChavo.png";
import './Logo.css'
export const Logo = () => {
    return (
        <>
            <img className="Logo" src={ImgLogo} alt="LOGO" />
        </>
    )
}
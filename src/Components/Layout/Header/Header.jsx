import React from 'react'
import './Header.css';
import { Logo } from '../../UI/Logo/Logo';
export const Header = () => {
    return (
        <div className="contHeader">
            <Logo/>
            <p>Api del chavo con React</p>
        </div>
    )
}
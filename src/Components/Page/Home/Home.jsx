import React from "react";
import './Home.css';
import { ContCard } from "../../Layout/ContCard/ContCard";
import { Header } from "../../Layout/Header/Header";

export const Home = () => {
    return (
        <div className="pageHome">
            <Header/>  
            <ContCard/>
        </div>
    )
}

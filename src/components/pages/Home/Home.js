import React from "react";
import BestRecipes from "../../BestRecipes/BestRecipes";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Services from "../../Services/Services";

import "./Home.css"
export default function Home(){
    return(
        <div className='home'>
            <Header/>
            <BestRecipes/>
            <Services/>
            <Footer/>
        </div>
        
    )
}
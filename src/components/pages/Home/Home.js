import React from "react";
import BestRecipes from "../../BestRecipes/BestRecipes";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import MemberShip from "../../MemberShip/MemberShip";
import ReadOurBlog from "../../ReadOurBlog/ReadOurBlog";
import Services from "../../Services/Services";
import "./Home.scss"

export default function Home(){
    return(
        <div className='home'>
            <Header/>
            <BestRecipes/>
            <Services/>
            <ReadOurBlog/>
            <MemberShip/>

        </div>
        
    )
}
import React from "react";
import NavBar from "./Navbar";
import HeroSection from "./HeroSection"
import CardSection from "./CardSection"
import AppSection from "./AppSection"
import Footer from "./Footer"


const App=()=>{
    return(
        <div>
        
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <CardSection></CardSection>
        <AppSection></AppSection>
        <Footer></Footer>
        </div>
    );
};
export default App;
import React from "react";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
// import Services from './components/services/Services'
import ClientBar from "../components/clientbar/ClientBar";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import Portfolio from "../components/portfolio/Portfolio";
import Testimonials from "../components/testimonials/Testimonials";
import ReadMore from "../components/portfolio/ReadMore";
import PortfolioItem from '../components/portfolio/PortfolioItem';
import { useState } from "react";

export default function HomePage() {
    const [buttonReadMore, setButtonReadMore] = useState(false)
    return (
        <>
            <Header id="header" />
            {/* <ClientBar /> */}
            <About id="about" />
            <Portfolio id="portfolio" trigger={buttonReadMore} setTrigger={setButtonReadMore} />
            <ReadMore trigger={buttonReadMore} setTrigger={setButtonReadMore}>  </ReadMore>
            <Experience id="experience" />
            <Testimonials id="testimonials" />
            <Contact id="contact" />
        </>
    );
}

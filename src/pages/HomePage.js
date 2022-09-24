import React from "react";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import Portfolio from "../components/portfolio/Portfolio";
import Testimonials from "../components/testimonials/Testimonials";
import ReadMore from "../components/portfolio/ReadMore";


export default function HomePage() {
    return (
        <>
            <Header id="header" />
            <About id="about" />
            <Portfolio />
            <ReadMore />
            <Experience id="experience" />
            <Testimonials id="testimonials" />
            <Contact id="contact" />
        </>
    );
}

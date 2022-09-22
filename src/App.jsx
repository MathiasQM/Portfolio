import React from "react";
import Nav from "./components/nav/Nav";
// import Services from './components/services/Services'
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path={"/projects/:slug"} element={<ProjectPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;

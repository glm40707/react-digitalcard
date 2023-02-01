import React from "react";
import ReactDOM from "react-dom"
import Photo from "./components/photo"
import Head from "./components/header"
import Icons from "./components/icons"
import About from "./components/about"
import Interests from "./components/interests"
import Footer from "./components/footer"


ReactDOM.render(
    <>
    <Photo />
    <Head />
    <Icons />
    <About />
    <Interests />
    <Footer />
    </>
, document.getElementById('root'))
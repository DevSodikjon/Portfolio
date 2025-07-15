import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Hero from '../main/Hero'
import Skills from '../main/Skills'
import Encryption from '../main/Encryption'
import Projects from '../main/Projects'
import AboutMe from '../main/AboutMe'
import Services from '../main/Services'

const HomePage = () => {
    return (
        <div>
            <Hero />
            <AboutMe />
            <Skills />
            <Encryption />
            <Services />
            <Projects />
        </div>
    )
}

export default HomePage

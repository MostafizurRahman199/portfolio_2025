import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import FrontEndProject from './components/FrontEndProject'
import ReactProject from './components/ReactProject'
import Profile from './components/Profile'
import Skills from './components/Skills'
import AnimationBanner from './components/AnimationBanner'
import About from './components/About'
import Education from './components/Education'
import FullStackProjects from './components/FullStackProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'

function App() {


  return (
   <div>
    <Navbar></Navbar>
    <AnimationBanner></AnimationBanner>
    <About></About>
    <Skills></Skills>
    <Education></Education>
    <Experience></Experience>
    <FullStackProjects></FullStackProjects>
    <ReactProject></ReactProject>
    <FrontEndProject></FrontEndProject>
    <Contact></Contact>
    <Footer></Footer>
   </div>
  )
}

export default App

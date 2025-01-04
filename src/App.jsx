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

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar></Navbar>
    {/* <Banner></Banner> */}
    <AnimationBanner></AnimationBanner>
    <About></About>
    <Skills></Skills>
    <Education></Education>
    <FullStackProjects></FullStackProjects>
    <ReactProject></ReactProject>
    <FrontEndProject></FrontEndProject>
    <Contact></Contact>
    <Profile> </Profile>
   </div>
  )
}

export default App

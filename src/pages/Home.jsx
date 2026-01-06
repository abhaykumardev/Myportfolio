import React from 'react'
import Hero from '../component/Hero'
import About from '../component/About'
import Skill from '../component/Skill'
import Project from '../component/Project'
import Contact from '../component/Contact'
import DSASection from '../component/Dsasection'
import LeetCodeStats from '../component/Leetcodestats'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      
      <DSASection/>
      <LeetCodeStats/>
      <Contact/>
    </div>
  )
}

export default Home

import React from 'react'
import Hero from '../component/Hero'
import About from '../component/About'
import Skill from '../component/Skill'
import Project from '../component/Project'
import Contact from '../component/Contact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home

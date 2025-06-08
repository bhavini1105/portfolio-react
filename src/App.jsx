import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import Header from './Components/Header'
import Home from './Components/Home'
import './App.css'
import Education from './Components/Education'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'


function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/'
        element={ <Home/> }
         />

         <Route path='/education'
         element= { <Education/> }
         />
        
         <Route path='/about'
         element= { <About/> }
         />
         
         <Route path='/skills'
         element= { <Skills/> }
         />

         <Route path='/projects'
         element={ <Projects/> }
          />

        <Route path='/contact' 
        element ={ <Contact/> }
        />

      </Routes>

    </>
  )
}

export default App

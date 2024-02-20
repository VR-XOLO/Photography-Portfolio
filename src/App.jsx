import { useState } from 'react'
import './App.css'
import Header  from './component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Wedding from "./Pages/Wedding/Wedding"
import PreWedding from './Pages/PreWedding/PreWedding'
import Fashion from './Pages/Fashion/Fashion'
import BabyAndMaternity from './Pages/BabyAndMaternity/BabyAndMaternity'
import Event from './Pages/Event/Event'
function App() {


  return (
    <>
    <BrowserRouter >
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/wedding'   element={<Wedding />} />
      <Route path='/event'   element={<Event />} />
      <Route path='/preWedding'   element={<PreWedding />} />
      <Route path='/fashionAndPortraits'   element={<Fashion />} />
      <Route path='/babyAndMaternity'   element={<BabyAndMaternity />} />
      <Route path='/contact'   element={<Contact />} />
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App

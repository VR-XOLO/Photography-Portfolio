import { useRef, useState } from 'react'
import './App.css'
import Header  from './component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Wedding from "./Pages/Wedding/Wedding"
import PreWedding from './Pages/Architecture/Architecture'
import Fashion from './Pages/Fashion/Fashion'
import BabyAndMaternity from './Pages/BabyAndMaternity/BabyAndMaternity'
import Event from './Pages/Event/Event'
import Ecommerce from './Pages/Ecommerce/Ecommerce'
import ContactUs from './component/ContactUs'
import Footer from './component/Footer'
function App() {

  const ContactScroll = useRef("")
  
  const handleScroll = ()=>{
     ContactScroll?.current.scrollIntoView({
      behavior : "smooth"
     })
  }
  return (
    <>
    <BrowserRouter >
    <Header handleScroll={handleScroll} />
    <Routes>
      <Route path='/' element={<Home ContactScroll={ContactScroll} />} />
      <Route path='/about' element={<About ContactScroll={ContactScroll} />} />
      <Route path='/wedding'   element={<Wedding ContactScroll={ContactScroll} />} />
      <Route path='/event'   element={<Event  ContactScroll={ContactScroll} />} />
      <Route path='/architecturePhotography'   element={<PreWedding   ContactScroll={ContactScroll} />} />
      <Route path='/fashionAndPortraits'   element={<Fashion   ContactScroll={ContactScroll}/>} />
      <Route path='/babyAndMaternity'   element={<BabyAndMaternity   ContactScroll={ContactScroll}/>} />
      <Route path='/Ecommerce'   element={<Ecommerce ContactScroll={ContactScroll} />} />
    </Routes>
    <div className="scroll" ref={ContactScroll} >
     <ContactUs  />
     </div>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

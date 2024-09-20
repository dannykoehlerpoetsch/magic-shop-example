import { useState } from 'react'
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import Footer from "./components/Footer/Footer"
import {BrowserRouter as Router} from "react-router-dom"

import './App.css'

function App() {
 

  return (
    <Router>
     <Header />
     <main>
     <Layout />
     </main>
     <Footer />
    </Router>
  )
}

export default App

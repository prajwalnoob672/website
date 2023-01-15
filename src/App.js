import React from 'react'
import VAR from './component/sidebar/sidebar'
import Home from './component/Home/home'
import Photo from './component/Photos/photo'
import Contact from './component/Contact/contact'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
      <VAR/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/photo' element={<Photo/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App
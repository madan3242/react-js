import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import SearchApp from './SearchApp'
import SearchAxios from './SearchAxios'


let App = () => {
  return (
    <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/searchlist' element={<SearchApp />} />
            <Route path='/searchaxios' element={<SearchAxios />} />
          </Routes>

        </Router>
    </div>
  )
}

export default App
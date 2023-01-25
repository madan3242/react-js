import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuestionDetail from './features/QuestionDetail/QuestionDetail'
import Questions from './features/Questions/Questions'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Questions />} />
        <Route path='/question/:id' element={<QuestionDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
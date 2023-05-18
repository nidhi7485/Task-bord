import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import List from './components/List'
import RegisForm from './components/RegisForm'

import LoginForm from './components/LoginForm'

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/list' element={<List />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App

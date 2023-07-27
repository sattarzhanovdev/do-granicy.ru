import React from 'react'
import { Components } from './components'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Pages } from './pages'

const App = () => {
  return (
    <div>
      <header>
        <Components.Navbar />
      </header>
      <main>
        <Routes>
          <Route 
            path='/'
            element={<Pages.Main />}
          />
          <Route
            path='/news/'
            element={<Pages.News />}
          />
          <Route
            path='/:title/'
            element={<Pages.More />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App

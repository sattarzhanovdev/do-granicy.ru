import React from 'react'
import { Components } from './components'
import './App.scss'

const App = () => {
  return (
    <div>
      <header>
        <Components.Navbar />
      </header>
      <main>
        <Components.Banner />
        <Components.Request />
        <Components.Services />
        <Components.Contact />
        <Components.Quaranty />
        <Components.Steps />
        <Components.Reviews />
        <Components.Contacts />
      </main>
    </div>
  )
}

export default App
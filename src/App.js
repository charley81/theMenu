import React, { useState } from 'react'
import Menu from './components/menu'
import Title from './components/title'
import data from './data'

function App() {
  const [menu, setMenu] = useState(data)

  return (
    <div className="App">
      <Title />
      <Menu menu={menu} />
    </div>
  )
}

export default App

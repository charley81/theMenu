import React, { useState } from 'react'
import Categories from './components/categories'
import Menu from './components/menu'
import Title from './components/title'
import data from './data'

const menuCategories = ['all', ...new Set(data.map(item => item.category))]

function App() {
  const [menu, setMenu] = useState(data)
  /* eslint-disable */
  const [categories, setCategories] = useState(menuCategories)

  const filterItem = category => {
    if (category === 'all') {
      setMenu(data)
      return
    }

    const newItems = data.filter(item => item.category === category)
    setMenu(newItems)
  }

  return (
    <div className="App">
      <Title />
      <Categories categories={categories} filterItem={filterItem} />
      <Menu menu={menu} />
    </div>
  )
}

export default App

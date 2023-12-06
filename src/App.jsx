import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Button from './component/Button/Button'
import Card from './component/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Button>Sort By Date</Button>
      <Card></Card>
      <Button>See More</Button>
    </>
  )
}

export default App

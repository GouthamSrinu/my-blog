import { useState } from 'react'
import './App.css'
import BlogHome from './components/Blog/BlogHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BlogHome></BlogHome>
    </>
  )
}

export default App

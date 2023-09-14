
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/blogs/Blogs'
import BookMarks from './components/blogs/BookjMarks'

function App() {
  const [data, setData] = useState([])
  const [readTime, setReadTime] = useState(0);


  const handleReadTime = time => {
    const newReadTime = readTime + time;
    setReadTime(newReadTime)
  }


  const handleButton = (blog) => {
    const newBookMarks = [...data, blog]
    setData(newBookMarks)
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex'>
        <Blogs handleButton={handleButton} handleReadTime={handleReadTime}></Blogs>
        <BookMarks bookMarks={data} readTime={readTime}></BookMarks>
      </main>
    </>
  )
}


export default App


import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/blogs/Blogs'
import BookMarks from './components/blogs/BookjMarks'

function App() {

  return (
    <>
      <Header></Header>
      <main className='md:flex'>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </main>
    </>
  )
}

export default App

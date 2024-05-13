import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import VisiMisiPage from './pages/VisiMisiPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/visi-misi' element={<VisiMisiPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Todos from './pages/todos';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

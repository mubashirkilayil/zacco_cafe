import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Index from './pages/index';
import PageNotFound from './pages/PageNotFound';
import Menu from './pages/Menu';
const App = () => {
  return (
    <>    
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    </> 
  )
}

export default App
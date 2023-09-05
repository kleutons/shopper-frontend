import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/header';
import HomePage from './Pages/Home/homePage';
import ProductsPage from './Pages/Products/products';


function App() {
  return (
    <>
    <Header/>
    <main className='container'>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<HomePage/>} />
          <Route path='/products' element={<ProductsPage/>} />

        </Routes>
      </BrowserRouter>
    </main>
    </>
  );
}

export default App;

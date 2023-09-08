import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/header';
import HomePage from './Pages/Home/homePage';
import ProductsPage from './Pages/Products/products';
import { Toaster } from './Components/Toaster';
import Footer from './Components/Footer/footer';


function App() {
  return (
    <>
    <Toaster />
    <Header/>
    <main className='container'>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<HomePage/>} />
          <Route path='/products' element={<ProductsPage/>} />

        </Routes>
      </BrowserRouter>
    </main>
    <Footer />
    </>
  );
}

export default App;

/**
 * *import 
 */

//import BrowserRouter, Routes, Route, Navigate dari react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
//import halaman yang diperlukan untuk ditampilkan pada route tertentu
import Dashboard from "./pages/Dashboard"
import Contact from "./pages/Contact"
import ProductDetail from "./pages/ProductDetail"
import Product from "./pages/Product"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/**
           * <Navigate/> merupakan component dari react-router-dom yang berfungsi untuk langsung menavigasi user
           * Ketika mengunjungi route "/" user akan langsung diarahkan ke "/dashboard"
           */}
          <Route path="/" element={<Navigate to={"/dashboard"} />} />
          {/**
            * Ketika berada di route "/dashboard", maka halaman <Dashboard/> akan tampil
            */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" >
            {/**
             * index pada route menyesuaikan dengan parent route nya
             * jika index memiliki parent route "/product", maka index setara dengan "/product/"
             * jika index memiliki parent route "/dashboard", maka index setara dengan "/dashboard/"
             */}
            <Route index element={<Product />} />
            {/**
             * nested route sederhananya adalah route di dalam route
             * code dibawah menandakan adanya route "detail/:idproduct" setelah route "product"
             * sehingga untuk mengakses ProductDetail harus melalui "/product/detail/:idProduct"
             * ":/idProduct" disebut dengan url parameter
             * url parameter memungkinkan untuk membuat route yang bersifat dinamis sehingga bisa diatur dari sisi user
             */}
            {/**
              * untuk menguji url parameter, coba kunjungi route /product/detail/1287346512746
              * setelah /detail masukan karakter atau angka bebas "/detail/123ufyugyy"
              */}
            <Route path="detail/:idProduct" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

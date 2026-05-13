import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Categories from './Components/Categories/Categories';
import Notfound from './Components/Notfound/Notfound';
import CounterContextProvider from './Context/counterContext';
import { useContext, useEffect } from 'react';
import { UserContext } from './Context/userContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetailes from './Components/ProductDetailes/ProductDetailes';
import CartContexProvider from './Context/cartContext';
import { Toaster } from 'react-hot-toast';






let routers = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: 'products', element: <ProtectedRoute><Products /> </ProtectedRoute> },
      { path: 'cart', element: <ProtectedRoute><Cart /> </ProtectedRoute> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'category', element: <ProtectedRoute><Categories /></ProtectedRoute> },
      { path: 'productDetailes/:id', element: <ProtectedRoute><ProductDetailes /></ProtectedRoute> },
      { path: '*', element: <Notfound /> },
    ]
  }
])


function App() {
  let { setUserToken } = useContext(UserContext)

  useEffect(() => {
    if (localStorage.getItem('userToken') !== null) {
      setUserToken(localStorage.getItem('userToken'))
    }

  }, [])
  // return (

  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return <CartContexProvider>
    <CounterContextProvider>
      <RouterProvider router={routers}></RouterProvider>
    </CounterContextProvider>
    <Toaster />

  </CartContexProvider>

}

export default App;

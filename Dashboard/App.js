import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Loginpg from './Component/Loginpg';
import MainHome from './MainHome';
import SignupPage from './Component/SignUpPage';

function App() {
  return (
    <Router>
      <Routes>
      {/* <Topbar /> */}
          <Route path="/" element={<Loginpg/>} />
          <Route path="/signup" element={<SignupPage/>} />
      </Routes>
      <div className="container">
        <Routes>
        {/* <Sidebar /> */}
          <Route path="/home" element={<MainHome/>} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

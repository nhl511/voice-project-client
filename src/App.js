import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
const App = () => {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: (
            <Register title={"TẠO TÀI KHOẢN GIỌNG ĐỌC"}>
              <div className="col-item">
                <span>Email*</span>
                <input type="email" placeholder="Nhập Email của bạn" />
              </div>
              <div className="col-item">
                <span>Mật Khẩu*</span>
                <input type="password" placeholder="Nhập mật khẩu" />
              </div>
              <div className="col-item">
                <span>Nhập lại mật khẩu*</span>
                <input type="password" placeholder="Nhập lại mật khẩu" />
              </div>
              <div className="col-item">
                <span>Số điện thoại*</span>
                <input type="text" placeholder="Nhập số điện thoại" />
              </div>
              <div className="col-item">
                <span>Họ và tên*</span>
                <input type="text" placeholder="Nhập họ và tên" />
              </div>
              <div className="col-item">
                <span>Địa chỉ*</span>
                <input type="text" placeholder="Nhập địa chỉ" />
              </div>
              <div className="col-item">
                <span>Ngày sinh*</span>
                <input type="text" placeholder="Nhập ngày" />
              </div>
              <div className="col-item">
                <span>Giới tính*</span>
                <select name="" id="">
                  <option value="">Nữ</option>
                  <option value="">Nam</option>
                </select>
              </div>
            </Register>
          ),
        },
        {
          path: "/register2",
          element: (
            <Register title={"TẠO TÀI KHOẢN TUYỂN DỤNG"}>
              <div className="col-item">
                <span>Email*</span>
                <input type="email" placeholder="Nhập Email của bạn" />
              </div>
              <div className="col-item">
                <span>Mật Khẩu*</span>
                <input type="password" placeholder="Nhập mật khẩu" />
              </div>
              <div className="col-item">
                <span>Nhập lại mật khẩu*</span>
                <input type="password" placeholder="Nhập lại mật khẩu" />
              </div>
              <div className="col-item">
                <span>Số điện thoại*</span>
                <input type="text" placeholder="Nhập số điện thoại" />
              </div>
              <div className="col-item">
                <span>Tên doanh nghiệp*</span>
                <input type="text" placeholder="Nhập tên doanh nghiệp" />
              </div>
              <div className="col-item">
                <span>Địa chỉ*</span>
                <input type="text" placeholder="Nhập địa chỉ" />
              </div>
            </Register>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

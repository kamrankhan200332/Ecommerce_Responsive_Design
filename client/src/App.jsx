import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Store from "./pages/Store/Store";
import Blog from "./pages/Blog/Blog";
import Page from "./pages/Page/Page";
import Contact from "./pages/Contact/Contact";
import SingleStore from "./pages/SingleStore/SingleStore";
import Signup from "./pages/SignUp/Signup";
import Login from "./pages/Login/Login";
import Protected from "./components/Protected/Protected";
import Error from "./pages/Error/Error";

const App = () => {
  const isAuth = true;
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/store"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <Store />
                </Protected>
              }
            />
            <Route path="/store/single/:id" exact element={<SingleStore />} />
            <Route path="/about" exact element={<About />} />
            <Route
              path="/blog"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <Blog />
                </Protected>
              }
            />
            <Route path="/page" exact element={<Page />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/*" exact element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

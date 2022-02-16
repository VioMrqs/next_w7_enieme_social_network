import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import "./style.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cookies from "js-cookie";

const App = () => {
  console.log(store.getState())
  store.subscribe(() => console.log(store.getState()));

  return (
    <div className="main-container">
      <Provider store={store}>
        <Router>
          <Navbar />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </Router>
      </Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

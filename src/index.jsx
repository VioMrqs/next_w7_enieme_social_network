import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import User from "./pages/User";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import "./style.scss";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  // console.log(store.getState())
  // store.subscribe(() => console.log(store.getState()));
  // const log = useSelector((state) => state)
  // console.log(log)

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
              <Route path="/users">
                <Route path="/users/:id" element={<User />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Router>
      </Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

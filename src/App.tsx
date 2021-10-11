import { BrowserRouter as Router } from "react-router-dom";
import AppNav from "./router/nav";
import AppRouter from "./router";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <Router>
    <ToastContainer />
    <AppNav />
    <AppRouter />
  </Router>
);

export default App;

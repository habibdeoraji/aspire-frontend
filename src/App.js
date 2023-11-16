import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Payments from "./pages/Payments";
import Credit from "./pages/Credit";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="cards" element={<Cards />} />
          <Route path="payments" element={<Payments />} />
          <Route path="credit" element={<Credit />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

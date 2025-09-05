import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Region from "./pages/Region/Region";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/region/:regionName" element={<Region />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import { Home } from "./pages/home/index";
import { Dogs } from "./pages/dogs/index";
import { Cats } from "./pages/cats/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/dogs" element={<Dogs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

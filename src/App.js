import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/instructors" element={<Instructors />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="*" element={<NotFound />} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

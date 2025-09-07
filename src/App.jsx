
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact'
import Footer from "./components/common/Footer";
import Team from './pages/Team';
import Register from './pages/Register';
import Blog from './pages/Blog';
import ThankYou from './pages/ThankYou';
import { initializeScrollConfig } from './utils/routerConfig.js'
import ScrollHandler from "./utils/scrollHandler.js";

initializeScrollConfig();

function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
             <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

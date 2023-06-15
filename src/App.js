import "./App.css";
import HomePage from "./Pages/HomePage";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <HomePage />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

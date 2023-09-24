import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Works from "./Components/Works";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home />
      <About />
      <Skill />
      <Works />
      <Contact />
    </div>
  );
}

export default App;

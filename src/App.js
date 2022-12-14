import {Routes, Route} from "react-router-dom";
import About from "./component/About";
import Blog from "./component/Blog";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Team from "./component/Team";

function App() {
  return (
    <>
    <Navbar />

    <Routes >
      <Route path="/" element={ <Home /> } />
      <Route path="/blog" element={ <Blog /> } />
      <Route path="/team" element={ <Team /> } />
      <Route path="/about" element={ <About /> } />
    </Routes>
    </>
  );
}

export default App;

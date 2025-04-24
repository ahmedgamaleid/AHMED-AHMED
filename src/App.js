import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Layout from './component/Layout';
import Contactus from './component/Contactus';
import Projects from './component/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contactus" element={<Contactus />} />
              <Route path="/Projects" element={<Projects />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

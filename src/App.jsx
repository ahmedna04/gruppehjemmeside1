import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forside from "./sider/forside";
import Medlem from "./sider/medlem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/medlem/:id" element={<Medlem />} />
      </Routes>
    </Router>
  );
}

export default App;

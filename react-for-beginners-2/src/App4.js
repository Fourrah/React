import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App4() {
  return <Router>
    <Routes>
      <Route path="/movie" element={<Detail />} />
      <Route path="/" element={<Home />} />
      <Route path="/moive/:id" element={<Detail />} />
    </Routes>
  </Router>
}

export default App4;
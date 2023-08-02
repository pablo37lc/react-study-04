import {
  BrowserRouter as Router,
  Routes, //6버전 이후 Routes 로 변경
  Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

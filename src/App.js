import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about"></Route>
        <Route path="/project"></Route>
      </Routes>
    </>
  );
}

export default App;

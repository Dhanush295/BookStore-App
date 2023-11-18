import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Createbook } from "./components/Createbook";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Update } from "./components/Update";
function App() {
  

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/createbook" element={<Createbook/>}></Route>
          <Route path="/update/:id" element={<Update/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

import { BrowserRouter, Routes , Route } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
function App(){
  return(
    <>
    <h1>Im App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/reg" element={<Register/>} />
          <Route path="/h" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;

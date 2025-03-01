import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import AuthCallback from "./Pages/AuthCallback";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Auth/>}></Route>
          <Route path="/auth/token/*" element={< AuthCallback />}></Route>
          <Route path="/home" element={< Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

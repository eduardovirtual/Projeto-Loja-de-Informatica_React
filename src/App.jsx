import './App.css'
import './index.css'
import './contents/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from "./pages/Home2";
import Produtos2 from "./pages/Produtos2";
import Servicos2 from "./pages/Servicos2";
import Contatos2 from "./pages/Contatos2";
// import NoPage2 from "./pages/NoPage2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home2 />} />
          <Route path="produtos" element={<Produtos2 />} />
          <Route path="servicos" element={<Servicos2 />} />
          <Route path="contatos" element={<Contatos2 />} />
          {/* <Route path="*" element={<NoPage2 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

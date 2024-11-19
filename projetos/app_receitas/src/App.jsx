import { Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Receitas from "./pages/receitas"
import Perfil from "./pages/perfil"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/receitas" element={<Receitas />} />
      <Route path="/perfil" element={<Perfil />}/>
      <Route path="/favoritos" />
      <Route path="/concluidos" />

      <Route path="/*" />
    </Routes>
  )
}

export default App
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./layout/Layout"
import EditarProducto from "./paginas/EditarProducto"
import Inicio from "./paginas/Inicio"
import NuevoProducto from "./paginas/NuevoProducto"
import VerProducto from "./paginas/VerProducto"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productos" element={<Layout/>}> {/*siempre se va a mostrar el componente layout cuando entremos a /productos */}
          <Route index element={<Inicio/>}/> {/*cuando vaya a /productos se va a cargar el componente layout + el componente inicio */}
          <Route path="nuevo" element={<NuevoProducto/>} /> {/*con path añado una ruta a /productos. Cuando vaya a /productos/nuevo va a mostrar el componente Layout + NuevoProducto */}
          <Route path="editar/:id" element={<EditarProducto/>} />
          <Route path=":id" element={<VerProducto/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

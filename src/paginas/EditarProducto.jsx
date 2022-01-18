import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Formulario from "../components/Formulario"
import Spinner from "../components/Spinner"

const server = import.meta.env.VITE_API_URL


const EditarProducto = () => {

    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)

    const {id} = useParams()    //extraigo la id

    useEffect(() => {
        const obtenerProductoAPI = async () => {
            try {
                const url = `${server}/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setProducto(resultado)
            } catch (error) {
                console.log(error)
            }
            setCargando(!cargando)  //esta sintaxis cambia el estado del state al contrario de lo que tiene
        }
        obtenerProductoAPI()
    }, [])

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900 dark:text-blue-300">Editar Producto</h1>
            <p className="mt-3 dark:text-white ">LLena los siguientes campos para agregar modificar el producto</p>
            {cargando ? <Spinner/> : !producto.nombre ? <p className="p-4 font-bold dark:text-white">No existe el producto a editar</p> : (
                <Formulario
                    producto={producto}
                    cargando={cargando}
                />
            )
            }
        </>
    )
}

export default EditarProducto

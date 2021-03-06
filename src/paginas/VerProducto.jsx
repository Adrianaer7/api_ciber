import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinner"

const server = import.meta.env.VITE_API_URL

const VerProducto = () => {

    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)  //mientras esté consiguiendo los datos, muestro el spinner

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
        cargando ? <Spinner/> : Object.keys(producto).length === 0 ? <p className="text-3xl font-bold text-center dark:text-white">No existe este producto</p> : ( //cargando pasa a true cuando cargo el componente. Si es true, muestro el spinner. Cuando termina de cargar el compontente, paso cargando a false, si es false, me fijo si existe el id al que quiero acceder y muestro los datos si existe
            <div className="bg-white dark:bg-gray-900 w-3/4 rounded-md shadow-md p-3 mx-auto">
                <h1 className="font-black text-4xl text-blue-900 dark:text-blue-300 text-center">{producto.nombre}</h1>
                    
                <p className="text-2xl text-gray-600 dark:text-gray-50 mt-10">
                    <span className="text-gray-800 dark:text-white uppercase font-bold">Nombre: </span>{producto.nombre}
                </p>
                <p className="text-2xl text-gray-600 dark:text-gray-50 mt-6">
                    <span className="text-gray-800 dark:text-white uppercase font-bold">Empresa: </span>{producto.empresa}
                </p>
                <p className="text-2xl text-gray-600 dark:text-gray-50 mt-6">
                    <span className="text-gray-800 dark:text-white uppercase font-bold">Email: </span>{producto.email}
                </p>
                {producto.telefono && (
                    <p className="text-2xl text-gray-600 dark:text-gray-50 mt-6">
                        <span className="text-gray-800 dark:text-white uppercase font-bold">Telefono: </span>{producto.telefono}
                    </p>
                )}
                {producto.notas && (
                    <p className="text-2xl text-gray-600 dark:text-gray-50 mt-6 break-words">   {/*break-words para que la palabra larga siga abajo y no desborde el div */}
                        <span className="text-gray-800 dark:text-white uppercase font-bold">Notas: </span>{producto.notas}
                    </p>
                )}
            </div>
        ) 
    )
}

export default VerProducto

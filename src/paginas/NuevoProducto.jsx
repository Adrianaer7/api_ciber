import Formulario from "../components/Formulario"

const NuevoProducto = () => {
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900 dark:text-blue-300">Nuevo Producto</h1>
            <p className="mt-3 dark:text-white ">LLena los siguientes campos para agregar un nuevo producto</p>
            <Formulario/>
        </>
    )
}

export default NuevoProducto

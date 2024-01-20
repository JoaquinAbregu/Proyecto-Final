import { Link } from "react-router-dom";
import { useState } from "react";

const Formulario = () => {
    
    const [nombre, setNombre] = useState('');
    const [numero, setNumero] = useState('');
    const [cabaña, setCabaña] = useState('');
    const [datos, setDatos] = useState([])
    const imprimirDatos = () => {
        console.log(`Los elementos que se cargaron son: ${nombre} ${numero} ${cabaña}`);
        alert(`Los elementos que se han cargado son: ${nombre} ${numero} ${cabaña}`)
        //Segunda forma de cargar los datis en el localStorage
        //Cargamos el arreglo de objeto con los datos de la persona
        setDatos([...datos, {nombre, numero, cabaña}])
        //Cargamos el arreglo en el localStorage
        window.localStorage.setItem('datos', JSON.stringify(datos))

        limpiarDatos()
    }

    const limpiarDatos = () => {
        setNombre('');
        setNumero('');
        setCabaña('');
    }

    return (
        <>
            <form>
                <div className="mb-3">
                    <label className="form-label">Ingrese su Nombre</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="nomb" 
                    aria-describedby="emailHelp" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Numero de la cabaña que alquilo</label>
                    <input 
                    type="number" 
                    className="form-control" 
                    id="numero" 
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ubicacion de la cabaña que alquilo</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="cabaña" 
                    value={cabaña}
                    onChange={(e) => setCabaña(e.target.value)}
                    />
                </div>
                <div className="mb-3 text-center">
                        <button onClick= { imprimirDatos } type="button" className="btn btn-success w-50">Login</button>
                </div>
                <div className="mb-3 text-center">
                    <button onClick={ limpiarDatos } className="btn btn-danger w-75">Reset</button>
                </div>
            </form>

            <Link to= '/'>
                <h2 className="text-center mb-5 mt-5">
                    Volver a la Página Principal
                </h2>
            </Link>
        </>
    )
}

export default Formulario;
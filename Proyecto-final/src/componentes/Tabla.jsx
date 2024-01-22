import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";





function Usuarios() {

    const [usuario, setUsuario] = useState('')
    const [ datos, setDatos ] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {

        //verificamos si existe una sessión en la app
        if(window.sessionStorage.getItem('usuario')){

            //1. Setea o asigna la sesión del usuario
            setUsuario(usuario);

            //2. Leer los usuarios desde el localstorage
            setDatos(JSON.parse(window.localStorage.getItem('datos')));

            console.log(datos);

        }else{
            alert('Usuario NO logueado');
            navigate('/Error');
        }

    },[]);



    return (
        <>
        <div id='Tabla'>
            <h1 className="text-center mt-5 mb-05">
                Datos del Alquiler
            </h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Pedido</th>
                        <th>Nombre</th>
                        <th>Numero cabaña</th>
                        <th>Ubicacion</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Por cada dato que ingrese me pasa 2 datos, el usuario y el indice*/}
                    {datos.map((u, index) => (
                    <tr key={index}>
                        <td>{ index + 1}</td>
                        <td>{ u.nombre }</td>
                        <td>{ u.numero }</td>
                        <td>{ u.cabaña }</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </div>
        </>
    );
}

export default Usuarios;

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";



const Alquileres = () => {
    
    const [usuario, setUsuario] = useState('')

    const navigate = useNavigate();

    useEffect (() => {
        //Verificamos si existe una session en la aplicacion 
        if(window.sessionStorage.getItem('usuario')){
            //Lo cargamos en el usuario
            setUsuario(usuario);
        }else{
            alert('Usuario NO logueado')
            navigate('/Error')
        }
    },[]);
    return(
        <h1>
            Bienvenido a la pagina para alquilar
        </h1>
    )
}

export default Alquileres;
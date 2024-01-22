import'../css/Login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigate = useNavigate();


    const login = () =>{

        if(email == '' || password == ''){
            alert('Debe ingresar un email y un password');
            limpiarDatos();
            return;
        }

        if(email == 'cliente@gmail.com' && password == 'cliente'){
            alert('Bienvenido!!!');

            //Guardar la sesión del usuario
            window.sessionStorage.setItem('usuario', email);

            navigate('/alquileres');

        }else{
            alert('Email o Password incorrectos');
            navigate('/Error')
        }

        limpiarDatos();

    }

    function limpiarDatos() {
        setEmail('');
        setPassword('');
    }


    return (

        <>
        <div className='login'>
            <h1 className="text-center">
                Porfavor,complete el Login.
            </h1>

            <div className="container">
                <form id="formLogin">
                    <div className="mb-3 text-center" id='bordes'>
                        <label className="form-label" id='labelo'>Email </label>
                        <input 
                            type="email" 
                            className="form-control w-100" 
                            value = { email }
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="mb-3 text-center" id='bordes'>
                        <label className="form-label" id='labelo'>Password </label>
                        <input 
                            type="password" 
                            className="form-control w-100"  
                            value = { password }
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="mb-3 text-center" id='bordes'>
                        <button onClick={ login } type="button" className="btn btn-success w-100">Login</button>
                    </div>
                    <div className="mb-3 text-center" id='bordes'>
                        <button onClick={ limpiarDatos } className="btn btn-danger w-100">Reset</button>
                    </div>
                </form>
            </div>

            <Link to="/">
                <h2 className="text-center mt-5 mb-5 w-100">
                    Volver a la Página Principal
                </h2>
            </Link>
        </div>

        </>
    )
}


export default Login;
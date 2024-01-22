import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import '../css/Alquilar.css'

const Alquileres = () => {

    const [usuario, setUsuario] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        //Verificamos si existe una session en la aplicacion 
        if (window.sessionStorage.getItem('usuario')) {
            //Lo cargamos en el usuario
            setUsuario(usuario);
        } else {
            alert('Usuario NO logueado')
            navigate('/Error')
        }
    }, []);

    const alerta = () => {
        alert('Numero de lote: 38')
    }

    const alerta2 = () => {
        alert('Numero de lote: 42')
    }

    const alerta3 = () => {
        alert('Numero de lote: 18')
    }

    const alerta4 = () => {
        alert('Numero de lote: 22')
    }


    return (

        <> 
        <div className="Alquiler">
            <h1 id="tituloAlq">
                Bienvenido a la pagina para alquilar cabañas
            </h1>
            <section className="fuentePadre">
                <div id="producto">
                    <h3>Cabaña Simple</h3>
                    <figure>
                        <Link to='/formulario'>
                            <img id="imagencab" src="https://th.bing.com/th/id/OIP.8PTfEgxuUyQ-wsLc7uq9YAHaHa?rs=1&pid=ImgDetMain" alt="" />
                        </Link>
                        <figcaption>Cabaña Simple</figcaption>
                    </figure>
                    <h4>Descripcion de la cabaña</h4>
                    <p id='p'>
                        Cabaña con 2 dormitorios, 1 baño, 1 cocina y 1 pequeño jardin. Ubicada en Rio Ceballo.
                    </p>
                    <p id="precio">
                        Precio: $45.000 por dia
                    </p>
                    <button id="Button" type="button">
                        <Link to='/formulario' onClick={alerta}>
                            Alquilar
                        </Link>

                    </button>
                </div>

                <div id="producto">
                    <h3>Cabaña Mediana</h3>
                    <figure>
                        <Link to='/formulario'>
                            <img id="imagencaba" src="https://th.bing.com/th/id/R.7b6a41c2440d2ac7e6920db9f7574bf7?rik=TOCWug1yE16asQ&pid=ImgRaw&r=0" alt="" />
                        </Link>
                        <figcaption>Cabaña Mediana</figcaption>
                    </figure>
                    <h4>Descripcion de la cabaña</h4>
                    <p id='p'>
                        Cabaña con 2 dormitorios, 1 baño, 1 cocina, un pequeño living y 1 jardin mediano. Ubicada en Rio Cuarto.
                    </p>
                    <p id="precio">
                        Precio: $70.000 por dia
                    </p>
                    <button id="Button" type="button">
                        <Link to='/formulario' onClick={alerta2}>
                            Alquilar
                        </Link>
                    </button>
                </div>

                <div id="producto">
                    <h3>Cabaña Grande</h3>
                    <figure>
                        <Link to='/formulario'>
                            <img id="imagencabañ" src="https://th.bing.com/th/id/R.f723f2cdb39e6b8a50137a601d89dbc6?rik=wSRcKPLsU3FQRw&pid=ImgRaw&r=0" alt="" />
                        </Link>
                        <figcaption>Cabaña Grande</figcaption>
                    </figure>
                    <h4>Descripcion de la cabaña</h4>
                    <p id='p'>
                        Cabaña con 2 dormitorios, 2 baño, 1 cocina, 1 asador,  un living grande y 1 jardin con pileta. Ubicada en Carlos Paz.
                    </p>
                    <p id="precio">
                        Precio: $110.000 por dia
                    </p>
                    <button id="Button" type="button">
                        <Link to='/formulario' onClick={alerta4}>
                            Alquilar
                        </Link>
                    </button>
                </div>

                <div id="producto">
                    <h3>Cabaña Lujosa</h3>
                    <figure>
                        <Link to='/formulario'>
                            <img id="imagencabaña" src="https://casasrusticas.org/wp-content/uploads/2020/10/casas-americanas-cabanas-100-1024x973.jpg" alt="Cabaña lujosa" />
                        </Link>
                        <figcaption>Cabaña Lujosa</figcaption>
                    </figure>
                    <h4>Descripcion de la cabaña</h4>
                    <p id="p">
                        Cabaña con 3 dormitorios, 3 baño, 1 cocina, un living grande, un garage para 2 autos,  y 1 jardin grande con pileta. Servicio de limpieza diario incluido (en el caso de estar alquilando 5 o más dias). Ubicada en Carlos Paz.
                    </p>
                    <p id="precio">
                        Precio: $225.000 por dia
                    </p>
                    <button  id="Button" type="button">
                        <Link to='/formulario' onClick={alerta4}>
                            Alquilar
                        </Link>
                    </button>
                </div>
            </section>
        </div>
        </>
    )
}

export default Alquileres;
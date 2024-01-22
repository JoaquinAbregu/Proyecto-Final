import Tarjeta from "./Tarjetas";
import { useEffect, useState } from "react";





const Fetch = () => {
    const [ personaje, setPersonaje ] = useState([]); 


    useEffect(() => {
        fetch ('https://rickandmortyapi.com/api/character')
        //Si me responde bien el usuario, me transforma en json la respuesta para que la compu lo entienda
        .then(response => response.json())
        //Despues la respuesta se lo pasamos a setPersonaje para que me guarde la respuesta
        .then(response => setPersonaje(response.results))
        //Si no me responde el servidor, la base de datos, el usuario respondio mal, etc me salta error
        .catch (error => console.log(error))
    }, []);

    const imprimirApi = () => {
        console.log(personaje);
    }
    return(
        <>
        <h1>Bienvenido</h1>
        <div className="personajes">
        
        <h1 className="text-center mb-5 mt-5">
            Perosnajes de Rick and Morty 
        </h1>
        {/* caracter me lee y guarda todos los personajes que esta en fetch */}
        <Tarjeta characters= { personaje } /> 
        
        </div>
        </>
    )
}

export default Fetch;
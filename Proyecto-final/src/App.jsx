
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './componentes/Home'
import Navegador from './componentes/Navegador'
import Formulario from './componentes/Formulario'
import Alquileres from './componentes/Alquilar'
import Login from './componentes/Login'
import Error from './componentes/Error'
import Usuarios from './componentes/Tabla'
import Fetch from './componentes/Fetch'


function App() {
  return (
    <>
    <Navegador />

    <Routes>
      <Route path='/home' element= {<Home /> }/> 
      <Route path='*' element= {<Home />} />  
      <Route path='/formulario' element= {<Formulario />} />
      <Route path='/alquileres' element= {<Alquileres />} />
      <Route path='/login' element= {<Login />} />
      <Route path='/Error' element= {<Error />} />
      <Route path='/tabla' element= {<Usuarios />} />
      <Route path='/fetch' element= {<Fetch />} />
    </Routes>
    </>
  )
}

export default App

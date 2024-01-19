
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './componentes/Home'
import Navegador from './componentes/Navegador'
import Error from './componentes/Error'
/* import Formulario from './componentes/Formulario' */


function App() {
  return (
    <>
    <Navegador /> 

    <Routes>
      <Route path='Home' element= {<Home /> }/> 
      <Route path='*' element= {<Error />} />  
      {/* <Route  path='/formulario' element= {<Formulario />} /> */}
    </Routes>
    </>
  )
}

export default App

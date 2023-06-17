import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListadoDePacientes } from "./components/ListadoDePacientes"


function App() {
  

  return (
    <>
      <div className="container mx-auto mt-20">
          <Header/>

          <div className="mt-12 md:flex">
            <Formulario/>
            <ListadoDePacientes/>
          </div>
      </div>
      
    </>
  )
}

export default App

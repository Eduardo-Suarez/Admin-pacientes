import { Paciente } from "./Paciente"


export const ListadoDePacientes = () => {
  return (
    <>
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
            <h2 className="font-black text-3xl text-center ">Listado de Pacientes</h2>

            <p className="text-lg text-center mt-5 mb-10">Administra tus {""}<span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>

            <Paciente/>
            <Paciente/>
            <Paciente/>
        </div>
    </>
  )
}

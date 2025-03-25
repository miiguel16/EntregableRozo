import { ItemTitle } from "../../components/ItemTitles/ItemTitle";


export const Main = () => {
  return (
    < >
      <div className="bg-gray-500 h-full w-full flex flex-col justify-center items-center gap-3">
        <ItemTitle styles="text-2xl font-bold text-black m-xl" content="Bienvenido a mi taller evaluativo" />
        <h2 className='text-xl font-bold text-black m-xl'>En el menú superior puedes encontrar los 4 ejercicios puestos por el instructor</h2>
      </div>
    </>
  )
}
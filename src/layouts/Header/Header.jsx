import { Navbar } from "../Navbar/Navbar"


export const Header = () =>{
    return(
      <>
        <header className=" bg-slate-800 w-full h-23  flex flex-row flex-wrap justify-around items-center p-4 ">
          <h1 className="text-sky-600 font-extrabold text-2xl">Segundo entregable de Edwin Rozo</h1>
          <Navbar />
        </header>
      </>

    )

}


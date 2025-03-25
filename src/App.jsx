import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Class1 } from "./pages/Class1/Class1"
import { Class2 } from "./pages/Class2/Class2"
import { Class3 } from "./pages/Class3/Class3"
import { Class4 } from "./pages/Class4/Class4"
import { NotFound } from "./pages/NotFound/NotFound"
import { Header } from "./layouts/Header/Header"
import { Footer } from "./layouts/Footer/Footer"

export const App = () => {

  return (
    <>
      <Header/>
    <Routes> 
      <Route path="/" element={<Home />}/>
      <Route path="/Class1" element ={< Class1 />} />
      <Route path="/Class2" element ={< Class2 />} />
      <Route path="/Class3" element ={< Class3 />} />
      <Route path="/Class4" element ={< Class4 />} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
    <Footer/>
    
    </>    
  )

}

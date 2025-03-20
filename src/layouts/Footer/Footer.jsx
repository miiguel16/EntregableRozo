import { References } from "../References/References"
import { 
    FaFacebook, 
    FaInstagram, 
    FaYoutube, 
    FaLinkedin 
} from "react-icons/fa"

export const Footer =()=>{
    return(
        <>
            <footer className="bg-blue-950 w-full h-20 flex flex-row justify-center items-center">
                <References
                    styleReference="list-none pr-4"
                    contentReference="Hecho por: Miguel Chilito"
                />
                <References
                    styleReference="list-none pr-4"
                    contentReference={<FaFacebook />}
                />
                <References
                    styleReference="list-none pr-4"
                    contentReference={<FaInstagram />}
                />
                <References
                    styleReference="list-none pr-4"
                    contentReference={<FaYoutube />}
                />
                <References
                styleReference="list-none pr-4"
                contentReference={<FaLinkedin />}
                />
            </footer>
        </>
    )
}
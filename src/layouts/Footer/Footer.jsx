import { ItemNav } from "../../components/ItemNav"

import {
    FaFacebook,
    FaWhatsapp,
    FaGithub,
    FaLinkedin
} from "react-icons/fa"

export const Footer = () => {
    return (
        <footer className="bg-blue-950 w-full h-24 flex flex-row flex-wrap justify-center items-center mt-auto">
            <ItemNav contentItem="Hecho por: Miguel Chilito" myStyle={"list-none pr-4 text-white"} />

            <ItemNav
                contentItem={<FaFacebook className="text-white hover:text-blue-500 transition duration-300" />}
                myStyle={"list-none pr-4"}
                routes={"https://www.facebook.com/miguel.chilitoo/about?locale=es_LA"}
            />

            <ItemNav
                contentItem={<FaWhatsapp className="text-white hover:text-green-500 transition duration-300" />}
                myStyle={"list-none pr-4"}
                routes={"https://wa.me/573164983010"}
            />

            <ItemNav
                contentItem={<FaGithub className="text-white hover:text-gray-600 transition duration-300" />}
                myStyle={"list-none pr-4"}
                routes={"https://github.com/miiguel16"}
            />

            <ItemNav
                contentItem={<FaLinkedin className="text-white hover:text-blue-700 transition duration-300" />}
                myStyle={"list-none pr-4"}
                routes={"https://www.linkedin.com/in/miguel-chilito-9a57132b9/"}
            />
        </footer>
    )
}

import { ItemNav } from "../../components/ItemNav";

export const Navbar = ( ) => {
    return (
        <>
        <nav>
            <ul className="flex flex-row flex-wrap ">
                <ItemNav
                    linksNav="home"
                    myStyle='pr-6 text-zinc-50'
                    contentItem="Home"
                    routes="/"

                />
                <ItemNav
                    linksNav="Class1"
                    myStyle='pr-6 text-zinc-50'
                    contentItem="Pregunta 1"
                    routes="/Class1"
                />
                <ItemNav
                    linksNav="Class2"
                    myStyle='pr-6 text-zinc-50'
                    contentItem="Pregunta 2"
                    routes="/Class2"
                />
                <ItemNav
                    linksNav="Class3"
                    myStyle='pr-6 text-zinc-50'
                    contentItem="Pregunta 3"
                    routes="/Class3"
                />
                <ItemNav
                    linksNav="Class4"
                    myStyle='pr-6 text-zinc-50'
                    contentItem="Pregunta 4"
                    routes="/Class4"
                />
            </ul>
        </nav>
        </>
    )
}


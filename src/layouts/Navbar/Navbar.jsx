
import { ItemNav } from "../../components/ItemNav";

export const Navbar = () => {
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
                        contentItem="Modo oscuro y claro"
                        routes="/Class1"
                    />
                    <ItemNav
                        linksNav="Class4"
                        myStyle='pr-6 text-zinc-50'
                        contentItem="Contador"
                        routes="/Class4"
                    />
                    <ItemNav
                        linksNav="Class3"
                        myStyle='pr-6 text-zinc-50'
                        contentItem="Likes, Dislikes"
                        routes="/Class3"
                    />
                    <ItemNav
                        linksNav="Class2"
                        myStyle='pr-6 text-zinc-50'
                        contentItem="Cambio color"
                        routes="/Class2"
                    />
                </ul>
            </nav>
        </>
    )
}


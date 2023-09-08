import NavMenu from "../NacMenu/navMenu"
import { Header as HeaderComponent } from "./style"

export default function Header(){
    return(
        <HeaderComponent>
            <div className="container">
                <a href="./">
                <img src="logo.webp" alt="Logo da Shopper"/>
                </a>
                <NavMenu />
            </div>
        </HeaderComponent>
    )
}
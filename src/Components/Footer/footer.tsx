import { FooterContainer } from "./style";
import NavMenu from "../NacMenu/navMenu";

export default function Footer(){
    return(
        <FooterContainer>
             <div className="container">
                <NavMenu />
                <div>
                    © 2023 - Made with 💙 by 
                    <a href="http://kleuton.dev" target="_blank" rel="noreferrer" >
                        @kleutons
                    </a>
                </div>
             </div>
        </FooterContainer>
    )
}
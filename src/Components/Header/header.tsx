import { Header as HeaderComponent } from "./style"

export default function Header(){
    return(
        <HeaderComponent>
            <div className="container">
                <img src="logo.webp" alt="Logo da Shopper"/>
                <nav>
                    <ul>
                        <li><a href="./">Atualizar Preços</a></li>
                        <li><a href="/products">Exibir Produtos</a></li>
                    </ul>
                </nav>
            </div>
        </HeaderComponent>
    )
}
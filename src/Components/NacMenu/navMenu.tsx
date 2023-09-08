
const menuMain = [
    {
        name: "Atualizar Preços",
        link: "/"
    },
    {
        name: "Exibir Produtos",
        link: "/products"
    }
]

export default function NavMenu(){
    return(
        <nav>
            <ul>
                {menuMain.map(menu => {
                    return(
                            <li key={menu.name}>
                                <a href={menu.link}>{menu.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
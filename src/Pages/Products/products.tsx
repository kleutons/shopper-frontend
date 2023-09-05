
const products = [
    {
        code:'16',
        name: 'Azeite',
        cost_price: 18.44,
        sale_price: 20.44
    },
    {
        code:'18',
        name: 'BEBIDA ENERGÉTICA',
        cost_price: 8.09,
        sale_price: 8.99
    },
    {
        code:'19',
        name: 'ENERGÉTICO  RED BULL ENERGY ',
        cost_price: 6.56,
        sale_price: 7.29
    }

];

const productsKit = [
    {
        code:'1000',
        name: 'BEBIDA ENERGÉTICA VIBE 2L - 6 UNIDADES',
        cost_price: 48.54,
        sale_price: 53.94,
    },
    {
        code:'1010',
        name: 'KIT ROLO DE ALUMINIO + FILME PVC WYDA',
        cost_price: 8.09,
        sale_price: 8.99,
    },
    {
        code:'1020',
        name: 'SUPER PACK RED BULL VARIADOS - 6 UNIDADES',
        cost_price: 6.56,
        sale_price: 7.29,
    }

];

interface ProductsPageProps {

}

export default function ProductsPage(props : ProductsPageProps){

    return(
        <>
        <h1>Exibir Produtos</h1>

        <h2>Produtos Unitários</h2>
        <table>
            <thead>
                <tr>
                <th>Cod.</th>
                <th>Nome</th>
                <th>Custo</th>
                <th>Preço de Venda</th>
                </tr>
            </thead>
            <tbody>
                
                {products?.map((item) => (
                        <tr key={item.code}>
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>R$ {item.cost_price}</td>
                            <td>R$ {item.sale_price}</td>
                        </tr>
                        )
                )}
                
            </tbody>
        </table>

        <h2>Kits de Produtos</h2>
        <table>
            <thead>
                <tr>
                <th>Cod.</th>
                <th>Nome</th>
                <th>Custo</th>
                <th>Preço de Venda</th>
                </tr>
            </thead>
            <tbody>
                
                {productsKit?.map((item) => (
                        <tr key={item.code}>
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>R$ {item.cost_price}</td>
                            <td>R$ {item.sale_price}</td>
                        </tr>
                        )
                )}
                
            </tbody>
        </table>

        </>
    )
}
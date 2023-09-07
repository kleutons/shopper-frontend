import { useFetchGet } from "../../hooks/useFetch";
import { TypeProducts } from "../../types/typeProduct";
import { formatCurrency } from "../../utils/format";


interface ProductsPageProps {

}

export default function ProductsPage(props : ProductsPageProps){

    const { data: uniqueData  } = useFetchGet<TypeProducts>('/product/list-unique');
    const { data: packData } = useFetchGet<TypeProducts>('/product/list-pack');

    return(
        <>
        <h1>Exibir Produtos - (Financeiro)</h1>

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
                
                {uniqueData?.map((item) => (
                        <tr key={item.code}>
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>{formatCurrency(item.cost_price)}</td>
                            <td>{formatCurrency(item.sales_price)}</td>
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
                
                {packData?.map((item) => (
                        <tr key={item.code}>
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>{formatCurrency(item.cost_price)}</td>
                            <td>{formatCurrency(item.sales_price)}</td>
                        </tr>
                        )
                )}
                
            </tbody>
        </table>

        </>
    )
}
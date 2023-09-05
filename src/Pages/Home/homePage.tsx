
const productsCSV = [
    {
        code:'16',
        name: 'Azeite',
        sale_price: 20.44,
        new_price: 25.44
    },
    {
        code:'18',
        name: 'BEBIDA ENERGÉTICA',
        sale_price: 8.99,
        new_price: 10
    },
    {
        code:'19',
        name: 'ENERGÉTICO  RED BULL ENERGY ',
        sale_price: 7.29,
        new_price: 9.79
    }

];

export default function HomePage(){
    return(
        <>
        <h1>Atualizar Preço</h1>

        <form>
            <label htmlFor="upload">Escolha um arquivo CSV, e click em validar:</label>
            <input type="file" id="upload" name="upload" accept=".csv" />
            <button type="submit">VALIDAR</button>
        </form>

        <h2>Produtos Para Atualizar</h2>
        <table>
            <thead>
                <tr>
                <th>Cod.</th>
                <th>Nome</th>
                <th>Preço Atual</th>
                <th>Novo Preço</th>
                </tr>
            </thead>
            <tbody>
                
                {productsCSV?.map((item) => (
                        <tr key={item.code}>
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>R$ {item.sale_price}</td>
                            <td>R$ {item.new_price}</td>
                        </tr>
                        )
                )}
                
            </tbody>
        </table>
            
            <button>Atualizar</button>
        </>
    )
}
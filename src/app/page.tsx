import data from "@/db/collection";

export default function Page(){
    return <div className="container">
        <h1>Coleções suportadas</h1>
        <table>
            <thead>
                <tr>
                    <th>Coleção</th>
                    <th>ID Mínimo</th>
                    <th>ID Máximo</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.colecao}>
                        <td>{item.colecao}</td>
                        <td>{item.minId}</td>
                        <td>{item.maxId}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <p>Essa lista é atualizada periodicamente, então fique atento para novas coleções!</p>


        <h2>Usando</h2>

        <p>Para usar essa API, você pode fazer uma requisição GET para o seguinte endpoint:</p>
        <code>/tradeCard?data=[dados]</code>

        <p>Onde <code>[dados]</code> é um objeto JSON serializado com os seguintes campos:</p>
        <ul className="list">
            <li><code>name</code>: Nome do usuário</li>
            <li><code>icon</code>: ID do ícone do usuário</li>
            <li><code>id</code>: ID do usuário</li>
            <li><code>have</code>: Array de cartas que o usuário tem (coleção e id)</li>
            <li><code>want</code>: Array de cartas que o usuário quer (coleção e id)</li>
        </ul>

        <p>Exemplo:</p>
        <code>
            {`{
    "name": "John Doe",
    "icon": "123",
    "id": "12345",
    "have": [
        { "colecao": "0006-FestivalBrilhante", "id": "4" },
        { "colecao": "0006-FestivalBrilhante", "id": "88" },
        { "colecao": "0006-FestivalBrilhante", "id": "81" }
    ],
    "want": [
        { "colecao": "0006-FestivalBrilhante", "id": "74" },
        { "colecao": "0006-FestivalBrilhante", "id": "75" }
    ]
}`}
        </code>

        <p>O JSON precisa ser transformado em base64, em JS pode ser usado <code>window.btoa(JSON.stringify(data)</code>.</p>

        <p>O retorno será uma imagem gerada com as informações do usuário e as cartas que ele tem e quer.</p>
    </div>
}
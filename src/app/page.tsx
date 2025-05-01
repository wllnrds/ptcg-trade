import data from "@/db/collection";

export default function Page(){
    return <div className="container">
        <h1>Trade Card - Pokemon TCG Pocket</h1>
        <h2>Usando</h2>
        <Exemplo />
        <hr />
        <Minimizado/>
        <hr />
        <Colecoes />
        <hr />
        <Backgrounds />  
    </div>
}

function Backgrounds(){
    return <div className="container">
        <h2>Backgrounds suportados</h2>
        <p>Os backgrounds suportados são:</p>
        <table>
            <tbody>
                <tr>
                    <td style={{ textAlign: "center" }}>
                        <code>ID: <em>1</em></code>
                        <img alt="Imagem 1" style={{ margin: "auto", padding: "4px" }} src="/bg/1.png" width={ 64 } height="auto"  />
                    </td>
                    <td style={{ textAlign: "center" }}>
                        <code>ID: <em>1</em></code>
                        <img alt="Imagem 2" style={{ margin: "auto", padding: "4px" }} src="/bg/2.png" width={ 64 } height="auto"  />
                    </td>
                    <td style={{ textAlign: "center" }}>
                        <code>ID: <em>1</em></code>
                        <img alt="Imagem 3" style={{ margin: "auto", padding: "4px" }} src="/bg/3.png" width={ 64 } height="auto"  />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}

function Minimizado(){
    return <div className="container">
        <h2>Usando o serviço para serializar</h2>
        <p>Como forma de tornar a string serializa menor, bem como diminuir o processamento, existe uma rota que permite você enviar seus dados e como retorno vc tem os dados serializados num formado "minimizado".</p>
        <p>Para usar você faz uma requisição <code>POST</code> para <code>https://ptcg-trade.vercel.app/data</code> com o objeto JSON no body da requisição.</p>

        <p>O retorno é um objeto JSON com os seguintes campos:</p>
        <ul className="list">
            <li><code>encodedData</code>: String com os dados já serializados</li>
        </ul>

        <p>Dados serializados pelo servidor precisam de um parametro a mais para renderizar a imagem corretamente. Você deve adicionar uma informação extra  <code>https://ptcg-trade.vercel.app/tradeCard?data=[dados]<b>&version=2</b></code>.</p>

    </div>
}

function Exemplo(){
    return <div className="container">
        <h2>Usuando o serviço</h2>
        <p>Para usar o serviço você precisa de serializar as informações que vão gerar a imagem, com essa informação serializada em mãos você consegue criar uma URL que abre a imagem.</p>
        <p>As rotas serializadas ficam como <code>https://ptcg-trade.vercel.app/tradeCard?data=[dados]</code></p>

        <h3>Dados para serializar</h3>
        <p>O valor de <code>[dados]</code> é um objeto JSON serializado para <code>base64</code> com os seguintes campos:</p>
        <ul className="list">
            <li><code>name</code>: Nome do usuário</li>
            <li><code>icon</code>: ID do ícone do usuário</li>
            <li><code>id</code>: ID do usuário</li>
            <li><code>have</code>: Array de cartas que o usuário tem (coleção e id)</li>
            <li><code>want</code>: Array de cartas que o usuário quer (coleção e id)</li>
            <li><code>backgroundId</code>: ID do background (opcional)</li>
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
    ],
    "backgroundId": "1"
}`}
        </code>

        <p>Você pode transformar o JSON em base 64 usando o código <code>window.btoa(JSON.stringify(data)</code> em JavaScript.</p>
    </div>
}

function Colecoes(){
    return <div className="container">
        <h2>Coleções suportadas</h2>
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
    </div>
}
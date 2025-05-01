## Criptografar dados

Como usar a ferramenta
```javascript
const data = {
    "name": "John Doe",
    "icon": "123",
    "id": "12345",
    "have": [
        { "colecao": "0006-FestivalBrilhante", "id": "75" },
        { "colecao": "0001-DominacaoGeneticaA1", "id": "36" },
        { "colecao": "0001-DominacaoGeneticaA1", "id": "236" },
        { "colecao": "0003-IlhaMitica", "id": "59" },
        { "colecao": "0005-LuzTriunfante", "id": "10" },
        { "colecao": "0005-LuzTriunfante", "id": "22" },
        { "colecao": "0006-FestivalBrilhante", "id": "77" },
        { "colecao": "0006-FestivalBrilhante", "id": "73" },
        { "colecao": "0005-LuzTriunfante", "id": "71" }
    ],
    "want": [
        { "colecao": "0006-FestivalBrilhante", "id": "3" },
        { "colecao": "0006-FestivalBrilhante", "id": "22" },
        { "colecao": "0004-EmbateTempoEspaco", "id": "163" },
        { "colecao": "0004-EmbateTempoEspaco", "id": "159" }
    ],
    "backgroundId": "1"
};

const dataEncoded = btoa(JSON.stringfy(data));
const IMAGE_TRADE_CARD = `https://ptcg-trade.vercel.app/tradeCard?data=${dataEncoded}`;
```

Você pode usar uma rota especifica que faz o processo de serializar os dados
```javascript
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const raw = JSON.stringify(data);
const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
};

const dataEncoded = await fetch("http://localhost:3000/data", requestOptions)
    .then((response) => response.json())
    .then((result) => result.encodedData ) // Retorna { minify, encodedData }
    .catch((error) => console.error(error));

const IMAGE_TRADE_CARD_V2 = `https://ptcg-trade.vercel.app/tradeCard?data=${ dataEncoded }&version=2`;
```

Para renderizar a imagem na página pode ser usada a URL

```html
<img src="https://ptcg-trade.vercel.app/tradeCard?data=${ dataEncoded }"> <!-- Versão Padrão-->
<img src="https://ptcg-trade.vercel.app/tradeCard?data=${ result }&version=2"> <!-- Versão Minify-->
```

### Chaves de Coleção

- 0001-DominacaoGeneticaA1
- 0002-PromoA
- 0003-IlhaMitica
- 0004-EmbateTempoEspaco
- 0005-LuzTriunfante
- 0006-FestivalBrilhante

### Background ID

Os background estão no servidor do serviço, para adicionar mais imagens precisa subir.

- ID: 1 | Giratina
- ID: 2 | LICKY LICKY
- ID: 3 | REGIS
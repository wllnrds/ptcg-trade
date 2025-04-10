## Criptografar dados

Estrutura do JSON:

```javascript
const data = {
    name: "John Doe",
    icon: "123",
    id: "12345",
    have: [
        { colecao: "0006-FestivalBrilhante", id: "4" },
        { colecao: "0006-FestivalBrilhante", id: "88" },
        { colecao: "0006-FestivalBrilhante", id: "81" },
        { colecao: "0006-FestivalBrilhante", id: "72" },
        { colecao: "0006-FestivalBrilhante", id: "50" },
        { colecao: "0006-FestivalBrilhante", id: "52" },
        { colecao: "0006-FestivalBrilhante", id: "42" },
        { colecao: "0006-FestivalBrilhante", id: "41" },
        { colecao: "0006-FestivalBrilhante", id: "45" },
    ],
    want: [
        { colecao: "0006-FestivalBrilhante", id: "74" },
        { colecao: "0006-FestivalBrilhante", id: "75" },
        { colecao: "0006-FestivalBrilhante", id: "75" },
    ],
};

const dataEncoded = btoa(JSON.stringfy(data));
const IMAGE_TRADE_CARD = `https://ptcg-trade.vercel.app/tradeCard?data=${dataEncoded}`;

// OU fazendo a redução

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify(data);

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
};

const result = await fetch("http://localhost:3000/data", requestOptions)
    .then((response) => response.json())
    .then((result) => result.encodedData ) // Retorna { minify, encodedData }
    .catch((error) => console.error(error));

const IMAGE_TRADE_CARD_V2 = `https://ptcg-trade.vercel.app/tradeCard?data=${ result }&version=2`;
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
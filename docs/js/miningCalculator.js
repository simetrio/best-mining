async function calculateMining() {
    const c = await (await fetch("https://functions.yandexcloud.net/d4eclftm7h05t8676t0e", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Accept': 'application/json'
        },
        body: `{"Action": "CalculateMining", "Command": "hr=200.0&p=3500.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=1h&span_d="}`
    })).json();

    console.log(c);
}
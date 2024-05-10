function getTgModalName() {
    return 'tg-banner-closed-3-' + new Date().getFullYear() + new Date().getMonth() + (new Date().getDate() % 5);
}

function openTgModal() {
    window.setTimeout(() => {
        var closed = localStorage.getItem(getTgModalName());
        if (!!closed) {
            return;
        }

        document.getElementById('show-tg-modal').click();
    }, 2000);
}

function closeTgModal() {
    localStorage.setItem(getTgModalName(), 'true');
}

async function loadData(onSuccess) {
    const products = await (await fetch("/data/products.json")).json();
    // const c = await (await fetch("https://functions.yandexcloud.net/d4eclftm7h05t8676t0e", {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json;charset=utf-8',
    //       'Accept': 'application/json'
    //     },
    //     body: `{"Action": "CalculateMining", "Command": "hr=200.0&p=3500.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=1h&span_d="}`
    //   })).json();

    // console.log(c);


    products.forEach(product => {
        product.Name = `${product.Brand} ${product.Model} ${product.HashRate}`;
        product.Prices.forEach(price => price.ValueRuble = toRuble(price.Value));
    });

    window.dataBase = { products };
    console.log(window.dataBase);

    onSuccess();
}

function toRuble(price) {
    const dollar = 98;
    return Math.round(price * dollar / 1000) * 1000;
}

function main() {
    openTgModal();
    loadData(() => {
        showCatalog();
    });
}
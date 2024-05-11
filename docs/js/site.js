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
    const products = await (await fetch('/data/products.json')).json();

    products.forEach(product => {
        product.Name = `${product.Brand} ${product.Model} ${product.HashRate}`;
        product.Prices.forEach(price => price.ValueRuble = toRuble(price.Value));
    });

    window.dataBase = { products };
    console.log(window.dataBase);

    onSuccess();
}

const dollar = 98;

function toRuble(price) {
    return Math.round(price * dollar / 1000) * 1000;
}

function toDollar(price) {
    return Math.round(price / dollar * 1000) / 1000;
}

function initMdb() {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', '/js/mdb.umd.min.js');
    document.getElementsByTagName('head')[0].appendChild(script);
}

function main() {
    openTgModal();
    loadData(() => {
        showCatalog();
        showMiningCalculator();

        // Всегда в конце
        initMdb();
    });
}
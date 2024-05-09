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
    const prices = await (await fetch("/data/prices.json")).json();
    const products = await (await fetch("/data/products.json")).json();

    prices.forEach(x => x.ValueRuble = toRuble(x.Value));
    prices.sort(x => x.Value);

    products.forEach(product => {
        product.Name = `${product.Brand} ${product.Model} ${product.HashRate}`;
        product.Prices = prices.filter(x => x.Id === product.Id);
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
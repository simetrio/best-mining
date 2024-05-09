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

async function loadData() {
    const prices = await (await fetch("/data/prices.json")).json();
    const products = await (await fetch("/data/products.json")).json();

    prices.sort(x => x.Value);

    products.forEach(product => {
        product.Price = toRuble(prices.filter(x => x.Id === product.Id)[0].Value);
    });

    Storage.Products = products;
    console.log(products);
}

function toRuble(price) {
    const dollar = 98;
    return price * dollar;
}

const Storage = {}

function main() {
    openTgModal();
    loadData();
    showCatalog();
}
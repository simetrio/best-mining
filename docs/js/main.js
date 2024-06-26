const viaBtc = { name: "ViaBTC", url: "/pools/viabtc/" };
const k1Pool = { name: "K1Pool", url: "/pools/k1pool/" };
const trustpool = { name: "Trustpool", url: "/pools/trustpool/" };

const pools = {
    "BTC": viaBtc,
    "ETHW": k1Pool,
    "KAS": k1Pool,
    "DOGE": trustpool,
}

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
    }, 30000);
}

function closeTgModal() {
    localStorage.setItem(getTgModalName(), 'true');
}

function orderProduct(productId) {
    const product = window.dataBase.products.find(x => x.Id === productId);

    document.getElementById('order-product-id').setAttribute("value", productId);
    document.getElementById('order-product').innerText = product.Name;
    document.getElementById('show-order-modal').click();
}

function sendOrderProduct() {
    const productId = document.getElementById('order-product-id').value;
    const name = document.getElementById('order-name').value;
    const phone = document.getElementById('order-phone').value;

    const product = window.dataBase.products.find(x => x.Id === productId);

    fetch("https://functions.yandexcloud.net/d4eclftm7h05t8676t0e", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Action: "Order",
            Command: `Новая заявка с сайта. Имя: ${name}. Телефон: ${phone}. Заказ: ${product.Name}`,
        }),
    });

    document.getElementById('show-order-success-modal').click();
}

function loadData() {
    const brands = Data.brands;
    const products = Data.products;
    const coins = Data.coins;
    const posts = Data.posts;
    const pools = Data.pools;

    products.forEach(product => {
        product.Name = `${product.Brand} ${product.Model} ${product.HashRate}`;
        product.Prices.forEach(price => price.ValueRuble = toRuble(price.Value));
    });

    window.dataBase = { products, coins, posts, pools, brands };
}

const dollar = 98;

function toRuble(price, round) {
    round = !!round ? round : 1000;
    return Math.round(price * dollar / round) * round;
}

function toDollar(price) {
    return Math.round(price / dollar * 1000) / 1000;
}

function roundToDigits(value, digits) {
    const multiplier = Math.pow(10, digits);
    return Math.round(value * multiplier) / multiplier;
}

function formatCurrency(value) {
    return new Intl.NumberFormat('ru').format(value);
}

function initMdb() {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', '/js/mdb.umd.min.js');
    document.getElementsByTagName('head')[0].appendChild(script);
}

function main() {
    openTgModal();
    loadData();

    showCatalog();
    showMiningCalculator();
    showBlog();
    showPools();

    // Всегда в конце
    initMdb();
}

// *** Должно быть в самом конце
main();
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
    }, 10000);
}

function closeTgModal() {
    localStorage.setItem(getTgModalName(), 'true');
}

async function loadData(onSuccess) {
    const products = await (await fetch('/data/products.json')).json();
    const coinsObject = await (await fetch('/data/coins.json')).json();
    const posts = await (await fetch('/data/posts.json')).json();
    const pools = await (await fetch('/data/pools.json')).json();

    products.forEach(product => {
        product.Name = `${product.Brand} ${product.Model} ${product.HashRate}`;
        product.Prices.forEach(price => price.ValueRuble = toRuble(price.Value));
    });

    const coins = [];
    Object.keys(coinsObject.coins).forEach(x => {
        const coin = coinsObject.coins[x];
        if (coin.status !== "Active") {
            return;
        }

        coins.push({
            Id: coin.id,
            Tag: coin.tag,
            Title: x,
            Algorithm: coin.algorithm,
            HashRate: coin.hashRate,
            Popular: coin.popular || false,
            Img: coin.img || "",
        });
    });

    window.dataBase = { products, coins, posts, pools };
    console.log(window.dataBase);

    onSuccess();
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
    loadData(() => {
        showCatalog();
        showMiningCalculator();
        showBlog();
        showPools();

        // Всегда в конце
        initMdb();
    });
}

// *** Должно быть в самом конце
main();
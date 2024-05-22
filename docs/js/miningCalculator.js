function showMiningCalculator() {
    showProductMiningCalculator();
    showCommonMiningCalculator();
    showCoinMiningCalculator();
    showCoinsTopMiningCalculatorTop();
    showAsicMiningCalculator();
}

// *** Show ***

function showProductMiningCalculator() {
    const element = document.getElementById('mining-calculator-product');
    if (!element) {
        return;
    }

    const productId = element.getAttribute('data-product-id');
    const product = window.dataBase.products.find(x => x.Id === productId);

    element.innerHTML = fillMiningCalculatorProductTemplate(productMiningCalculatorTemplate, product);
}

function showCommonMiningCalculator() {
    const element = document.getElementById('mining-calculator');
    if (!element) {
        return;
    }

    const asics = window.dataBase.products;
    const coins = window.dataBase.coins;

    element.innerHTML = fillMiningCalculatorTemplate(
        miningCalculatorTemplate,
        asicItemMiningCalculatorTemplate,
        coinItemMiningCalculatorTemplate,
        asics,
        coins
    );
}

function updateMiningCalculator() {
    const search = document.getElementById('mining-calculator-search').value;
    const coins = window.dataBase.coins
        .filter(x => !search
            || x.Tag.toLowerCase().startsWith(search.toLowerCase())
            || x.Title.toLowerCase().startsWith(search.toLowerCase())
        );
    const asics = window.dataBase.products
        .filter(x => !search || x.Name.toLowerCase().indexOf(search.toLowerCase()) !== -1);

    document.getElementById('mining-calculator-coins-items').innerHTML =
        fillCoinsItemsMiningCalculatorTemplate(coinItemMiningCalculatorTemplate, coins);

    document.getElementById('mining-calculator-asics-items').innerHTML =
        fillAsicsItemsMiningCalculatorTemplate(asicItemMiningCalculatorTemplate, asics);
}

function showCoinMiningCalculator() {
    const element = document.getElementById('mining-calculator-coin');
    if (!element) {
        return;
    }

    const coinId = element.getAttribute('data-coin');
    const coin = window.dataBase.coins.find(x => x.Tag === coinId);

    const products = window.dataBase.products
        .filter(x => x.MiningCalculator.Algorithm.indexOf(coin.Algorithm.toLowerCase()) !== -1);

    element.innerHTML = fillMiningCalculatorCoinTemplate(coinMiningCalculatorTemplate, coin, products);
}

function showCoinsTopMiningCalculatorTop() {
    const element = document.getElementById('mining-calculator-coins-top');
    if (!element) {
        return;
    }

    const coins = window.dataBase.coins.filter(x => x.Popular).slice(0, 4);

    element.innerHTML = fillMiningCalculatorCoinsTopTemplate(coinsTopTemplate, coinsTopItemTemplate, coins);
}

function showAsicMiningCalculator() {
    const element = document.getElementById('mining-calculator-asic');
    if (!element) {
        return;
    }

    const productId = element.getAttribute('data-asic-id');
    const product = window.dataBase.products.find(x => x.Id === productId);

    element.innerHTML = fillMiningCalculatorAsicTemplate(asicMiningCalculatorTemplate, product);
}

// *** Frames ***

function getSingleMiningCalculator(product) {
    return fillMiningCalculatorProductTemplate(productMiningCalculatorTemplate, product);
}

// *** Fill ***

function fillMiningCalculatorProductTemplate(template, product) {
    return template
        .replace(new RegExp('{coin}', 'g'), product.MiningCalculator.Coin)
        .replace(new RegExp('{hashrate}', 'g'), product.MiningCalculator.HashRate)
        .replace(new RegExp('{hashrate-value}', 'g'), product.MiningCalculator.HashRateValue)
        .replace(new RegExp('{power}', 'g'), product.MiningCalculator.Power)
        .replace(new RegExp('{product-id}', 'g'), product.Id)
        ;
}

function fillMiningCalculatorCoinTemplate(template, coin, products) {
    const productsHtml = products.length > 0 ? renderProductsSlimHashRate(products) : "";
    const productsHeaderHtml = products.length > 0 ? `<h2 class="my-3">Асики для майнинга ${coin.Title}</h2>` : "";

    return template
        .replace(new RegExp('{coin}', 'g'), coin.Tag)
        .replace(new RegExp('{hashrate}', 'g'), coin.HashRate || '')
        .replace(new RegExp('{title}', 'g'), coin.Title)
        .replace(new RegExp('{productsHeader}', 'g'), productsHeaderHtml)
        .replace(new RegExp('{products}', 'g'), productsHtml)
        ;
}

function fillMiningCalculatorCoinsTopTemplate(template, templateItem, coins) {
    let posts = fillMiningCalculatorCoinsTopItemsTemplate(templateItem, coins);

    return template
        .replace(new RegExp('{coins}', 'g'), posts)
        ;
}

function fillMiningCalculatorCoinsTopItemsTemplate(template, coins) {
    let coinsHtml = '';

    coins.forEach(coin => {
        coinsHtml += template
            .replace(new RegExp('{id}', 'g'), coin.Tag.toLowerCase())
            .replace(new RegExp('{img}', 'g'), coin.Img)
            .replace(new RegExp('{title}', 'g'), coin.Title)
            .replace(new RegExp('{tag}', 'g'), coin.Tag)
            ;
    });

    return coinsHtml;
}

function fillMiningCalculatorResultTemplate(template, templateProduct, data, product) {
    const estimated_rewards = parseFloat(data.estimated_rewards);
    const revenue = parseFloat(data.revenue.replace('$', ''));
    const cost = parseFloat(data.cost.replace('$', ''));
    const profit = parseFloat(data.profit.replace('$', ''));

    const prepareCoin = value => roundToDigits(value, 9);
    const prepareDollar = value => formatCurrency(roundToDigits(value, 2));
    const prepareRuble = value => formatCurrency(toRuble(value, 2));

    const productHtml = fillMiningCalculatorProductResultTemplate(templateProduct, product, { revenue, cost, profit });

    return template
        .replace(new RegExp('{product}', 'g'), productHtml)
        // Hour
        .replace(new RegExp('{hour-estimated_rewards}', 'g'), prepareCoin(estimated_rewards / 24))
        .replace(new RegExp('{hour-revenue}', 'g'), prepareDollar(revenue / 24))
        .replace(new RegExp('{hour-revenue-ruble}', 'g'), prepareRuble(revenue / 24))
        .replace(new RegExp('{hour-cost}', 'g'), prepareDollar(cost / 24))
        .replace(new RegExp('{hour-cost-ruble}', 'g'), prepareRuble(cost / 24))
        .replace(new RegExp('{hour-profit}', 'g'), prepareDollar(profit / 24))
        .replace(new RegExp('{hour-profit-ruble}', 'g'), prepareRuble(profit / 24))
        // Day
        .replace(new RegExp('{day-estimated_rewards}', 'g'), prepareCoin(estimated_rewards))
        .replace(new RegExp('{day-revenue}', 'g'), prepareDollar(revenue))
        .replace(new RegExp('{day-revenue-ruble}', 'g'), prepareRuble(revenue))
        .replace(new RegExp('{day-cost}', 'g'), prepareDollar(cost))
        .replace(new RegExp('{day-cost-ruble}', 'g'), prepareRuble(cost))
        .replace(new RegExp('{day-profit}', 'g'), prepareDollar(profit))
        .replace(new RegExp('{day-profit-ruble}', 'g'), prepareRuble(profit))
        // Week
        .replace(new RegExp('{week-estimated_rewards}', 'g'), prepareCoin(estimated_rewards * 7))
        .replace(new RegExp('{week-revenue}', 'g'), prepareDollar(revenue * 7))
        .replace(new RegExp('{week-revenue-ruble}', 'g'), prepareRuble(revenue * 7))
        .replace(new RegExp('{week-cost}', 'g'), prepareDollar(cost * 7))
        .replace(new RegExp('{week-cost-ruble}', 'g'), prepareRuble(cost * 7))
        .replace(new RegExp('{week-profit}', 'g'), prepareDollar(profit * 7))
        .replace(new RegExp('{week-profit-ruble}', 'g'), prepareRuble(profit * 7))
        // Month
        .replace(new RegExp('{month-estimated_rewards}', 'g'), prepareCoin(estimated_rewards * 30))
        .replace(new RegExp('{month-revenue}', 'g'), prepareDollar(revenue * 30))
        .replace(new RegExp('{month-revenue-ruble}', 'g'), prepareRuble(revenue * 30))
        .replace(new RegExp('{month-cost}', 'g'), prepareDollar(cost * 30))
        .replace(new RegExp('{month-cost-ruble}', 'g'), prepareRuble(cost * 30))
        .replace(new RegExp('{month-profit}', 'g'), prepareDollar(profit * 30))
        .replace(new RegExp('{month-profit-ruble}', 'g'), prepareRuble(profit * 30))
        ;
}

function fillMiningCalculatorProductResultTemplate(template, product, data) {
    if (!product) {
        return "";
    }

    const roi = product.Prices[0].Value / data.profit / 30;
    const hashratePrice = product.Prices[0].Value / product.MiningCalculator.HashRateValue;
    const powerPercent = data.cost / data.revenue * 100;
    const yearProfitPercent = data.profit * 365 / product.Prices[0].Value * 100;

    return template
        .replace(new RegExp('{roi}', 'g'), roundToDigits(roi, 1))
        .replace(new RegExp('{hashrate}', 'g'), product.MiningCalculator.HashRate)
        .replace(new RegExp('{hashrate-price}', 'g'), roundToDigits(hashratePrice, 2))
        .replace(new RegExp('{power-percent}', 'g'), roundToDigits(powerPercent, 0))
        .replace(new RegExp('{year-profit-percent}', 'g'), roundToDigits(yearProfitPercent, 0))
        ;
}

function fillMiningCalculatorTemplate(template, templateAsicItem, templateCoinItem, asics, coins) {
    let asicsHtml = fillAsicsItemsMiningCalculatorTemplate(templateAsicItem, asics);
    let coinsHtml = fillCoinsItemsMiningCalculatorTemplate(templateCoinItem, coins);

    return template
        .replace(new RegExp('{asics}', 'g'), asicsHtml)
        .replace(new RegExp('{coins}', 'g'), coinsHtml)
        ;
}

function fillCoinsItemsMiningCalculatorTemplate(template, coins) {
    let coinsHtml = '';

    coins.forEach(coin => {
        coinsHtml += template
            .replace(new RegExp('{id}', 'g'), coin.Tag.toLowerCase())
            .replace(new RegExp('{coin}', 'g'), coin.Tag)
            .replace(new RegExp('{title}', 'g'), coin.Title)
            ;
    });

    return coinsHtml;
}

function fillAsicsMiningCalculatorTemplate(template, templateItem, asics) {
    let asicsHtml = fillAsicsItemsMiningCalculatorTemplate(templateItem, asics);

    return template
        .replace(new RegExp('{asics}', 'g'), asicsHtml)
        ;
}

function fillAsicsItemsMiningCalculatorTemplate(template, asics) {
    let asicsHtml = '';

    asics.forEach(asic => {
        asicsHtml += template
            .replace(new RegExp('{id}', 'g'), asic.Id)
            .replace(new RegExp('{name}', 'g'), asic.Name)
            ;
    });

    return asicsHtml;
}

function fillMiningCalculatorAsicTemplate(template, product) {
    const calculatorHtml = fillMiningCalculatorProductTemplate(template, product);
    const productHtml = getCatalogProductSlimTall(product);

    return calculatorHtml
        .replace(new RegExp('{name}', 'g'), product.Name)
        .replace(new RegExp('{product}', 'g'), productHtml)
        ;
}

// *** Calculator ***

async function calculateMining() {
    const element = document.getElementById('mc-result');
    element.innerHTML = loader;

    const coinTag = document.getElementById('mc-coin').value;
    const coin = window.dataBase.coins.find(x => x.Tag === coinTag).Id;
    const hashRate = document.getElementById('mc-hash-rate').value;
    const power = document.getElementById('mc-power').value;
    const cost = toDollar(parseFloat(document.getElementById('mc-cost').value));
    const poolComission = document.getElementById('mc-pool-comission').value;
    const productId = document.getElementById('mc-product-id')?.value;

    const result = await (await fetch("https://functions.yandexcloud.net/d4eclftm7h05t8676t0e", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Accept': 'application/json'
        },
        body: `{"Action": "CalculateMining", "Command": "${coin}.json?hr=${hashRate}&p=${power}&fee=${poolComission}&cost=${cost}&cost_currency=USD&hcost=0.0&span_br=1h&span_d="}`
    })).json();

    console.log(result);

    const product = !!productId ? window.dataBase.products.find(x => x.Id === productId) : null;

    document.getElementById('mc-result').innerHTML = fillMiningCalculatorResultTemplate(
        singleMiningCalculatorResultTemplate,
        singleMiningCalculatorProductResultTemplate,
        result,
        product
    );
}

// *** Templates ***

const productMiningCalculatorTemplate = `
<div class="card my-3">
    <div class="card-body">
        <h3 class="card-title mb-4">Расчет доходности</h3>
        <input id="mc-coin" type="hidden" value="{coin}" />
        <input id="mc-product-id" type="hidden" value="{product-id}" />
        <div class="row">
            <div class="col-md-3 mb-4">
                <div data-mdb-input-init class="form-outline">
                    <input type="text" id="mc-hash-rate" class="form-control" value="{hashrate-value}" />
                    <label class="form-label" for="mc-hash-rate">Хешрейт, {hashrate}</label>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div data-mdb-input-init class="form-outline">
                    <input type="text" id="mc-power" class="form-control" value="{power}" />
                    <label class="form-label" for="mc-power">Потребление, Вт</label>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div data-mdb-input-init class="form-outline">
                    <input type="text" id="mc-cost" class="form-control" value="4.5" />
                    <label class="form-label" for="mc-cost">Цена на электроэнергию, ₽</label>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div data-mdb-input-init class="form-outline">
                    <input type="text" id="mc-pool-comission" class="form-control" value="0" />
                    <label class="form-label" for="mc-pool-comission">Комиссия пула, %</label>
                </div>
            </div>
        </div>

        <div class="text-center">
            <button data-mdb-ripple-init type="button" class="btn btn-primary mb-4 px-5" onclick="calculateMining()">
                Рассчитать
            </button>
        </div>

        <div id="mc-result"></div>
    </div>
</div>
`;


const coinMiningCalculatorTemplate = `
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Главная</a></li>
    <li class="breadcrumb-item"><a href="/calculators/mining/">Майнинг калькулятор</a></li>
    <li class="breadcrumb-item active" aria-current="page">{title}</li>
  </ol>
</nav>
<h1>Расчет доходности {title}</h1>
<div class="card">
    <div class="card-body">
        <input id="mc-coin" type="hidden" value="{coin}" />
        <div class="row">
            <div class="col-md-3 mb-4">
                <div data-mdb-input-init class="form-outline">
                    <input type="text" id="mc-hash-rate" class="form-control" value="1000" />
                    <label class="form-label" for="mc-hash-rate">Хешрейт, {hashrate}</label>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div data-mdb-input-init class="form-outline">
                    <input type="text" id="mc-power" class="form-control" value="1000" />
                    <label class="form-label" for="mc-power">Потребление, Вт</label>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div data-mdb-input-init class="form-outline">
                    <input type="text" id="mc-cost" class="form-control" value="4.5" />
                    <label class="form-label" for="mc-cost">Цена на электроэнергию, ₽</label>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div data-mdb-input-init class="form-outline">
                    <input type="text" id="mc-pool-comission" class="form-control" value="0" />
                    <label class="form-label" for="mc-pool-comission">Комиссия пула, %</label>
                </div>
            </div>
        </div>

        <div class="text-center">
            <button data-mdb-ripple-init type="button" class="btn btn-primary mb-4 px-5" onclick="calculateMining()">
                Рассчитать
            </button>
        </div>

        <div id="mc-result"></div>
    </div>
</div>

{productsHeader}
{products}
`;

const asicMiningCalculatorTemplate = `
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Главная</a></li>
    <li class="breadcrumb-item"><a href="/calculators/mining/">Майнинг калькулятор</a></li>
    <li class="breadcrumb-item active" aria-current="page">{name}</li>
  </ol>
</nav>
<h1>Расчет доходности асика {name}</h1>
<div class="row">
    <div class="col-lg-3">
        {product}
    </div>
    <div class="card col-lg-9">
        <div class="card-body">
            <input id="mc-coin" type="hidden" value="{coin}" />
            <input id="mc-product-id" type="hidden" value="{product-id}" />
            <div class="row">
                <div class="col-md-3 mb-4">
                    <div data-mdb-input-init class="form-outline">
                        <input type="text" id="mc-hash-rate" class="form-control" value="{hashrate-value}" />
                        <label class="form-label" for="mc-hash-rate">Хешрейт, {hashrate}</label>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div data-mdb-input-init class="form-outline">
                        <input type="text" id="mc-power" class="form-control" value="{power}" />
                        <label class="form-label" for="mc-power">Потребление, Вт</label>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div data-mdb-input-init class="form-outline">
                        <input type="text" id="mc-cost" class="form-control" value="4.5" />
                        <label class="form-label" for="mc-cost">Цена на электроэнергию, ₽</label>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div data-mdb-input-init class="form-outline">
                        <input type="text" id="mc-pool-comission" class="form-control" value="0" />
                        <label class="form-label" for="mc-pool-comission">Комиссия пула, %</label>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <button data-mdb-ripple-init type="button" class="btn btn-primary mb-4 px-5"
                    onclick="calculateMining()">
                    Рассчитать
                </button>
            </div>

            <div id="mc-result"></div>
        </div>
    </div>
</div>
`;

const singleMiningCalculatorResultTemplate = `
<table class="table table-sm my-3">
    <tr>
        <th scope="col">Период</th>
        <th scope="col">Награда</th>
        <th scope="col">Доход</th>
        <th scope="col">Расход</th>
        <th scope="col">Прибыль</th>
    </tr>
    <tr>
        <th>Час</th>
        <td>{hour-estimated_rewards}</td>
        <td>{hour-revenue-ruble} ₽ / {hour-revenue} $</td>
        <td>{hour-cost-ruble} ₽ / {hour-cost} $</td>
        <th>{hour-profit-ruble} ₽ / {hour-profit} $</th>
    </tr>
    <tr>
        <th>День</th>
        <td>{day-estimated_rewards}</td>
        <td>{day-revenue-ruble} ₽ / {day-revenue} $</td>
        <td>{day-cost-ruble} ₽ / {day-cost} $</td>
        <th>{day-profit-ruble} ₽ / {day-profit} $</th>
    </tr>
    <tr>
        <th>Неделя</th>
        <td>{week-estimated_rewards}</td>
        <td>{week-revenue-ruble} ₽ / {week-revenue} $</td>
        <td>{week-cost-ruble} ₽ / {week-cost} $</td>
        <th>{week-profit-ruble} ₽ / {week-profit} $</th>
    </tr>
    <tr>
        <th>Месяц</th>
        <td>{month-estimated_rewards}</td>
        <td>{month-revenue-ruble} ₽ / {month-revenue} $</td>
        <td>{month-cost-ruble} ₽ / {month-cost} $</td>
        <th>{month-profit-ruble} ₽ / {month-profit} $</th>
    </tr>
</table>
{product}
`;

const singleMiningCalculatorProductResultTemplate = `
<h3 class="text-center my-3">Показатели</h3>
<div class="row">
    <dt class="col-md-3">Окупаемость</dt>
    <dd class="col-md-3">{roi} мес.</dd>
    <dt class="col-md-3">Стоимость {hashrate}</dt>
    <dd class="col-md-3">{hashrate-price} $ за 1 {hashrate}</dd>
    <dt class="col-md-3">Годовая доходность</dt>
    <dd class="col-md-3">{year-profit-percent}%</dd>
    <dt class="col-md-3">Доля затрат на ээ</dt>
    <dd class="col-md-3">{power-percent}%</dd>
</div>
`;

const loader = `
<div class="text-center">
    <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Загрузка...</span>
    </div>
</div>
`;

const miningCalculatorTemplate = `
<div class="card">
    <div class="m-4">
        <div class="form-outline" data-mdb-input-init>
            <input type="text" id="mining-calculator-search" class="form-control" onkeyup="updateMiningCalculator()" />
            <label class="form-label" for="search">Укажите асик или монету</label>
        </div>
        <h2 class="my-3">Асики</h2>
        <div class="mt-4 row" id="mining-calculator-asics-items">
            {asics}
        </div>
        <h2 class="my-3">Монеты</h2>
        <div class="mt-4 row" id="mining-calculator-coins-items">
            {coins}
        </div>
    </div>
</div>
`;

const coinItemMiningCalculatorTemplate = `
<div class="col-lg-3 p-1">
    <a href="/calculators/mining/coins/{id}/" class="btn btn-secondary btn-block">{title} ({coin})</a>
</div>
`;

const coinsTopTemplate = `
<h2 class="my-4">Популярные монеты</h2>
<div class="row">
    {coins}
</div>
`;

const coinsTopItemTemplate = `
<div class="card col-lg-3 my-3">
    <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
        <img src="/img/tg-channel/{img}" class="img-fluid" />
        <a href="/calculators/mining/coins/{id}/">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
    </div>
    <div class="card-body text-center">
        <a href="/calculators/mining/coins/{id}/">
            <h5 class="card-title">{title} ({tag})</h5>
        </a>
    </div>
</div>
`;

const asicItemMiningCalculatorTemplate = `
<div class="col-lg-3 p-1">
    <a href="/calculators/mining/asics/{id}/" class="btn btn-secondary btn-block">{name}</a>
</div>
`;
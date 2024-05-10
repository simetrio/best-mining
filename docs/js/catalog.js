function showCatalog() {
    showCatalogPopularWide();
    showCatalogWide();
    showCatalogBrandWide();
    showCatalogBrands();
    showCatalogProduct();
}

// *** Show ***

function showCatalogPopularWide() {
    const element = document.getElementById('catalog-popular-wide');
    if (!element) {
        return;
    }

    const products = window.dataBase.products.filter(x => x.Popular);

    let html = '';
    products.forEach(product => {
        html += renderProductWide(product);
    });

    element.innerHTML = html;
}

function showCatalogWide() {
    const element = document.getElementById('catalog-wide');
    if (!element) {
        return;
    }

    let html = '';
    window.dataBase.products.forEach(product => {
        html += renderProductWide(product);
    });

    element.innerHTML = html;
}

function showCatalogBrandWide() {
    const element = document.getElementById('catalog-brand-wide');
    if (!element) {
        return;
    }

    const brand = element.getAttribute('data-brand');
    const products = window.dataBase.products.filter(x => x.Brand === brand);

    let html = '';
    products.forEach(product => {
        html += renderProductWide(product);
    });

    element.innerHTML = html;
}

function showCatalogBrands() {
    const element = document.getElementById('catalog-brands');
    if (!element) {
        return;
    }

    const brands = new Set(window.dataBase.products.map(x => x.Brand));
    element.innerHTML = renderBrands(brands);
}

function showCatalogProduct() {
    const element = document.getElementById('catalog-product');
    if (!element) {
        return;
    }

    const productId = element.getAttribute('data-product-id');
    const product = window.dataBase.products.find(x => x.Id === productId);

    element.innerHTML = renderProduct(product);
}

// *** Render ***

function renderProductWide(product) {
    const characteristicsHtml = fillCharacteristicsTemplate(productCharacteristicTemplate, product);

    return fillProductTemplate(productWideTemplate, product)
        .replace(new RegExp('{characteristics}', 'g'), characteristicsHtml)
        ;
}

function renderProduct(product) {
    const characteristicsHtml = fillCharacteristicsTemplate(productCharacteristicTemplate, product);
    const pricesHtml = fillPricesTemplate(productPricesTemplate, productPriceTemplate, product);

    return fillProductTemplate(productTemplate, product)
        .replace(new RegExp('{characteristics}', 'g'), characteristicsHtml)
        .replace(new RegExp('{prices}', 'g'), pricesHtml)
        ;
}

function renderBrands(brands) {
    let brandsHtml = '';

    brands.forEach(brand => {
        brandsHtml += brandTemplate
            .replace(new RegExp('{id}', 'g'), brand.toLowerCase())
            .replace(new RegExp('{name}', 'g'), brand)
            ;
    });

    return brandsTemplate
        .replace(new RegExp('{brands}', 'g'), brandsHtml)
        ;
}

// *** Fill ***

function fillCharacteristicsTemplate(template, product) {
    let characteristicsHtml = '';

    product.Characteristics.forEach(characteristic => {
        characteristicsHtml += template
            .replace(new RegExp('{name}', 'g'), characteristic.Name)
            .replace(new RegExp('{value}', 'g'), characteristic.Value)
            ;
    });

    return characteristicsHtml;
}

function fillPricesTemplate(template, templateItem, product) {
    let pricesHtml = '';

    product.Prices.forEach(price => {
        pricesHtml += templateItem
            .replace(new RegExp('{name}', 'g'), product.Name)
            .replace(new RegExp('{priceRuble}', 'g'), new Intl.NumberFormat("ru").format(price.ValueRuble))
            .replace(new RegExp('{price}', 'g'), new Intl.NumberFormat("ru").format(price.Value))
            .replace(new RegExp('{delivery}', 'g'), price.Delivery)
            ;
    });

    return template
        .replace(new RegExp('{prices}', 'g'), pricesHtml)
        ;
}

function fillProductTemplate(template, product) {
    return template
        .replace(new RegExp('{id}', 'g'), product.Id)
        .replace(new RegExp('{img}', 'g'), product.Imgs[0])
        .replace(new RegExp('{name}', 'g'), product.Name)
        .replace(new RegExp('{priceRuble}', 'g'), new Intl.NumberFormat("ru").format(product.Prices[0].ValueRuble))
        .replace(new RegExp('{price}', 'g'), new Intl.NumberFormat("ru").format(product.Prices[0].Value))
        .replace(new RegExp('{brandId}', 'g'), product.Brand.toLowerCase())
        .replace(new RegExp('{brand}', 'g'), product.Brand)
        ;
}

// *** Templates ***
const productWideTemplate = `
<div class="card m-3">
    <div class="row g-0">
        <div class="col-md-4">
            <a href="/catalog/{id}">
                <img src="/img/{img}" alt="{name}" class="img-fluid rounded-start" />
            </a>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <a href="/catalog/{id}">
                    <h3 class="card-title">{name}</h3>
                </a>
                <p class="card-text">
                <dl class="row mt-4">
                    {characteristics}
                </dl>
                </p>
                <div class="row mt-4">
                    <div class="col-lg-6">
                        <div class="h3">{priceRuble} ₽ ({price} $)</div>
                    </div>
                    <div class="col-lg-6">
                        <a href="https://t.me/BestMiningManager" class="btn btn-primary px-5" data-mdb-ripple-init
                            target="_blank">Заказать</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const productTemplate = `
<nav aria-label="breadcrumb">
  <ol class="breadcrumb mx-3">
    <li class="breadcrumb-item"><a href="/">Главная</a></li>
    <li class="breadcrumb-item"><a href="/catalog/">Каталог</a></li>
    <li class="breadcrumb-item"><a href="/catalog/brands/{brandId}/">{brand}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{name}</li>
  </ol>
</nav>
<div class="card m-3">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="/img/{img}" alt="{name}" class="img-fluid rounded-start" />
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h1 class="card-title">{name}</h1>
                <p class="card-text">
                <dl class="row mt-4">
                    {characteristics}
                </dl>
                </p>
                <div class="row mt-4">
                    <div class="col-lg-6">
                        <div class="h3">{priceRuble} ₽ ({price} $)</div>
                    </div>
                    <div class="col-lg-6">
                        <a href="https://t.me/BestMiningManager" class="btn btn-primary px-5" data-mdb-ripple-init
                            target="_blank">Заказать</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{prices}
`;

const productPricesTemplate = `
<div class="card m-3">
    <div class="card-body">
        <h3 class="card-title mb-3">Прайс</h3>
        <table class="table table-sm">
            <tr>
                <th scope="col">Модель</th>
                <th scope="col">Цена, ₽</th>
                <th scope="col">Цена, USDT</th>
                <th scope="col">Наличие</th>
            </tr>
            {prices}
        </table>
    </div>
</div>
`;

const productPriceTemplate = `
<tr>
    <td>{name}</td>
    <td>{priceRuble} ₽</td>
    <td>{price} $</td>
    <td>{delivery}</td>
</tr>
`;

const productCharacteristicTemplate = `
<dt class="col-sm-3">{name}</dt>
<dd class="col-sm-9">{value}</dd>
`;

const brandTemplate = `
<div class="col">
    <div class="card">
        <div class="card-body text-center">
            <h5 class="card-title mt-2">
                <a href="/catalog/brands/{id}/">{name}</a>
            </h5>
        </div>
    </div>
</div>
`;

const brandsTemplate = `
<div class="row my-3 mx-2 gx-3">
    {brands}
</div>
`;
function showCatalog() {
    showCatalogPopularWide();
    showCatalogBrands();
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

function showCatalogBrands() {
    const element = document.getElementById('catalog-brands');
    if (!element) {
        return;
    }

    const brands = new Set(window.dataBase.products.map(x => x.Brand));
    element.innerHTML = renderBrands(brands);
}

// *** Render ***

function renderProductWide(product) {
    const characteristicsHtml = fillCharacteristicsTemplate(productCharacteristicTemplate, product);

    return fillProductTemplate(productWideTemplate, product)
        .replace(new RegExp('{characteristics}', 'g'), characteristicsHtml)
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

function fillProductTemplate(template, product) {
    return template
        .replace(new RegExp('{id}', 'g'), product.Id)
        .replace(new RegExp('{img}', 'g'), product.Imgs[0])
        .replace(new RegExp('{name}', 'g'), product.Name)
        .replace(new RegExp('{priceRuble}', 'g'), new Intl.NumberFormat("ru").format(product.Prices[0].ValueRuble))
        .replace(new RegExp('{price}', 'g'), new Intl.NumberFormat("ru").format(product.Prices[0].Value))
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
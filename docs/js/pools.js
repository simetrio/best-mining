function showPools() {
    showPoolsList();
}

// *** Show ***

function showPoolsList() {
    const element = document.getElementById('pools-list');
    if (!element) {
        return;
    }

    const pools = window.dataBase.pools;

    element.innerHTML = fillPoolsTemplate(poolsTemplate, poolsItemTemplate, pools);
}

// *** Fill ***

function fillPoolsTemplate(template, templateItem, pools) {
    let poolsHtml = fillPoolsItemTemplate(templateItem, pools);

    return template
        .replace(new RegExp('{pools}', 'g'), poolsHtml)
        ;
}

function fillPoolsItemTemplate(template, pools) {
    let poolsHtml = '';

    pools.forEach(pool => {
        poolsHtml += template
            .replace(new RegExp('{id}', 'g'), pool.Id)
            .replace(new RegExp('{img}', 'g'), pool.Img)
            .replace(new RegExp('{name}', 'g'), pool.Name)
            ;
    });

    return poolsHtml;
}

// *** Templates ***

const poolsTemplate = `
<h1 class="mb-4">Пулы для майнинга криптовалюты</h1>
<div class="row">
    {pools}
</div>
`;

const poolsItemTemplate = `
<div class="card col-lg-3">
    <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
        <img src="/img/tg-channel/{img}" class="img-fluid" />
        <a href="/pools/{id}">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
    </div>
    <div class="card-body">
        <a href="/pools/{id}">
            <h5 class="card-title">Пул {name}</h5>
        </a>
    </div>
</div>
`;
function showMiningCalculator() {
    showSingleMiningCalculator();
}

function showSingleMiningCalculator() {
    const element = document.getElementById('mining-calculator-single');
    if (!element) {
        return;
    }

    const data = {
        coin: element.getAttribute('data-coin'),
        hashRate: element.getAttribute('data-hashrate'),
        hashRateValue: element.getAttribute('data-hashrate-value'),
        power: element.getAttribute('data-power'),
    }

    element.innerHTML = fillMiningCalculatorSingleTemplate(singleMiningCalculatorTemplate, data);
}

// *** Fill ***

function fillMiningCalculatorSingleTemplate(template, data) {
    return template
        .replace(new RegExp('{coin}', 'g'), data.coin)
        .replace(new RegExp('{hashrate}', 'g'), data.hashRate)
        .replace(new RegExp('{hashrate-value}', 'g'), data.hashRateValue)
        .replace(new RegExp('{power}', 'g'), data.power)
        ;
}

// *** Calculator ***

async function calculateMining() {
    // const hashRate = document.getElementById('mc-hash-rate').value;
    // const hashRate = document.getElementById('mc-hash-rate').value;
    // const hashRate = document.getElementById('mc-hash-rate').value;

    const c = await (await fetch("https://functions.yandexcloud.net/d4eclftm7h05t8676t0e", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Accept': 'application/json'
        },
        body: `{"Action": "CalculateMining", "Command": "hr=200.0&p=3500.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=1h&span_d="}`
    })).json();

    console.log(c);
}

// *** Templates ***

const singleMiningCalculatorTemplate = `
<div class="card m-3">
    <div class="card-body">
        <h3 class="card-title mb-4">Доходность</h3>
        <input id="mc-coin" type="hidden" value="{coint}" />
        <div class="row mb-4">
            <div class="col">
                <div data-mdb-input-init class="form-outline">
                    <input type="text" id="mc-hash-rate" class="form-control" value="{hashrate-value}" />
                    <label class="form-label" for="mc-hash-rate">Хешрейт, {hashrate}</label>
                </div>
            </div>
            <div class="col">
                <div data-mdb-input-init class="form-outline">
                    <input type="text" id="mc-power" class="form-control" value={power} />
                    <label class="form-label" for="mc-power">Потребление, Вт</label>
                </div>
            </div>
            <div class="col">
                <div data-mdb-input-init class="form-outline">
                    <input type="text" id="mc-cost" class="form-control" value="5" />
                    <label class="form-label" for="mc-cost">Цена на электроэнергию, ₽</label>
                </div>
            </div>
            <div class="col">
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
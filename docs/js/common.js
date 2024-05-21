

const Data = {
    brands: JSON.parse(`["Jasminer", "Antminer", "Whatsminer", "Iceriver"]`),
    products: JSON.parse(`[
    {
        "Id": "jasminer-x16-q-pro-2050",
        "Brand": "Jasminer",
        "Model": "X16Q PRO",
        "HashRate": "2050 MH/s",
        "Popular": true,
        "Prices": [
            {
                "Value": 3850,
                "Delivery": "Поставка 20-30 дней",
                "Source": "mc"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "2050 MH/s"
            },
            {
                "Name": "Потребление",
                "Value": "520 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "ETCHASH/ETHASH"
            },
            {
                "Name": "Монеты",
                "Value": "ETC/ETHW"
            },
            {
                "Name": "Уровень шума",
                "Value": "40 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "ETHW",
            "HashRate": "MH/s",
            "HashRateValue": "2050",
            "Power": "520",
            "Algorithm": "etchash/ethash"
        },
        "Imgs": [
            "JasminerX16Q2050.webp"
        ]
    },
    {
        "Id": "jasminer-x16-q-1950",
        "Brand": "Jasminer",
        "Model": "X16Q",
        "HashRate": "1950 MH/s",
        "Popular": true,
        "Prices": [
            {
                "Value": 2960,
                "Delivery": "Поставка 70-90 дней",
                "Source": "mc"
            },
            {
                "Value": 3200,
                "Delivery": "Поставка 50-70 дней",
                "Source": "mc"
            },
            {
                "Value": 3320,
                "Delivery": "Поставка 30-50 дней",
                "Source": "mc"
            },
            {
                "Value": 3500,
                "Delivery": "Склад Москва",
                "Source": "mc"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "1950 MH/s"
            },
            {
                "Name": "Потребление",
                "Value": "620 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "ETCHASH/ETHASH"
            },
            {
                "Name": "Монеты",
                "Value": "ETC/ETHW"
            },
            {
                "Name": "Уровень шума",
                "Value": "40 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "ETHW",
            "HashRate": "MH/s",
            "HashRateValue": "1950",
            "Power": "620",
            "Algorithm": "etchash/ethash"
        },
        "Imgs": [
            "JasminerX16Q1950.webp"
        ]
    },
    {
        "Id": "jasminer-x16-p-5800",
        "Brand": "Jasminer",
        "Model": "X16P",
        "HashRate": "5800 MH/s",
        "Popular": true,
        "Prices": [
            {
                "Value": 9900,
                "Delivery": "Поставка 40-50 дней",
                "Source": "w"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "5800 MH/s"
            },
            {
                "Name": "Потребление",
                "Value": "1900 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "ETCHASH/ETHASH"
            },
            {
                "Name": "Монеты",
                "Value": "ETC/ETHW"
            },
            {
                "Name": "Уровень шума",
                "Value": "70 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "ETHW",
            "HashRate": "MH/s",
            "HashRateValue": "5800",
            "Power": "1900",
            "Algorithm": "etchash/ethash"
        },
        "Imgs": [
            "JasminerX16P5800.webp"
        ]
    },
    {
        "Id": "antminer-s21-pro-234",
        "Brand": "Antminer",
        "Model": "S21 Pro",
        "HashRate": "234 TH/s",
        "Popular": true,
        "Prices": [
            {
                "Value": 5080,
                "Delivery": "Поставка 105-115 дней",
                "Source": "w"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "234 TH/s"
            },
            {
                "Name": "Потребление",
                "Value": "3500 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "SHA-256"
            },
            {
                "Name": "Монеты",
                "Value": "BTC/BCH"
            },
            {
                "Name": "Уровень шума",
                "Value": "76 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "BTC",
            "HashRate": "TH/s",
            "HashRateValue": "234",
            "Power": "3500",
            "Algorithm": "sha-256"
        },
        "Imgs": [
            "AntminerS21Pro.webp"
        ]
    },
    {
        "Id": "antminer-s21-200",
        "Brand": "Antminer",
        "Model": "S21",
        "HashRate": "200 TH/s",
        "Popular": true,
        "Prices": [
            {
                "Value": 4100,
                "Delivery": "Склад Москва",
                "Source": "w"
            },
            {
                "Value": 4150,
                "Delivery": "Поставка 20-30 дней",
                "Source": "w"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "200 TH/s"
            },
            {
                "Name": "Потребление",
                "Value": "3500 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "SHA-256"
            },
            {
                "Name": "Монеты",
                "Value": "BTC/BCH"
            },
            {
                "Name": "Уровень шума",
                "Value": "76 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "BTC",
            "HashRate": "TH/s",
            "HashRateValue": "200",
            "Power": "3500",
            "Algorithm": "sha-256"
        },
        "Imgs": [
            "AntminerS21.webp"
        ]
    },
    {
        "Id": "antminer-s21-195",
        "Brand": "Antminer",
        "Model": "S21",
        "HashRate": "195 TH/s",
        "Popular": false,
        "Prices": [
            {
                "Value": 3850,
                "Delivery": "Поставка 20-30 дней",
                "Source": "w"
            },
            {
                "Value": 3930,
                "Delivery": "Склад Москва",
                "Source": "w"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "195 TH/s"
            },
            {
                "Name": "Потребление",
                "Value": "3400 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "SHA-256"
            },
            {
                "Name": "Монеты",
                "Value": "BTC/BCH"
            },
            {
                "Name": "Уровень шума",
                "Value": "76 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "BTC",
            "HashRate": "TH/s",
            "HashRateValue": "195",
            "Power": "3400",
            "Algorithm": "sha-256"
        },
        "Imgs": [
            "AntminerS21.webp"
        ]
    },
    {
        "Id": "antminer-s21-188",
        "Brand": "Antminer",
        "Model": "S21",
        "HashRate": "188 TH/s",
        "Popular": false,
        "Prices": [
            {
                "Value": 3700,
                "Delivery": "Поставка 20-30 дней",
                "Source": "w"
            },
            {
                "Value": 3710,
                "Delivery": "Склад Москва",
                "Source": "w"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "188 TH/s"
            },
            {
                "Name": "Потребление",
                "Value": "3300 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "SHA-256"
            },
            {
                "Name": "Монеты",
                "Value": "BTC/BCH"
            },
            {
                "Name": "Уровень шума",
                "Value": "76 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "BTC",
            "HashRate": "TH/s",
            "HashRateValue": "188",
            "Power": "3300",
            "Algorithm": "sha-256"
        },
        "Imgs": [
            "AntminerS21.webp"
        ]
    },
    {
        "Id": "antminer-t21-190",
        "Brand": "Antminer",
        "Model": "T21",
        "HashRate": "190 TH/s",
        "Popular": true,
        "Prices": [
            {
                "Value": 3120,
                "Delivery": "Поставка 20-30 дней",
                "Source": "w"
            },
            {
                "Value": 3180,
                "Delivery": "Склад Москва",
                "Source": "w"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "190 TH/s"
            },
            {
                "Name": "Потребление",
                "Value": "3600 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "SHA-256"
            },
            {
                "Name": "Монеты",
                "Value": "BTC/BCH"
            },
            {
                "Name": "Уровень шума",
                "Value": "76 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "BTC",
            "HashRate": "TH/s",
            "HashRateValue": "190",
            "Power": "3600",
            "Algorithm": "sha-256"
        },
        "Imgs": [
            "AntminerT21.webp"
        ]
    },
    {
        "Id": "antminer-s19k-pro-120",
        "Brand": "Antminer",
        "Model": "S19k Pro",
        "HashRate": "120 TH/s",
        "Popular": false,
        "Prices": [
            {
                "Value": 1640,
                "Delivery": "Склад Москва",
                "Source": "w"
            },
            {
                "Value": 1760,
                "Delivery": "Поставка 20-30 дней",
                "Source": "w"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "120 TH/s"
            },
            {
                "Name": "Потребление",
                "Value": "2760 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "SHA-256"
            },
            {
                "Name": "Монеты",
                "Value": "BTC/BCH"
            },
            {
                "Name": "Уровень шума",
                "Value": "80 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "BTC",
            "HashRate": "TH/s",
            "HashRateValue": "120",
            "Power": "2760",
            "Algorithm": "sha-256"
        },
        "Imgs": [
            "AntminerS19kPro.webp"
        ]
    },
    {
        "Id": "antminer-e9-pro-3780",
        "Brand": "Antminer",
        "Model": "E9 Pro",
        "HashRate": "3780 MH/s",
        "Popular": false,
        "Prices": [
            {
                "Value": 4230,
                "Delivery": "Склад Москва",
                "Source": "w"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "3780 MH/s"
            },
            {
                "Name": "Потребление",
                "Value": "2200 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "ETCHASH/ETHASH"
            },
            {
                "Name": "Монеты",
                "Value": "ETC/ETHW"
            },
            {
                "Name": "Уровень шума",
                "Value": "80 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "ETHW",
            "HashRate": "MH/s",
            "HashRateValue": "3780",
            "Power": "2200",
            "Algorithm": "etchash/ethash"
        },
        "Imgs": [
            "AntminerE9Pro.webp"
        ]
    },
    {
        "Id": "antminer-e9-pro-3680",
        "Brand": "Antminer",
        "Model": "E9 Pro",
        "HashRate": "3680 MH/s",
        "Popular": false,
        "Prices": [
            {
                "Value": 3500,
                "Delivery": "Поставка 20-30 дней",
                "Source": "mc"
            },
            {
                "Value": 4030,
                "Delivery": "Склад Москва",
                "Source": "w"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "3680 MH/s"
            },
            {
                "Name": "Потребление",
                "Value": "2200 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "ETCHASH/ETHASH"
            },
            {
                "Name": "Монеты",
                "Value": "ETC/ETHW"
            },
            {
                "Name": "Уровень шума",
                "Value": "80 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "ETHW",
            "HashRate": "MH/s",
            "HashRateValue": "3680",
            "Power": "2200",
            "Algorithm": "etchash/ethash"
        },
        "Imgs": [
            "AntminerE9Pro.webp"
        ]
    },
    {
        "Id": "antminer-l7-9500",
        "Brand": "Antminer",
        "Model": "L7",
        "HashRate": "9500 MH/s",
        "Popular": false,
        "Prices": [
            {
                "Value": 6400,
                "Delivery": "Склад Москва",
                "Source": "w"
            },
            {
                "Value": 6570,
                "Delivery": "Поставка 75-85 дней",
                "Source": "w"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "9500 MH/s"
            },
            {
                "Name": "Потребление",
                "Value": "3300 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "Scrypt"
            },
            {
                "Name": "Монеты",
                "Value": "LTC/DOGE"
            },
            {
                "Name": "Уровень шума",
                "Value": "80 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "DOGE",
            "HashRate": "MH/s",
            "HashRateValue": "9500",
            "Power": "3300",
            "Algorithm": "scrypt"
        },
        "Imgs": [
            "AntminerL7.webp"
        ]
    },
    {
        "Id": "antminer-l7-9300",
        "Brand": "Antminer",
        "Model": "L7",
        "HashRate": "9300 MH/s",
        "Popular": false,
        "Prices": [
            {
                "Value": 6300,
                "Delivery": "Склад Москва",
                "Source": "w"
            },
            {
                "Value": 6370,
                "Delivery": "Поставка 75-85 дней",
                "Source": "w"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "9300 MH/s"
            },
            {
                "Name": "Потребление",
                "Value": "3300 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "Scrypt"
            },
            {
                "Name": "Монеты",
                "Value": "LTC/DOGE"
            },
            {
                "Name": "Уровень шума",
                "Value": "80 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "DOGE",
            "HashRate": "MH/s",
            "HashRateValue": "9300",
            "Power": "3300",
            "Algorithm": "scrypt"
        },
        "Imgs": [
            "AntminerL7.webp"
        ]
    },
    {
        "Id": "antminer-l7-9050",
        "Brand": "Antminer",
        "Model": "L7",
        "HashRate": "9050 MH/s",
        "Popular": false,
        "Prices": [
            {
                "Value": 6160,
                "Delivery": "Поставка 75-85 дней",
                "Source": "w"
            },
            {
                "Value": 6200,
                "Delivery": "Склад Москва",
                "Source": "w"
            }            
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "9050 MH/s"
            },
            {
                "Name": "Потребление",
                "Value": "3300 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "Scrypt"
            },
            {
                "Name": "Монеты",
                "Value": "LTC/DOGE"
            },
            {
                "Name": "Уровень шума",
                "Value": "80 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "DOGE",
            "HashRate": "MH/s",
            "HashRateValue": "9050",
            "Power": "3300",
            "Algorithm": "scrypt"
        },
        "Imgs": [
            "AntminerL7.webp"
        ]
    },
    {
        "Id": "whatsminer-m60-19-9W-166",
        "Brand": "Whatsminer",
        "Model": "M60 19,9W",
        "HashRate": "166 TH/s",
        "Popular": false,
        "Prices": [
            {
                "Value": 3420,
                "Delivery": "Склад Москва",
                "Source": "w"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "166 TH/s"
            },
            {
                "Name": "Потребление",
                "Value": "3320 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "SHA-256"
            },
            {
                "Name": "Монеты",
                "Value": "BTC/BCH"
            },
            {
                "Name": "Уровень шума",
                "Value": "80 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "BTC",
            "HashRate": "TH/s",
            "HashRateValue": "166",
            "Power": "3320",
            "Algorithm": "sha-256"
        },
        "Imgs": [
            "WhatsminerM60.webp"
        ]
    },
    {
        "Id": "whatsminer-m50s-26W-132",
        "Brand": "Whatsminer",
        "Model": "M50S 26W",
        "HashRate": "132 TH/s",
        "Popular": false,
        "Prices": [
            {
                "Value": 1950,
                "Delivery": "Склад Москва",
                "Source": "w"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "132 TH/s"
            },
            {
                "Name": "Потребление",
                "Value": "3432 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "SHA-256"
            },
            {
                "Name": "Монеты",
                "Value": "BTC/BCH"
            },
            {
                "Name": "Уровень шума",
                "Value": "80 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "BTC",
            "HashRate": "TH/s",
            "HashRateValue": "132",
            "Power": "3432",
            "Algorithm": "sha-256"
        },
        "Imgs": [
            "WhatsminerM50S.webp"
        ]
    },
    {
        "Id": "iceriver-kas-kS3m-6",
        "Brand": "Iceriver",
        "Model": "KAS KS3M",
        "HashRate": "6 TH/s",
        "Popular": false,
        "Prices": [
            {
                "Value": 6855,
                "Delivery": "Склад Москва",
                "Source": "w"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "6 TH/s"
            },
            {
                "Name": "Потребление",
                "Value": "3200 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "kHeavyHash"
            },
            {
                "Name": "Монеты",
                "Value": "KASPA"
            },
            {
                "Name": "Уровень шума",
                "Value": "80 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "KAS",
            "HashRate": "TH/s",
            "HashRateValue": "6",
            "Power": "3200",
            "Algorithm": "kheavyhash"
        },
        "Imgs": [
            "IceriverKASKS3M.webp"
        ]
    },
    {
        "Id": "iceriver-kas-ks0-pro-200",
        "Brand": "Iceriver",
        "Model": "KAS KS0 Pro",
        "HashRate": "200 GH/s",
        "Popular": false,
        "Prices": [
            {
                "Value": 575,
                "Delivery": "Склад Москва",
                "Source": "w"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "200 GH/s"
            },
            {
                "Name": "Потребление",
                "Value": "100 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "kHeavyHash"
            },
            {
                "Name": "Монеты",
                "Value": "KASPA"
            },
            {
                "Name": "Уровень шума",
                "Value": "0 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "KAS",
            "HashRate": "TH/s",
            "HashRateValue": "0.2",
            "Power": "100",
            "Algorithm": "kheavyhash"
        },
        "Imgs": [
            "IceriverKASKS0Pro.webp"
        ]
    },
    {
        "Id": "bombax-ez100c-3200",
        "Brand": "Bombax",
        "Model": "EZ100-C",
        "HashRate": "3200 MH/s",
        "Popular": false,
        "Prices": [
            {
                "Value": 4680,
                "Delivery": "Поставка 20-40 дней",
                "Source": "mc"
            }
        ],
        "Characteristics": [
            {
                "Name": "Производительность",
                "Value": "3200 MH/s"
            },
            {
                "Name": "Потребление",
                "Value": "570 Вт"
            },
            {
                "Name": "Алгоритм",
                "Value": "ETCHASH/ETHASH"
            },
            {
                "Name": "Монеты",
                "Value": "ETC/ETHW"
            },
            {
                "Name": "Уровень шума",
                "Value": "40 Дб"
            }
        ],
        "MiningCalculator": {
            "Coin": "ETHW",
            "HashRate": "MH/s",
            "HashRateValue": "3200",
            "Power": "570",
            "Algorithm": "etchash/ethash"
        },
        "Imgs": [
            "BombaxEZ100C3200.webp"
        ]
    }
]`),
    coins: JSON.parse(`{
  "coins": {
    "0xBitcoin": {
      "id": 315,
      "tag": "0xBTC",
      "algorithm": "SHA3Solidity",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "365Coin": {
      "id": 74,
      "tag": "365",
      "algorithm": "Keccak",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Abelian": {
      "id": 397,
      "tag": "ABEL",
      "algorithm": "Abelhash",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": true
    },
    "Aced": {
      "id": 268,
      "tag": "ACED",
      "algorithm": "X16S",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Actinium": {
      "id": 290,
      "tag": "ACM",
      "algorithm": "Lyra2z",
      "lagging": true,
      "listed": true,
      "status": "No available stats",
      "testing": false
    },
    "Aiden": {
      "id": 65,
      "tag": "ADN",
      "algorithm": "Scrypt-OG",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Adzcoin": {
      "id": 157,
      "tag": "ADZ",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Aeternity": {
      "id": 297,
      "tag": "AE",
      "algorithm": "CuckooCycle",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Aeon": {
      "id": 192,
      "tag": "AEON",
      "algorithm": "K12",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Argoneum": {
      "id": 285,
      "tag": "AGM",
      "algorithm": "PHI2",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Aion": {
      "id": 272,
      "tag": "AION",
      "algorithm": "Aion",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "AIPowerGrid": {
      "id": 392,
      "tag": "AIPG",
      "algorithm": "KawPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Aittcoin": {
      "id": 407,
      "tag": "AITT",
      "algorithm": "KawPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Alephium": {
      "id": 349,
      "tag": "ALPH",
      "algorithm": "Blake3",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Altcoinchain": {
      "id": 384,
      "tag": "ALT",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Ambercoin": {
      "id": 133,
      "tag": "AMBER",
      "algorithm": "X13",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Amsterdamcoin": {
      "id": 145,
      "tag": "AMS",
      "algorithm": "Quark",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Anokas": {
      "id": 412,
      "tag": "ANOK",
      "algorithm": "KawPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Anon": {
      "id": 276,
      "tag": "ANON",
      "algorithm": "EquihashZero",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "ARG-Scrypt": {
      "id": 158,
      "tag": "ARG",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "ARG-SHA": {
      "id": 170,
      "tag": "ARG",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Aricoin": {
      "id": 110,
      "tag": "ARI",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Pirate": {
      "id": 298,
      "tag": "ARRR",
      "algorithm": "Equihash",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "AUR-SHA": {
      "id": 228,
      "tag": "AUR",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": true,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "AUR-Scrypt": {
      "id": 40,
      "tag": "AUR",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Avian": {
      "id": 344,
      "tag": "AVN",
      "algorithm": "X16RT",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Aves": {
      "id": 383,
      "tag": "AVS",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Axe": {
      "id": 313,
      "tag": "AXE",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Azart": {
      "id": 281,
      "tag": "AZART",
      "algorithm": "X17",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "BitcoinDiamond": {
      "id": 278,
      "tag": "BCD",
      "algorithm": "BCD",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "BitcoinCash": {
      "id": 193,
      "tag": "BCH",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Bitcoin Interest": {
      "id": 245,
      "tag": "BCI",
      "algorithm": "ProgPow",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Bytecoin": {
      "id": 103,
      "tag": "BCN",
      "algorithm": "CryptoNight",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Beam": {
      "id": 294,
      "tag": "BEAM",
      "algorithm": "BeamHashIII",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Belacoin": {
      "id": 182,
      "tag": "BELA",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "Bugna": {
      "id": 410,
      "tag": "BGA",
      "algorithm": "kHeavyHash",
      "hashRate": "TH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Bitgesell": {
      "id": 343,
      "tag": "BGL",
      "algorithm": "Keccak",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Bipcoin": {
      "id": 171,
      "tag": "BIP",
      "algorithm": "CryptoNight",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Bismuth": {
      "id": 232,
      "tag": "BIS",
      "algorithm": "SHA-224",
      "lagging": false,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "BitNet": {
      "id": 387,
      "tag": "BIT",
      "algorithm": "Aurum",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "BitCash": {
      "id": 304,
      "tag": "BITC",
      "algorithm": "X25X",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Bloc.money": {
      "id": 312,
      "tag": "BLOC",
      "algorithm": "CryptoNightHaven",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Blocx": {
      "id": 364,
      "tag": "BLOCX",
      "algorithm": "X11",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Dobbscoin": {
      "id": 131,
      "tag": "BOB",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "BitSend": {
      "id": 201,
      "tag": "BSD",
      "algorithm": "Xevan",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "BlockStamp": {
      "id": 314,
      "tag": "BST",
      "algorithm": "BlockStamp",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "GlobalBoost-Y": {
      "id": 138,
      "tag": "BSTY",
      "algorithm": "Yescrypt",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "BitcoinSV": {
      "id": 289,
      "tag": "BSV",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Bata": {
      "id": 144,
      "tag": "BTA",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": false,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Bitcoin": {
      "id": 1,
      "tag": "BTC",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "popular": true,
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false,
      "img": "tg-channel-news-1.jpg"
    },
    "BitcoinPrivate": {
      "id": 230,
      "tag": "BTCP",
      "algorithm": "EquihashZero",
      "lagging": true,
      "listed": true,
      "status": "Mining paused",
      "testing": false
    },
    "BitcoinZ": {
      "id": 207,
      "tag": "BTCZ",
      "algorithm": "Zhash",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "BitcoinGold": {
      "id": 214,
      "tag": "BTG",
      "algorithm": "Zhash",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Bytom": {
      "id": 242,
      "tag": "BTM",
      "algorithm": "Tensority",
      "lagging": false,
      "listed": true,
      "status": "PoW phase over",
      "testing": false
    },
    "Bitmark": {
      "id": 111,
      "tag": "BTM",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Bitnet BTN": {
      "id": 378,
      "tag": "BTN",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Bitcore": {
      "id": 202,
      "tag": "BTX",
      "algorithm": "Mega-BTX",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Burnercoin": {
      "id": 90,
      "tag": "BURN",
      "algorithm": "X13",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Bulwark": {
      "id": 224,
      "tag": "BWK",
      "algorithm": "NIST5",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Cachecoin": {
      "id": 97,
      "tag": "CACH",
      "algorithm": "Chacha (Nf18)",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Cannabiscoin": {
      "id": 188,
      "tag": "CANN",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "BottleCaps": {
      "id": 120,
      "tag": "CAP",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Kaspa Classic": {
      "id": 408,
      "tag": "CAS",
      "algorithm": "Pyrin",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Litecash": {
      "id": 326,
      "tag": "CASH",
      "algorithm": "Equihash (150,5)",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Catcoin": {
      "id": 198,
      "tag": "CAT",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Canxium": {
      "id": 373,
      "tag": "CAU",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Bullion": {
      "id": 126,
      "tag": "CBX",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Conceal": {
      "id": 305,
      "tag": "CCX",
      "algorithm": "CryptoNightGPU",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Conflux": {
      "id": 337,
      "tag": "CFX",
      "algorithm": "Octopus",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "X-Children": {
      "id": 116,
      "tag": "CHILD",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Nervos": {
      "id": 321,
      "tag": "CKB",
      "algorithm": "Eaglesong",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Checkcoin": {
      "id": 123,
      "tag": "CKC",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Callisto": {
      "id": 283,
      "tag": "CLO",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Cloakcoin": {
      "id": 88,
      "tag": "CLOAK",
      "algorithm": "X13",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Clore": {
      "id": 362,
      "tag": "CLORE",
      "algorithm": "KawPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Commercium": {
      "id": 255,
      "tag": "CMM",
      "algorithm": "Equihash",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "CRowdCLassic": {
      "id": 226,
      "tag": "CRCL",
      "algorithm": "NeoScrypt",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Creativecoin": {
      "id": 199,
      "tag": "CREA",
      "algorithm": "Keccak-C",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Creamcoin": {
      "id": 206,
      "tag": "CRM",
      "algorithm": "Skein",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "CrocodileCash": {
      "id": 208,
      "tag": "CROC",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Crown": {
      "id": 165,
      "tag": "CRW",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Cryptcoin": {
      "id": 86,
      "tag": "CRYPT",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Crypto": {
      "id": 134,
      "tag": "CTO",
      "algorithm": "Lyra2RE",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Cortex": {
      "id": 329,
      "tag": "CTXC",
      "algorithm": "Cortex",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Curecoin": {
      "id": 76,
      "tag": "CURE",
      "algorithm": "F@H",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Denarius": {
      "id": 187,
      "tag": "D",
      "algorithm": "Tribus",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Dash": {
      "id": 34,
      "tag": "DASH",
      "algorithm": "X11",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Dubaicoin": {
      "id": 271,
      "tag": "DBIX",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Decred": {
      "id": 152,
      "tag": "DCR",
      "algorithm": "Blake (14r)",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": true
    },
    "Dinastycoin": {
      "id": 227,
      "tag": "DCY",
      "algorithm": "RandomX",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Deutsche eMark": {
      "id": 180,
      "tag": "DEM",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Dero": {
      "id": 291,
      "tag": "DERO",
      "algorithm": "AstroBWT",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "DGB-Odocrypt": {
      "id": 112,
      "tag": "DGB",
      "algorithm": "Odocrypt",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "DGB-Scrypt": {
      "id": 28,
      "tag": "DGB",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "DGB-Skein": {
      "id": 114,
      "tag": "DGB",
      "algorithm": "Skein",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "DGB-Qubit": {
      "id": 115,
      "tag": "DGB",
      "algorithm": "Qubit",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "DGB-SHA": {
      "id": 113,
      "tag": "DGB",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "DGC-X11": {
      "id": 125,
      "tag": "DGC",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "DGC-Scrypt": {
      "id": 27,
      "tag": "DGC",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "DGC-SHA": {
      "id": 124,
      "tag": "DGC",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Diabase": {
      "id": 372,
      "tag": "DIAC",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Dinero": {
      "id": 236,
      "tag": "DIN",
      "algorithm": "NeoScrypt",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "DinarTether": {
      "id": 399,
      "tag": "DINT",
      "algorithm": "KawPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Diamond": {
      "id": 43,
      "tag": "DMD",
      "algorithm": "Groestl",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Darknet": {
      "id": 153,
      "tag": "DNET",
      "algorithm": "Quark",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Dynexcoin": {
      "id": 359,
      "tag": "DNX",
      "algorithm": "DynexSolve",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Dogecoin": {
      "id": 6,
      "tag": "DOGE",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "popular": true,
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false,
      "img": "tg-channel-news-2.jpg"
    },
    "Dogether": {
      "id": 393,
      "tag": "DOGETHER",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "DopeCoin": {
      "id": 61,
      "tag": "DOPE",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "DigitalpriceClassic": {
      "id": 183,
      "tag": "DPC",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Dashcoin": {
      "id": 129,
      "tag": "DSH",
      "algorithm": "CryptoNight",
      "lagging": false,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Parallel-Scrypt": {
      "id": 140,
      "tag": "DUO",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Parallel-SHA": {
      "id": 141,
      "tag": "DUO",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Earthcoin": {
      "id": 19,
      "tag": "EAC",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Etica": {
      "id": 388,
      "tag": "ETI",
      "algorithm": "SHA3Solidity",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "EtherGem": {
      "id": 307,
      "tag": "EGEM",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Ellaism": {
      "id": 221,
      "tag": "ELLA",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Elliot": {
      "id": 251,
      "tag": "ELLI",
      "algorithm": "Xevan",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Einsteinium": {
      "id": 15,
      "tag": "EMC2",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Entropycoin": {
      "id": 79,
      "tag": "ENC",
      "algorithm": "Scrypt-N",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "Experiencecoin": {
      "id": 136,
      "tag": "EPC",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Ergo": {
      "id": 340,
      "tag": "ERG",
      "algorithm": "Autolykos",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "EtherSocial": {
      "id": 320,
      "tag": "ESN",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "EthereumClassic": {
      "id": 162,
      "tag": "ETC",
      "algorithm": "Etchash",
      "hashRate": "MH/s",
      "popular": true,
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false,
      "img": "tg-channel-news-3.jpg"
    },
    "Ethereum": {
      "id": 151,
      "tag": "ETH",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "EthereumFair": {
      "id": 355,
      "tag": "ETHF",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Etho": {
      "id": 306,
      "tag": "ETHO",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "EthereumPoW": {
      "id": 353,
      "tag": "ETHW",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Electroneum": {
      "id": 213,
      "tag": "ETN",
      "algorithm": "CryptoNight",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Electronero": {
      "id": 284,
      "tag": "ETNX",
      "algorithm": "CryptoNightFast",
      "lagging": true,
      "listed": false,
      "status": "Chain forked",
      "testing": false
    },
    "Metaverse": {
      "id": 209,
      "tag": "ETP",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Euno": {
      "id": 310,
      "tag": "EUNO",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Evrmore": {
      "id": 413,
      "tag": "EVR",
      "algorithm": "EvrProgPow",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Execoin": {
      "id": 20,
      "tag": "EXE",
      "algorithm": "Scrypt-N",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Exosis": {
      "id": 316,
      "tag": "EXO",
      "algorithm": "X16R",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Expanse": {
      "id": 154,
      "tag": "EXP",
      "algorithm": "FRKHash",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": true
    },
    "Fantomcoin": {
      "id": 102,
      "tag": "FCN",
      "algorithm": "CryptoNight",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "Firo": {
      "id": 175,
      "tag": "FIRO",
      "algorithm": "FiroPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Folm": {
      "id": 241,
      "tag": "FLM",
      "algorithm": "PHI1612",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Florin": {
      "id": 222,
      "tag": "FLO",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "Rebrand to PIN in progress",
      "testing": false
    },
    "Fluttercoin": {
      "id": 36,
      "tag": "FLT",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Flux": {
      "id": 287,
      "tag": "FLUX",
      "algorithm": "PoUW",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Frencoin": {
      "id": 380,
      "tag": "FREN",
      "algorithm": "KawPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Freshcoin": {
      "id": 118,
      "tag": "FRSH",
      "algorithm": "Fresh",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Fsociety": {
      "id": 368,
      "tag": "FSC",
      "algorithm": "GhostRider",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Fastcoin": {
      "id": 63,
      "tag": "FST",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Feathercoin": {
      "id": 8,
      "tag": "FTC",
      "algorithm": "NeoScrypt",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "GameCredits": {
      "id": 147,
      "tag": "GAME",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": false,
      "listed": true,
      "status": "PoW phase over",
      "testing": false
    },
    "Goldblocks": {
      "id": 160,
      "tag": "GB",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "GoByte": {
      "id": 225,
      "tag": "GBX",
      "algorithm": "NeoScrypt",
      "lagging": true,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "GDenomination": {
      "id": 50,
      "tag": "GDN",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "Geocoin": {
      "id": 135,
      "tag": "GEO",
      "algorithm": "Qubit",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Gexan": {
      "id": 308,
      "tag": "GEX",
      "algorithm": "PHI2",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Gincoin": {
      "id": 250,
      "tag": "GIN",
      "algorithm": "X16RT",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Globalcoin": {
      "id": 81,
      "tag": "GLC",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Gemlink": {
      "id": 288,
      "tag": "GLINK",
      "algorithm": "Zhash",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Goalcoin": {
      "id": 87,
      "tag": "GOAL",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "GamePass": {
      "id": 376,
      "tag": "GPN",
      "algorithm": "KawPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "GainProX": {
      "id": 367,
      "tag": "GPRX",
      "algorithm": "GhostRider",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Graft": {
      "id": 261,
      "tag": "GRFT",
      "algorithm": "RandomXG",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Grimm": {
      "id": 325,
      "tag": "GRIMM",
      "algorithm": "Equihash (150,5)",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Grin-CT31": {
      "id": 299,
      "tag": "GRIN",
      "algorithm": "Cuckatoo31",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Grin-CT32": {
      "id": 324,
      "tag": "GRIN",
      "algorithm": "Cuckatoo32",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Grin-CR29": {
      "id": 293,
      "tag": "GRIN",
      "algorithm": "Cuckarooz29",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Garlicoin": {
      "id": 243,
      "tag": "GRLC",
      "algorithm": "Allium",
      "lagging": true,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "GroestlCoin": {
      "id": 48,
      "tag": "GRS",
      "algorithm": "Groestl",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Gravium": {
      "id": 262,
      "tag": "GRV",
      "algorithm": "X16R",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Gentarium": {
      "id": 267,
      "tag": "GTM",
      "algorithm": "Lyra2z",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Halcyon": {
      "id": 122,
      "tag": "HAL",
      "algorithm": "NeoScrypt",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Hanacoin": {
      "id": 270,
      "tag": "HANA",
      "algorithm": "Lyra2REv3",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Heldcoin": {
      "id": 253,
      "tag": "HDLC",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Hirocoin": {
      "id": 33,
      "tag": "HIRO",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Hilux": {
      "id": 295,
      "tag": "HLX",
      "algorithm": "X16R",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Handshake": {
      "id": 327,
      "tag": "HNS",
      "algorithm": "Handshake",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "HelpTheHomeless": {
      "id": 258,
      "tag": "HTH",
      "algorithm": "X25X",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Hoosat": {
      "id": 406,
      "tag": "HTN",
      "algorithm": "Pyrin",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Hush": {
      "id": 168,
      "tag": "HUSH",
      "algorithm": "Equihash",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Heavycoin": {
      "id": 35,
      "tag": "HVC",
      "algorithm": "Heavycoin",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "Hypra": {
      "id": 365,
      "tag": "HYP",
      "algorithm": "EthashB3",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Ivugeocoin": {
      "id": 142,
      "tag": "IEC",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Imagecoin": {
      "id": 311,
      "tag": "IMG",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Influxcoin": {
      "id": 149,
      "tag": "INFX",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Innova": {
      "id": 229,
      "tag": "INN",
      "algorithm": "NeoScrypt",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Iridium": {
      "id": 345,
      "tag": "IRD",
      "algorithm": "CryptoNightTurtle",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "IronFish": {
      "id": 411,
      "tag": "IRON",
      "algorithm": "FishHash",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "IronFish Old": {
      "id": 360,
      "tag": "IRON",
      "algorithm": "IronFish",
      "lagging": false,
      "listed": false,
      "status": "AlgoSwitch",
      "testing": false
    },
    "Jackpotcoin": {
      "id": 80,
      "tag": "JPC",
      "algorithm": "JHA",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Karmacoin": {
      "id": 38,
      "tag": "KARM",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Kaspa": {
      "id": 352,
      "tag": "KAS",
      "algorithm": "kHeavyHash",
      "hashRate": "TH/s",
      "popular": true,
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false,
      "img": "tg-channel-news-4.jpg"
    },
    "Kylacoin": {
      "id": 379,
      "tag": "KCN",
      "algorithm": "SHA3d",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Kadena": {
      "id": 334,
      "tag": "KDA",
      "algorithm": "Kadena",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Kiirocoin": {
      "id": 363,
      "tag": "KIIRO",
      "algorithm": "FiroPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Karlsen": {
      "id": 386,
      "tag": "KLS",
      "algorithm": "Karlsenhash",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Komodo": {
      "id": 174,
      "tag": "KMD",
      "algorithm": "Equihash",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Krypton": {
      "id": 163,
      "tag": "KR",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Karbo": {
      "id": 176,
      "tag": "KRB",
      "algorithm": "CryptoNight",
      "lagging": false,
      "listed": true,
      "status": "AlgoSwitch",
      "testing": false
    },
    "LBRY": {
      "id": 164,
      "tag": "LBC",
      "algorithm": "LBRY",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "LitecoinCash": {
      "id": 231,
      "tag": "LCC",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "LitecoinPlus": {
      "id": 275,
      "tag": "LCP",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Logicoin": {
      "id": 57,
      "tag": "LGC",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "Legendarycoin": {
      "id": 68,
      "tag": "LGD",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "LimecoinX": {
      "id": 46,
      "tag": "LIMX",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Linx": {
      "id": 195,
      "tag": "LINX",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Loki": {
      "id": 249,
      "tag": "LOKI",
      "algorithm": "RandomXL",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Larissa": {
      "id": 398,
      "tag": "LRS",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Litecoin": {
      "id": 4,
      "tag": "LTC",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "LitecoinX": {
      "id": 78,
      "tag": "LTCX",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Lethean": {
      "id": 296,
      "tag": "LTHN",
      "algorithm": "ChukwaV2",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Luxcoin": {
      "id": 212,
      "tag": "LUX",
      "algorithm": "RX2",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Magnet": {
      "id": 237,
      "tag": "MAG",
      "algorithm": "X11",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Mano": {
      "id": 254,
      "tag": "MANO",
      "algorithm": "Lyra2z",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Marucoin ": {
      "id": 84,
      "tag": "MARU",
      "algorithm": "X13",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "Maxcoin": {
      "id": 73,
      "tag": "MAX",
      "algorithm": "Keccak",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Maza": {
      "id": 70,
      "tag": "MAZA",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "MCT+": {
      "id": 257,
      "tag": "MCT",
      "algorithm": "Lyra2z",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Megacoin": {
      "id": 26,
      "tag": "MEC",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Kittehcoin": {
      "id": 16,
      "tag": "MEOW",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Meowcoin": {
      "id": 354,
      "tag": "MEWC",
      "algorithm": "MeowPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Millionaire": {
      "id": 91,
      "tag": "MIL",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Mindcoin": {
      "id": 155,
      "tag": "MND",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Minex": {
      "id": 265,
      "tag": "MNX",
      "algorithm": "Mars",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Monacoin": {
      "id": 148,
      "tag": "MONA",
      "algorithm": "Lyra2REv2",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Mooncoin": {
      "id": 119,
      "tag": "MOON",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "microCoin": {
      "id": 41,
      "tag": "MRC",
      "algorithm": "Chacha (Nf14)",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "Masari": {
      "id": 273,
      "tag": "MSR",
      "algorithm": "CryptoNightFastV2",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "MonetaryUnit": {
      "id": 143,
      "tag": "MUE",
      "algorithm": "X11",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Muniti": {
      "id": 47,
      "tag": "MUN",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "Musicoin": {
      "id": 178,
      "tag": "MUSIC",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "MWC-CT31": {
      "id": 323,
      "tag": "MWC",
      "algorithm": "Cuckatoo31",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "MWC-CR29": {
      "id": 322,
      "tag": "MWC",
      "algorithm": "Cuckarood29",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Nautiluscoin": {
      "id": 82,
      "tag": "NAUT",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Neoxa": {
      "id": 351,
      "tag": "NEOX",
      "algorithm": "KawPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Netsis": {
      "id": 394,
      "tag": "NET",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Nexa": {
      "id": 357,
      "tag": "NEXA",
      "algorithm": "NexaPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Nimiq": {
      "id": 300,
      "tag": "NIM",
      "algorithm": "Argon2d-NIM",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Nirmata": {
      "id": 405,
      "tag": "NIR",
      "algorithm": "ProgPowZ",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Nix": {
      "id": 264,
      "tag": "NIX",
      "algorithm": "Lyra2REv2",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Gulden": {
      "id": 64,
      "tag": "NLG",
      "algorithm": "Sigma",
      "lagging": false,
      "listed": false,
      "status": "AlgoSwitch",
      "testing": false
    },
    "Namecoin": {
      "id": 55,
      "tag": "NMC",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Noblecoin": {
      "id": 44,
      "tag": "NOBL",
      "algorithm": "M7M",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "DNotes": {
      "id": 146,
      "tag": "NOTE",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Novo": {
      "id": 381,
      "tag": "NOVO",
      "algorithm": "SHA256DT",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Energi": {
      "id": 282,
      "tag": "NRG",
      "algorithm": "Energi",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Nautilus": {
      "id": 409,
      "tag": "NTL",
      "algorithm": "Karlsenhash",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Novacoin": {
      "id": 30,
      "tag": "NVC",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Nexel-AI": {
      "id": 396,
      "tag": "NXL",
      "algorithm": "Karlsenhash",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Nexus": {
      "id": 302,
      "tag": "NXS",
      "algorithm": "NexusHash",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Nyancoin": {
      "id": 17,
      "tag": "NYAN",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Obsidian": {
      "id": 403,
      "tag": "OBN",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "OctaSpace": {
      "id": 361,
      "tag": "OCTA",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "DeepOnion": {
      "id": 216,
      "tag": "ONION",
      "algorithm": "X13",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Onix": {
      "id": 194,
      "tag": "ONX",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Orbitcoin": {
      "id": 72,
      "tag": "ORB",
      "algorithm": "NeoScrypt",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Galactrum": {
      "id": 233,
      "tag": "ORE",
      "algorithm": "Lyra2REv2",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Osmium": {
      "id": 414,
      "tag": "OSMI",
      "algorithm": "X11",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Paccoin": {
      "id": 239,
      "tag": "PAC",
      "algorithm": "X11",
      "lagging": false,
      "listed": true,
      "status": "Pow phase over",
      "testing": false
    },
    "Paprikacoin": {
      "id": 374,
      "tag": "PAPRY",
      "algorithm": "KawPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Pascalcoin": {
      "id": 172,
      "tag": "PASC",
      "algorithm": "RandomHash",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "PascalLite": {
      "id": 177,
      "tag": "PASL",
      "algorithm": "Pascal",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "PepePow": {
      "id": 385,
      "tag": "PEPEW",
      "algorithm": "Memehash",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Pigeoncoin": {
      "id": 246,
      "tag": "PGN",
      "algorithm": "X21S",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Pengolincoin": {
      "id": 332,
      "tag": "PGO",
      "algorithm": "CryptoNightTurtle",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Pinkcoin": {
      "id": 205,
      "tag": "PINK",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Pirl": {
      "id": 211,
      "tag": "PIRL",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Potcoin": {
      "id": 18,
      "tag": "POT",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Peercoin": {
      "id": 52,
      "tag": "PPC",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Procyon": {
      "id": 401,
      "tag": "PRCO",
      "algorithm": "KawPow",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Phoenixcoin": {
      "id": 71,
      "tag": "PXC",
      "algorithm": "NeoScrypt",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Prime-XI": {
      "id": 190,
      "tag": "PXI",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Pyrin": {
      "id": 391,
      "tag": "PYI",
      "algorithm": "Pyrin",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Québecoin": {
      "id": 45,
      "tag": "QBC",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Quazarcoin": {
      "id": 105,
      "tag": "QCN",
      "algorithm": "CryptoNight",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "QuarkChain": {
      "id": 318,
      "tag": "QKC",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Qyno": {
      "id": 269,
      "tag": "QNO",
      "algorithm": "NeoScrypt",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Quark": {
      "id": 137,
      "tag": "QRK",
      "algorithm": "Quark",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Quantum R L": {
      "id": 263,
      "tag": "QRL",
      "algorithm": "RandomX",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Rubycoin": {
      "id": 95,
      "tag": "RBY",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Reddcoin": {
      "id": 11,
      "tag": "RDD",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Ripoffcoin": {
      "id": 108,
      "tag": "RIPO",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Rito": {
      "id": 319,
      "tag": "RITO",
      "algorithm": "X21S",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "RonPaulCoin": {
      "id": 58,
      "tag": "RPC",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Reaction": {
      "id": 395,
      "tag": "RTC",
      "algorithm": "GhostRider",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Raptoreum": {
      "id": 347,
      "tag": "RTM",
      "algorithm": "GhostRider",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Rupee": {
      "id": 235,
      "tag": "RUP",
      "algorithm": "Lyra2REv2",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "Ravencoin": {
      "id": 234,
      "tag": "RVN",
      "algorithm": "KawPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Radiant": {
      "id": 356,
      "tag": "RXD",
      "algorithm": "SHA512256d",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Ryo": {
      "id": 260,
      "tag": "RYO",
      "algorithm": "CryptoNightGPU",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Razor": {
      "id": 96,
      "tag": "RZR",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "Saturn2coin": {
      "id": 39,
      "tag": "SAT2",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Satoxcoin": {
      "id": 375,
      "tag": "SATOX",
      "algorithm": "KawPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Sia": {
      "id": 161,
      "tag": "SC",
      "algorithm": "Sia",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Scorecoin": {
      "id": 181,
      "tag": "SCORE",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "ScPrime": {
      "id": 358,
      "tag": "SCP",
      "algorithm": "Sia",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Sedra": {
      "id": 404,
      "tag": "SDR",
      "algorithm": "kHeavyHash",
      "hashRate": "TH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Seraph": {
      "id": 247,
      "tag": "SERA",
      "algorithm": "PHI1612",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Sero": {
      "id": 328,
      "tag": "SERO",
      "algorithm": "ProgPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Shift": {
      "id": 156,
      "tag": "SHIFT",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Sibcoin": {
      "id": 169,
      "tag": "SIB",
      "algorithm": "X11Gost",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Signatum": {
      "id": 191,
      "tag": "SIGT",
      "algorithm": "Skunkhash",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Sinovate": {
      "id": 277,
      "tag": "SIN",
      "algorithm": "X25X",
      "lagging": true,
      "listed": false,
      "status": "AlgoSwitch",
      "testing": false
    },
    "Skeincoin": {
      "id": 244,
      "tag": "SKC",
      "algorithm": "Skein",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Skydoge": {
      "id": 369,
      "tag": "SKY",
      "algorithm": "Skydoge",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Sterlingcoin": {
      "id": 117,
      "tag": "SLG",
      "algorithm": "X13",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "SmartCash": {
      "id": 197,
      "tag": "SMART",
      "algorithm": "Keccak",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Smartcoin": {
      "id": 159,
      "tag": "SMC",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "Soilcoin": {
      "id": 189,
      "tag": "SOIL",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Sono": {
      "id": 204,
      "tag": "SONO",
      "algorithm": "SonoA",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Spaincoin": {
      "id": 12,
      "tag": "SPA",
      "algorithm": "Scrypt-N",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Savecoin": {
      "id": 77,
      "tag": "SPC",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Spider": {
      "id": 303,
      "tag": "SPDR",
      "algorithm": "PHI2",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "SimpleBank": {
      "id": 252,
      "tag": "SPLB",
      "algorithm": "NeoScrypt",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Securecoin": {
      "id": 139,
      "tag": "SRC",
      "algorithm": "Quark",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "Straks": {
      "id": 240,
      "tag": "STAK",
      "algorithm": "Lyra2REv2",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Startcoin": {
      "id": 132,
      "tag": "START",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Starcoin": {
      "id": 346,
      "tag": "STC",
      "algorithm": "CryptoNightSTC",
      "lagging": true,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Sumokoin": {
      "id": 196,
      "tag": "SUMO",
      "algorithm": "CryptoNightR",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Talkcoin": {
      "id": 94,
      "tag": "TAC",
      "algorithm": "NIST5",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "Tecra": {
      "id": 342,
      "tag": "TCR",
      "algorithm": "MTP-TCR",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Fedoracoin": {
      "id": 2,
      "tag": "TIPS",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Toncoin": {
      "id": 348,
      "tag": "TONCOIN",
      "algorithm": "Ton",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Traid": {
      "id": 274,
      "tag": "TRAID",
      "algorithm": "NeoScrypt",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Turtlecoin": {
      "id": 292,
      "tag": "TRTL",
      "algorithm": "ChukwaV2",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "BitTubeCash": {
      "id": 256,
      "tag": "TUBE",
      "algorithm": "CuckooCycle",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Trezarcoin": {
      "id": 215,
      "tag": "TZC",
      "algorithm": "NeoScrypt",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Ubiq": {
      "id": 173,
      "tag": "UBQ",
      "algorithm": "Ubqhash",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Unbreakable": {
      "id": 83,
      "tag": "UNB",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Universal": {
      "id": 223,
      "tag": "UNIT",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Unobtanium": {
      "id": 54,
      "tag": "UNO",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "eUtopium": {
      "id": 106,
      "tag": "UPM",
      "algorithm": "NIST5",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "uPlexa": {
      "id": 309,
      "tag": "UPX",
      "algorithm": "CryptoNightUPX",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Urocoin": {
      "id": 100,
      "tag": "URO",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "USDe": {
      "id": 31,
      "tag": "USDE",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "Ultracoin": {
      "id": 3,
      "tag": "UTC",
      "algorithm": "Chacha (Nf14)",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Vidulum": {
      "id": 331,
      "tag": "VDL",
      "algorithm": "EquihashZero",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Veil-ProgPow": {
      "id": 286,
      "tag": "VEIL",
      "algorithm": "ProgPow",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Veil-SHA": {
      "id": 335,
      "tag": "VEIL",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Veil-RandomX": {
      "id": 336,
      "tag": "VEIL",
      "algorithm": "RandomX",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Veilcoin": {
      "id": 98,
      "tag": "VEIL_old",
      "algorithm": "X13",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Viacoin": {
      "id": 107,
      "tag": "VIA",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Vivo": {
      "id": 200,
      "tag": "VIVO",
      "algorithm": "NeoScrypt",
      "lagging": true,
      "listed": false,
      "status": "Inactive",
      "testing": false
    },
    "Vultaic": {
      "id": 402,
      "tag": "VLC",
      "algorithm": "KawPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "VirtualMining": {
      "id": 62,
      "tag": "VMC",
      "algorithm": "Scrypt-N",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "Verus": {
      "id": 333,
      "tag": "VRSC",
      "algorithm": "VerusHash",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Vertcoin": {
      "id": 5,
      "tag": "VTC",
      "algorithm": "Verthash",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Vertical": {
      "id": 259,
      "tag": "VTL",
      "algorithm": "LBK3",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Worldcoin": {
      "id": 29,
      "tag": "WDC",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "X11": {
      "id": 69,
      "tag": "XC",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Cryptonite": {
      "id": 184,
      "tag": "XCN",
      "algorithm": "M7",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Dagger": {
      "id": 350,
      "tag": "XDAG",
      "algorithm": "RandomX",
      "lagging": true,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "DigitalNote": {
      "id": 104,
      "tag": "XDN",
      "algorithm": "Wish",
      "lagging": true,
      "listed": false,
      "status": "AlgoSwitch",
      "testing": false
    },
    "XDNA": {
      "id": 266,
      "tag": "XDNA",
      "algorithm": "Hex",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "eCash": {
      "id": 370,
      "tag": "XEC",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Equilibria": {
      "id": 341,
      "tag": "XEQ",
      "algorithm": "CryptoNightGPU",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Honorcoin": {
      "id": 109,
      "tag": "XHC",
      "algorithm": "X13",
      "lagging": true,
      "listed": false,
      "status": "No market",
      "testing": false
    },
    "HavenProtocol": {
      "id": 279,
      "tag": "XHV",
      "algorithm": "CryptoNightHaven",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Scala": {
      "id": 280,
      "tag": "XLA",
      "algorithm": "CryptoNightDefyx",
      "lagging": false,
      "listed": false,
      "status": "AlgoSwitch",
      "testing": false
    },
    "Solaris": {
      "id": 179,
      "tag": "XLR",
      "algorithm": "Xevan",
      "lagging": false,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Monoeci": {
      "id": 203,
      "tag": "XMCC",
      "algorithm": "X11",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "Motion": {
      "id": 248,
      "tag": "XMN",
      "algorithm": "X16R",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "MoneroOriginal": {
      "id": 238,
      "tag": "XMO",
      "algorithm": "CryptoNight",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Monero": {
      "id": 101,
      "tag": "XMR",
      "algorithm": "RandomX",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Myriad-Argon2d": {
      "id": 67,
      "tag": "XMY",
      "algorithm": "Argon2d",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": true
    },
    "Myriad-Groestl": {
      "id": 49,
      "tag": "XMY",
      "algorithm": "Myr-Groestl",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Myriad-SHA": {
      "id": 56,
      "tag": "XMY",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Myriad-Yescrypt": {
      "id": 66,
      "tag": "XMY",
      "algorithm": "Yescrypt",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Myriad-Scrypt": {
      "id": 32,
      "tag": "XMY",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Neurai": {
      "id": 366,
      "tag": "XNA",
      "algorithm": "KawPow",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "PowBlocks": {
      "id": 377,
      "tag": "XPB",
      "algorithm": "Ethash",
      "hashRate": "MH/s",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Paycoin": {
      "id": 121,
      "tag": "XPY",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": true,
      "listed": false,
      "status": "PoW phase over",
      "testing": false
    },
    "xRhodium": {
      "id": 317,
      "tag": "XRC",
      "algorithm": "X13",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Vcash": {
      "id": 130,
      "tag": "XVC",
      "algorithm": "Blake (XVC)",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Verge-Scrypt": {
      "id": 150,
      "tag": "XVG",
      "algorithm": "Scrypt",
      "hashRate": "GH/s",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Verge-Groestl": {
      "id": 218,
      "tag": "XVG",
      "algorithm": "Myr-Groestl",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Verge-Lyra2REv2": {
      "id": 217,
      "tag": "XVG",
      "algorithm": "Lyra2REv2",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Verge-Blake (2s)": {
      "id": 220,
      "tag": "XVG",
      "algorithm": "Blake (2s)",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Verge-X17": {
      "id": 219,
      "tag": "XVG",
      "algorithm": "X17",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Swap": {
      "id": 301,
      "tag": "XWP",
      "algorithm": "Cuckaroo29s",
      "lagging": true,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "YACoin": {
      "id": 42,
      "tag": "YAC",
      "algorithm": "Chacha (Nf17)",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "Ycash": {
      "id": 339,
      "tag": "YEC",
      "algorithm": "EquihashZero",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Zano": {
      "id": 330,
      "tag": "ZANO",
      "algorithm": "ProgPowZ",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Zclassic": {
      "id": 167,
      "tag": "ZCL",
      "algorithm": "EquihashZero",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Zdeex": {
      "id": 400,
      "tag": "ZDEEX",
      "algorithm": "Equihash",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": true
    },
    "Zcash": {
      "id": 166,
      "tag": "ZEC",
      "algorithm": "Equihash",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Horizen": {
      "id": 185,
      "tag": "ZEN",
      "algorithm": "Equihash",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Zephyr": {
      "id": 371,
      "tag": "ZEPH",
      "algorithm": "RandomX",
      "lagging": false,
      "listed": true,
      "status": "Active",
      "testing": false
    },
    "Zero": {
      "id": 210,
      "tag": "ZER",
      "algorithm": "EquihashZero",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    },
    "Zetacoin": {
      "id": 53,
      "tag": "ZET",
      "algorithm": "SHA-256",
      "hashRate": "TH/s",
      "lagging": true,
      "listed": false,
      "status": "No available stats",
      "testing": false
    },
    "01coin": {
      "id": 338,
      "tag": "ZOC",
      "algorithm": "NeoScrypt",
      "lagging": false,
      "listed": false,
      "status": "Active",
      "testing": false
    }
  }
}`),
    posts: JSON.parse(`[
  {
    "Id": "u3cgw-top-5-luchshih-mayning-pulov-v-2024-godu-dlya-bitkoina-efira-i-drugoy-kriptovalyuty",
    "Title": "Топ-5 лучших майнинг пулов в 2024 году для биткоина, эфира и другой криптовалюты",
    "Img": "tg-channel-news-4.jpg"
  },
  {
    "Id": "evc4w-antminer-t21-obzor-na-luchshy-mayner-v-2024-godu",
    "Title": "Antminer T21 обзор на лучший майнер в 2024 году",
    "Img": "tg-channel-news-5.jpg"
  },
  {
    "Id": "kd0k-skolko-mozhno-zarabotat-na-mayninge-v-nachale-2024-goda",
    "Title": "Сколько можно заработать на майнинге в начале 2024 года",
    "Img": "tg-channel-news-3.jpg"
  },
  {
    "Id": "ubdl1-okupaemost-i-dohodnost-mayninga-posle-khalvinga-bitcoin",
    "Title": "Окупаемость и доходность майнинга после халвинга Bitcoin",
    "Img": "tg-channel-news-5.jpg"
  },
  {
    "Id": "j7ec0-stoit-li-pokupat-asik-jasminer-x16-q-v-2024-godu",
    "Title": "Стоит ли покупать асик Jasminer X16-Q в 2024 году",
    "Img": "tg-channel-news-5.jpg"
  },
  {
    "Id": "hrzd-kakuyu-kriptu-vygodnee-vsego-maynit-v-2024-godu",
    "Title": "Какую крипту выгоднее всего майнить в 2024 году",
    "Img": "tg-channel-news-4.jpg"
  },
  {
    "Id": "nirk-chto-luchshe--asik-ili-ferma-na-videokartah",
    "Title": "Что лучше — асик или ферма на видеокартах",
    "Img": "tg-channel-news-3.jpg"
  }
]`),
    pools: JSON.parse(`[
  {
    "Id": "viabtc",
    "Name": "ViaBTC",
    "Img": "tg-channel-news-1.jpg"
  },
  {
    "Id": "trustpool",
    "Name": "Trustpool",
    "Img": "tg-channel-news-2.jpg"
  },
  {
    "Id": "k1pool",
    "Name": "K1Pool",
    "Img": "tg-channel-news-4.jpg"
  },
  {
    "Id": "emcd",
    "Name": "EMCD",
    "Img": "tg-channel-news-3.jpg"
  },
  {
    "Id": "2miners",
    "Name": "2Miners",
    "Img": "tg-channel-news-3.jpg"
  },
  {
    "Id": "binance",
    "Name": "Binance",
    "Img": "tg-channel-news-1.jpg"
  }
]`),
}
        

function showCatalog() {
    showCatalogPopularWide();
    showCatalogWide();
    showCatalogBrandWide();
    showCatalogCoinWide();
    showCatalogBrands();
    showCatalogProduct();
    showCatalogAnalogs();
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

function showCatalogCoinWide() {
    const element = document.getElementById('catalog-coin-wide');
    if (!element) {
        return;
    }

    const coin = element.getAttribute('data-coin');
    const products = window.dataBase.products.filter(x => x.MiningCalculator.Coin === coin);

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

    const brands = window.dataBase.brands
        .map(brand => ({
            name: brand,
            img: window.dataBase.products.find(x => x.Brand === brand).Imgs[0]
        }));
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

function showCatalogAnalogs() {
    const element = document.getElementById('catalog-product-analogs');
    if (!element) {
        return;
    }

    const productId = element.getAttribute('data-product-id');
    const product = window.dataBase.products.find(x => x.Id === productId);
    const products = window.dataBase.products
        .filter(x => x.MiningCalculator.Algorithm === product.MiningCalculator.Algorithm
                && x.Id !== productId)
        .slice(0, 4);

    element.innerHTML = renderProductsAnalogsSlim(products);
}

// *** Frame ***

function getCatalogProductSlimTall(product) {
    return renderProductSlimTall(product)
}

function renderProductsSlimHashRate(products) {
    return renderProductsSlim(products)
}

// *** Render ***

function renderProductWide(product) {
    const characteristicsHtml = fillCharacteristicsTemplate(productCharacteristicTemplate, product);

    return fillProductTemplate(productWideTemplate, product)
        .replace(new RegExp('{characteristics}', 'g'), characteristicsHtml)
        ;
}

function renderProductSlimTall(product) {
    const characteristicsHtml = fillCharacteristicsTemplate(productCharacteristicSlimTemplate, product);

    return fillProductTemplate(productSlimTallTemplate, product)
        .replace(new RegExp('{characteristics}', 'g'), characteristicsHtml)
        ;
}

function renderProductsAnalogsSlim(products) {
    let productsHtml = '';

    products.forEach(product => {
        productsHtml += renderProductSlim(product);
    });

    return productsAnalogsSlimTemplate
        .replace(new RegExp('{products}', 'g'), productsHtml)
        ;
}

function renderProductsSlim(products) {
    let productsHtml = '';

    products.forEach(product => {
        productsHtml += renderProductSlim(product);
    });

    return productsSlimTemplate
        .replace(new RegExp('{products}', 'g'), productsHtml)
        ;
}

function renderProductSlim(product) {
    return fillProductTemplate(productSlimTemplate, product);
}

function renderProduct(product) {
    const characteristicsHtml = fillCharacteristicsTemplate(productCharacteristicTemplate, product);
    const pricesHtml = fillPricesTemplate(productPricesTemplate, productPriceTemplate, product);
    const miningCalculatorHtml = getSingleMiningCalculator(product);

    return fillProductTemplate(productTemplate, product)
        .replace(new RegExp('{characteristics}', 'g'), characteristicsHtml)
        .replace(new RegExp('{prices}', 'g'), pricesHtml)
        .replace(new RegExp('{miningCalculator}', 'g'), miningCalculatorHtml)
        ;
}

function renderBrands(brands) {
    let brandsHtml = '';

    brands.forEach(brand => {
        brandsHtml += brandTemplate
            .replace(new RegExp('{id}', 'g'), brand.name.toLowerCase())
            .replace(new RegExp('{name}', 'g'), brand.name)
            .replace(new RegExp('{img}', 'g'), brand.img)
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
            .replace(new RegExp('{priceRuble}', 'g'), formatCurrency(price.ValueRuble))
            .replace(new RegExp('{price}', 'g'), formatCurrency(price.Value))
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
        .replace(new RegExp('{priceRuble}', 'g'), formatCurrency(product.Prices[0].ValueRuble))
        .replace(new RegExp('{price}', 'g'), formatCurrency(product.Prices[0].Value))
        .replace(new RegExp('{brandId}', 'g'), product.Brand.toLowerCase())
        .replace(new RegExp('{brand}', 'g'), product.Brand)
        ;
}

// *** Templates ***
const productWideTemplate = `
<div class="card my-3">
    <div class="row g-0">
        <div class="col-md-4">
            <a href="/catalog/{id}/">
                <img src="/img/{img}" alt="{name}" class="img-fluid rounded-start" />
            </a>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <a href="/catalog/{id}/">
                    <h3 class="card-title">{name}</h3>
                </a>
                <div class="row">
                    <div class="col-lg-7">
                        <dl class="row mt-4">
                            {characteristics}
                        </dl>
                    </div>
                    <div class="mt-1 col-lg-5">
                        <div class="my-3">
                            <div class="h3">{priceRuble} ₽ ({price} $)</div>
                        </div>
                        <div class="my-3">
                            <a href="https://t.me/BestMiningManager" class="btn btn-primary btn-block px-5" data-mdb-ripple-init
                                target="_blank">Купить</a>
                            <a href="/catalog/{id}/" class="btn btn-outline-secondary btn-block px-5" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const productTemplate = `
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Главная</a></li>
    <li class="breadcrumb-item"><a href="/catalog/">Каталог</a></li>
    <li class="breadcrumb-item"><a href="/catalog/brands/{brandId}/">{brand}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{name}</li>
  </ol>
</nav>
<div class="card">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="/img/{img}" alt="{name}" class="img-fluid rounded-start" />
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h1 class="card-title">{name}</h1>
                <div class="row">
                    <div class="col-lg-7">
                        <dl class="row mt-4">
                            {characteristics}
                        </dl>
                    </div>
                    <div class="mt-1 col-lg-5">
                        <div class="my-3">
                            <div class="h3">{priceRuble} ₽ ({price} $)</div>
                        </div>
                        <div class="my-3">
                            <a href="https://t.me/BestMiningManager" class="btn btn-primary btn-block px-5" data-mdb-ripple-init
                                target="_blank">Купить</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{prices}
{miningCalculator}
`;

const productSlimTallTemplate = `
<div class="card">
    <a href="/catalog/{id}/">
        <img src="/img/{img}" class="card-img-top" alt="{name}" />
    </a>
    <div class="card-body">
        <h5 class="card-title">
            <a href="/catalog/{id}/">{name}</a>
        </h5>
        <dl class="mt-4">
            {characteristics}
        </dl>
        <div class="h5 mt-4">{priceRuble} ₽ ({price} $)</div>
        <a href="https://t.me/BestMiningManager" class="btn btn-primary btn-block" data-mdb-ripple-init
            target="_blank">Купить</a>
        <a href="/catalog/{id}/" class="btn btn-outline-secondary btn-block px-5" data-mdb-ripple-init data-mdb-ripple-color="dark">
            Подробнее</a>
    </div>
</div>
`;

const productsSlimTemplate = `
<div class="row">
    {products}
</div>
`;

const productsAnalogsSlimTemplate = `
<h2 class="my-3">Похожие товары</h2>
<div class="row">
    {products}
</div>
`;

const productSlimTemplate = `
<div class="card col-lg-3 my-3">
    <div style="min-height: 320px;">
        <a href="/catalog/{id}/">
            <img src="/img/{img}" class="card-img-top" alt="{name}" />
        </a>
    </div>
    <div class="card-body">
        <div style="min-height: 50px;">
            <h5 class="card-title">
                <a href="/catalog/{id}/">{name}</a>
            </h5>
        </div>
        <div class="h5 mt-4">{priceRuble} ₽ ({price} $)</div>
        <a href="https://t.me/BestMiningManager" class="btn btn-primary btn-block" data-mdb-ripple-init
            onclick="orderProduct('{id}'); return false;"
            target="_blank">Купить</a>
        <a href="/catalog/{id}/" class="btn btn-outline-secondary btn-block px-5" data-mdb-ripple-init data-mdb-ripple-color="dark">
            Подробнее</a>
    </div>
</div>
`;

const productPricesTemplate = `
<div class="card my-3">
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
<dt class="col-sm-5">{name}</dt>
<dd class="col-sm-7">{value}</dd>
`;


const productCharacteristicSlimTemplate = `
<dt>{name}</dt>
<dd>{value}</dd>
`;

const brandTemplate = `
<div class="card col-lg-3 my-3">
    <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light" style="min-height: 320px;">
        <img src="/img/{img}" class="img-fluid" />
        <a href="/catalog/brands/{id}/">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
    </div>
    <div class="card-body text-center">
        <a href="/catalog/brands/{id}/">
            <h3 class="card-title">{name}</h3>
        </a>
    </div>
</div>
`;

const brandsTemplate = `
<div class="row my-3 gx-3">
    {brands}
</div>
`;

function showMiningCalculator() {
    showProductMiningCalculator();
    showCoinsMiningCalculator();
    showCoinMiningCalculator();
    showCoinsTopMiningCalculatorTop();
    showAsicsMiningCalculator();
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

function showCoinsMiningCalculator() {
    const element = document.getElementById('mining-calculator-coins');
    if (!element) {
        return;
    }

    const coins = window.dataBase.coins;

    element.innerHTML = fillCoinsMiningCalculatorTemplate(coinsMiningCalculatorTemplate, coinItemMiningCalculatorTemplate, coins);
}

function updateCoinsMiningCalculator() {
    const search = document.getElementById('mining-calculator-search').value;
    const coins = window.dataBase.coins
        .filter(x => !search
            || x.Tag.toLowerCase().startsWith(search.toLowerCase())
            || x.Title.toLowerCase().startsWith(search.toLowerCase())
        );

    document.getElementById('mining-calculator-coins-items').innerHTML =
        fillCoinsItemsMiningCalculatorTemplate(coinItemMiningCalculatorTemplate, coins);
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

function showAsicsMiningCalculator() {
    const element = document.getElementById('mining-calculator-asics');
    if (!element) {
        return;
    }

    const asics = window.dataBase.products;

    element.innerHTML = fillAsicsMiningCalculatorTemplate(asicsMiningCalculatorTemplate, asicItemMiningCalculatorTemplate, asics);
}

function updateAsicsMiningCalculator() {
    const search = document.getElementById('mining-calculator-search').value;
    const asics = window.dataBase.products
        .filter(x => !search || x.Name.toLowerCase().indexOf(search.toLowerCase()) !== -1);

    document.getElementById('mining-calculator-asics-items').innerHTML =
        fillAsicsItemsMiningCalculatorTemplate(asicItemMiningCalculatorTemplate, asics);
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

    const productHtml = fillMiningCalculatorProductResultTemplate(templateProduct, product, {revenue, cost, profit});

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

function fillCoinsMiningCalculatorTemplate(template, templateItem, coins) {
    let coinsHtml = fillCoinsItemsMiningCalculatorTemplate(templateItem, coins);

    return template
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
    <li class="breadcrumb-item"><a href="/calculators/mining/coins/">Доходность криптовалют</a></li>
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
    <li class="breadcrumb-item"><a href="/calculators/mining/asics/">Доходность асиков</a></li>
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

const coinsMiningCalculatorTemplate = `
<div class="card">
    <div class="m-4">
        <div class="form-outline" data-mdb-input-init>
            <input type="text" id="mining-calculator-search" class="form-control" onkeyup="updateCoinsMiningCalculator()" />
            <label class="form-label" for="search">Поиск</label>
        </div>
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

const asicsMiningCalculatorTemplate = `
<div class="card">
    <div class="m-4">
        <div class="form-outline" data-mdb-input-init>
            <input type="text" id="mining-calculator-search" class="form-control" onkeyup="updateAsicsMiningCalculator()" />
            <label class="form-label" for="search">Поиск</label>
        </div>
        <div class="mt-4 row" id="mining-calculator-asics-items">
            {asics}
        </div>
    </div>
</div>
`;

const asicItemMiningCalculatorTemplate = `
<div class="col-lg-3 p-1">
    <a href="/calculators/mining/asics/{id}/" class="btn btn-secondary btn-block">{name}</a>
</div>
`;

function showBlog() {
    showBlogPosts();
    showBlogTop();
}

// *** Show ***

function showBlogPosts() {
    const element = document.getElementById('blog-posts');
    if (!element) {
        return;
    }

    const posts = window.dataBase.posts;

    element.innerHTML = fillBlogPostsTemplate(blogPostsTemplate, blogPostsItemTemplate, posts);
}

function showBlogTop() {
    const element = document.getElementById('blog-top');
    if (!element) {
        return;
    }

    const posts = window.dataBase.posts.slice(0, 4);

    element.innerHTML = fillBlogPostsTemplate(blogPostsTopTemplate, blogPostsItemTemplate, posts);
}

// *** Fill ***

function fillBlogPostsTemplate(template, templateItem, coins) {
    let posts = fillBlogPostsItemTemplate(templateItem, coins);

    return template
        .replace(new RegExp('{posts}', 'g'), posts)
        ;
}

function fillBlogPostsItemTemplate(template, posts) {
    let postsHtml = '';

    posts.forEach(post => {
        postsHtml += template
            .replace(new RegExp('{id}', 'g'), post.Id)
            .replace(new RegExp('{img}', 'g'), post.Img)
            .replace(new RegExp('{title}', 'g'), post.Title)
            ;
    });

    return postsHtml;
}

// *** Templates ***

const blogPostsTemplate = `
<div class="row">
    {posts}
</div>
`;

const blogPostsTopTemplate = `
<h2 class="my-4">Блог</h2>
<div class="row">
    {posts}
</div>
`;

const blogPostsItemTemplate = `
<div class="card col-lg-3 my-3">
    <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
        <img src="/img/tg-channel/{img}" class="img-fluid" />
        <a href="/blog/{id}/">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
    </div>
    <div class="card-body">
        <a href="/blog/{id}/">
            <h5 class="card-title">{title}</h5>
        </a>
    </div>
</div>
`;

function showPools() {
    showPoolsList();
    showPoolsTop();
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

function showPoolsTop() {
    const element = document.getElementById('pools-top');
    if (!element) {
        return;
    }

    const pools = window.dataBase.pools.slice(0, 4);

    element.innerHTML = fillPoolsTemplate(poolsTopTemplate, poolsItemTemplate, pools);
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
<div class="row">
    {pools}
</div>
`;

const poolsTopTemplate = `
<h2 class="my-4">Лучшие пулы</h2>
<div class="row">
    {pools}
</div>
`;

const poolsItemTemplate = `
<div class="card col-lg-3 my-3">
    <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
        <img src="/img/tg-channel/{img}" class="img-fluid" />
        <a href="/pools/{id}/">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
    </div>
    <div class="card-body text-center">
        <a href="/pools/{id}/">
            <h5 class="card-title">{name}</h5>
        </a>
    </div>
</div>
`;

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
        body: `{"Action": "Order", "Command": "Имя: ${name}. Телефон: ${phone}. Товар: ${product.Name}"}`
    });

    console.log('Order success', product.Name);
    document.getElementById('show-order-success-modal').click();
}

function loadData() {
    const brands = Data.brands;
    const products = Data.products;
    const coinsObject = Data.coins;
    const posts = Data.posts;
    const pools = Data.pools;

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
        
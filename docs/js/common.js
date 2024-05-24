

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
    coins: JSON.parse(`[
    {
        "Id": 193,
        "Tag": "BCH",
        "Title": "Bitcoin Cash",
        "Algorithm": "SHA-256",
        "HashRate": "TH/s",
        "Popular": false,
        "Img": ""
    },
    {
        "Id": 1,
        "Tag": "BTC",
        "Title": "Bitcoin",
        "Algorithm": "SHA-256",
        "HashRate": "TH/s",
        "Popular": true,
        "Img": "tg-channel-news-1.jpg"
    },
    {
        "Id": 378,
        "Tag": "BTN",
        "Title": "Bitnet BTN",
        "Algorithm": "Ethash",
        "HashRate": "MH/s",
        "Popular": false,
        "Img": ""
    },
    {
        "Id": 373,
        "Tag": "CAU",
        "Title": "Canxium",
        "Algorithm": "Ethash",
        "HashRate": "MH/s",
        "Popular": false,
        "Img": ""
    },
    {
        "Id": 283,
        "Tag": "CLO",
        "Title": "Callisto",
        "Algorithm": "Ethash",
        "HashRate": "MH/s",
        "Popular": false,
        "Img": ""
    },
    {
        "Id": 34,
        "Tag": "DASH",
        "Title": "Dash",
        "Algorithm": "X11",
        "HashRate": "GH/s",
        "Popular": false,
        "Img": ""
    },
    {
        "Id": 6,
        "Tag": "DOGE",
        "Title": "Dogecoin",
        "Algorithm": "Scrypt",
        "HashRate": "GH/s",
        "Popular": true,
        "Img": "tg-channel-news-2.jpg"
    },
    {
        "Id": 393,
        "Tag": "DOGETHER",
        "Title": "Dogether",
        "Algorithm": "Ethash",
        "HashRate": "MH/s",
        "Popular": false,
        "Img": ""
    },
    {
        "Id": 162,
        "Tag": "ETC",
        "Title": "Ethereum Classic",
        "Algorithm": "Etchash",
        "HashRate": "MH/s",
        "Popular": true,
        "Img": "tg-channel-news-3.jpg"
    },
    {
        "Id": 353,
        "Tag": "ETHW",
        "Title": "EthereumPoW",
        "Algorithm": "Ethash",
        "HashRate": "MH/s",
        "Popular": false,
        "Img": ""
    },
    {
        "Id": 352,
        "Tag": "KAS",
        "Title": "Kaspa",
        "Algorithm": "kHeavyHash",
        "HashRate": "TH/s",
        "Popular": true,
        "Img": "tg-channel-news-4.jpg"
    },
    {
        "Id": 398,
        "Tag": "LRS",
        "Title": "Larissa",
        "Algorithm": "Ethash",
        "HashRate": "MH/s",
        "Popular": false,
        "Img": ""
    },
    {
        "Id": 4,
        "Tag": "LTC",
        "Title": "Litecoin",
        "Algorithm": "Scrypt",
        "HashRate": "GH/s",
        "Popular": false,
        "Img": ""
    },
    {
        "Id": 361,
        "Tag": "OCTA",
        "Title": "OctaSpace",
        "Algorithm": "Ethash",
        "HashRate": "MH/s",
        "Popular": false,
        "Img": ""
    }
]`),
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

    const pool = pools[product.MiningCalculator.Coin];
    if (!!pool) {
        characteristicsHtml += template
            .replace(new RegExp('{name}', 'g'), 'Рекомендуемый пул')
            .replace(new RegExp('{value}', 'g'), `<a href="${pool.url}">${pool.name}</a>`)
            ;
    }

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
                                onclick="orderProduct('{id}'); return false;"
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
                                onclick="orderProduct('{id}'); return false;"
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
            onclick="orderProduct('{id}'); return false;"
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

function fillMiningCalculatorResultTemplate(template, templateProduct, templatePool, data, product) {
    const estimated_rewards = parseFloat(data.estimated_rewards);
    const revenue = parseFloat(data.revenue.replace('$', ''));
    const cost = parseFloat(data.cost.replace('$', ''));
    const profit = parseFloat(data.profit.replace('$', ''));

    const prepareCoin = value => roundToDigits(value, 9);
    const prepareDollar = value => formatCurrency(roundToDigits(value, 2));
    const prepareRuble = value => formatCurrency(toRuble(value, 2));

    const poolHtml = fillMiningCalculatorPoolTemplate(templatePool, product)
    const productHtml = fillMiningCalculatorProductResultTemplate(templateProduct, product, { revenue, cost, profit });

    return template
        .replace(new RegExp('{pool}', 'g'), poolHtml)
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

function fillMiningCalculatorPoolTemplate(template, product) {
    if (!product) {
        return "";
    }    

    const pool = pools[product.MiningCalculator.Coin];
    if (!pool) {
        return "";
    }

    return template
        .replace(new RegExp('{name}', 'g'), pool.name)
        .replace(new RegExp('{url}', 'g'), pool.url)
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
        miningCalculatorPoolTemplate,
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
    <div class="card col-lg-9 my-3">
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
    <div class="col-lg-3 my-3">
        {product}
    </div>
</div>
`;

const singleMiningCalculatorResultTemplate = `
{pool}
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

const miningCalculatorPoolTemplate = `
<p class="card-text text-center text-decoration-underline">
    Рассчитано с использованием данных из пула <a href="{url}">{name}</a>
</p>
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
        
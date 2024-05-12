const initialData = [
    {
      code: "ADA",
      value: 3.637762
    },
    {
      code: "AED",
      value: 3.672905
    },
    {
      code: "AFN",
      value: 87.500147
    },
    {
      code: "ALL",
      value: 98.450148
    },
    {
      code: "ADA",
      value: 3.637762,
    },
    {
      code: "AED",
      value: 3.672905,
    },
    {
      code: "AFN",
      value: 87.500147,
    },
    {
      code: "ALL",
      value: 98.450148,
    },
    {
      code: "AMD",
      value: 386.400591,
    },
    {
      code: "ANG",
      value: 1.802636,
    },
    {
      code: "AOA",
      value: 676.501023,
    },
    {
      code: "ARS",
      value: 246.734574,
    },
    {
      code: "AUD",
      value: 1.48087,
    },
    {
      code: "AVAX",
      value: 0.086799,
    },
    {
      code: "AWG",
      value: 1.802502,
    },
    {
      code: "AZN",
      value: 1.700002,
    },
    {
      code: "BAM",
      value: 1.815863,
    },
    {
      code: "BBD",
      value: 2.019453,
    },
    {
      code: "BDT",
      value: 108.361512,
    },
    {
      code: "BGN",
      value: 1.817642,
    },
    {
      code: "BHD",
      value: 0.376991,
    },
    {
      code: "BIF",
      value: 2838.003614,
    },
    {
      code: "BMD",
      value: 1.000002,
    },
    {
      code: "BNB",
      value: 0.004318,
    },
    {
      code: "BND",
      value: 1.342632,
    },
    {
      code: "BOB",
      value: 6.911644,
    },
    {
      code: "BRL",
      value: 4.862109,
    },
    {
      code: "BSD",
      value: 1.000118,
    },
    {
      code: "BTC",
      value: 3.9e-5,
    },
    {
      code: "BTN",
      value: 82.445234,
    },
    {
      code: "BWP",
      value: 13.407192,
    },
    {
      code: "BYN",
      value: 2.524549,
    },
    {
      code: "BYR",
      value: 19600,
    },
    {
      code: "BZD",
      value: 2.016093,
    },
    {
      code: "CAD",
      value: 1.336552,
    },
   {
      code: "CDF",
      value: 2369.004644,
    },
    {
      code: "CHF",
      value: 0.908501,
    },
    {
      code: "CLF",
      value: 0.028583,
    },
    {
      code: "CLP",
      value: 788.701526,
    },
    {
      code: "CNY",
      value: 7.145608,
    },
    {
      code: "COP",
      value: 4175.00729,
    },
    {
      code: "CRC",
      value: 538.423154,
    },
    {
      code: "CUC",
      value: 1.004955,
    },
    {
      code: "CUP",
      value: 24.003938,
    },
    {
      code: "CVE",
      value: 105.000114,
    },
    {
      code: "CZK",
      value: 22.100144,
    },
    {
      code: "DJF",
      value: 177.720277,
    },
    {
      code: "DKK",
      value: 6.924011,
    },
    {
      code: "DOP",
      value: 54.600097,
    },
    {
      code: "DOT",
      value: 0.220344,
    },
    {
      code: "DZD",
      value: 136.290893,
    },
    {
      code: "EGP",
      value: 30.904341,
    },
    {
      code: "ERN",
      value: 15.00002,
    },
    {
      code: "ETB",
      value: 54.410088,
    },
    {
      code: "ETH",
      value: 0.000573,
    },
    {
      code: "EUR",
      value: 0.929141,
    },
    {
      code: "FJD",
      value: 2.240754,
    },
    {
      code: "FKP",
      value: 0.798986,
    },
    {
      code: "GBP",
      value: 0.799051,
    },
    {
      code: "GEL",
      value: 2.605003,
    },
    {
      code: "GGP",
      value: 0.798986,
    },
    {
      code: "GHS",
      value: 11.200016,
    },
    {
      code: "GIP",
      value: 0.798986,
    },
    {
      code: "GMD",
      value: 59.300099,
    },
    {
      code: "GNF",
      value: 8655.011864,
    },
    {
      code: "GTQ",
      value: 7.836341,
    },
    {
      code: "GYD",
      value: 211.545993,
    },
    {
      code: "HKD",
      value: 7.834662,
    },
    {
      code: "HNL",
      value: 24.710026,
    },
    {
      code: "HRK",
      value: 7.000613,
    },
    {
      code: "HTG",
      value: 139.52619,
    },
    {
      code: "HUF",
      value: 343.005426,
    },
    {
      code: "IDR",
      value: 14877.027334,
    },
    {
      code: "ILS",
      value: 3.599945,
    },
    {
      code: "IMP",
      value: 0.798986,
    },
    {
      code: "INR",
      value: 82.337566,
    },
    {
      code: "IQD",
      value: 1310.50248,
    },
    {
      code: "IRR",
      value: 42250.055204,
    },
    {
      code: "ISK",
      value: 138.910268,
    },
    {
      code: "JEP",
      value: 0.798985,
    },
    {
      code: "JMD",
      value: 154.665538,
    },
    {
      code: "JOD",
      value: 0.709401,
    },
    {
      code: "JPY",
      value: 139.463179,
    },
    {
      code: "KES",
      value: 139.500236,
    },
    {
      code: "KGS",
      value: 87.590147,
    },
    {
      code: "KHR",
      value: 4120.004386,
    },
    {
      code: "KMF",
      value: 457.825906,
    },
    {
      code: "KPW",
      value: 900.020037,
    },
    {
      code: "KRW",
      value: 1284.931579,
    },
    {
      code: "KWD",
      value: 0.30738,
    },
    {
      code: "KYD",
      value: 0.833493,
    },
    {
      code: "KZT",
      value: 447.769118,
    },
    {
      code: "LAK",
      value: 18195.02706,
    },
    {
      code: "LBP",
      value: 15265.026084,
    },
    {
      code: "LKR",
      value: 301.068554,
    },
    {
      code: "LRD",
      value: 172.400292,
    },
    {
      code: "LSL",
      value: 18.570022,
    },
    {
      code: "LTC",
      value: 0.012876,
    },
    {
      code: "LTL",
      value: 2.95274,
    },
    {
      code: "LVL",
      value: 0.60489,
    },
    {
      code: "LYD",
      value: 4.825006,
    },
    {
      code: "MAD",
      value: 10.14251,
    },
    {
      code: "MATIC",
      value: 1.554748,
    },
    {
      code: "MDL",
      value: 17.824126,
    },
    {
      code: "MGA",
      value: 4425.00679,
    },
    {
      code: "MKD",
      value: 57.275358,
    },
    {
      code: "MMK",
      value: 2100.398597,
    },
    {
      code: "MNT",
      value: 3479.199133,
    },
    {
      code: "MOP",
      value: 8.071693,
    },
    {
      code: "MRO",
      value: 34.300053,
    },
    {
      code: "MUR",
      value: 45.500089,
    },
    {
      code: "MVR",
      value: 15.360025,
    },
    {
      code: "MWK",
      value: 1017.501179,
    },
    {
      code: "MXN",
      value: 17.286913,
    },
    {
      code: "MYR",
      value: 4.620005,
    },
    {
      code: "MZN",
      value: 63.250092,
    },
    {
      code: "NAD",
      value: 18.570033,
    },
    {
      code: "NGN",
      value: 463.500856,
    },
    {
      code: "NIO",
      value: 36.550052,
    },
    {
      code: "NOK",
      value: 10.798901,
    },
    {
      code: "NPR",
      value: 131.912305,
    },
    {
      code: "NZD",
      value: 1.631763,
    },
    {
      code: "OMR",
      value: 0.38498,
    },
    {
      code: "PAB",
      value: 1.000247,
    },
    {
      code: "PEN",
      value: 3.636006,
    },
    {
      code: "PGK",
      value: 3.525004,
    },
    {
      code: "PHP",
      value: 56.081057,
    },
    {
      code: "PKR",
      value: 287.500504,
    },
    {
      code: "PLN",
      value: 4.132508,
    },
    {
      code: "PYG",
      value: 7245.827603,
    },
    {
      code: "QAR",
      value: 3.640504,
    },
    {
      code: "RON",
      value: 4.605173,
    },
    {
      code: "RSD",
      value: 108.915176,
    },
    {
      code: "RUB",
      value: 83.880123,
    },
    {
      code: "RWF",
      value: 1140.001294,
    },
    {
      code: "SAR",
      value: 3.75022,
    },
    {
      code: "SBD",
      value: 8.354812,
    },
    {
      code: "SCR",
      value: 14.130018,
    },
    {
      code: "SDG",
      value: 601.000666,
    },
    {
      code: "SEK",
      value: 10.823917,
    },
    {
      code: "SGD",
      value: 1.343406,
    },
    {
      code: "SHP",
      value: 1.216752,
    },
    {
      code: "SLL",
      value: 19750.024311,
    },
    {
      code: "SOL",
      value: 0.065802,
    },
    {
      code: "SOS",
      value: 568.500914,
    },
    {
      code: "SRD",
      value: 37.600056,
    },
    {
      code: "STD",
      value: 20697.981008,
    },
   {
      code: "SVC",
      value: 8.751734,
    },
    {
      code: "SYP",
      value: 2512.53578,
    },
    {
      code: "SZL",
      value: 18.565032,
    },
    {
      code: "THB",
      value: 34.64155,
    },
    {
      code: "TJS",
      value: 10.927237,
    },
    {
      code: "TMT",
      value: 3.500007,
    },
    {
      code: "TND",
      value: 3.106005,
    },
    {
      code: "TOP",
      value: 2.357303,
    },
    {
      code: "TRY",
      value: 23.665132,
    },
    {
      code: "TTD",
      value: 6.78438,
    },
    {
      code: "TWD",
      value: 30.726359,
    },
    {
      code: "TZS",
      value: 2375.002385,
    },
    {
      code: "UAH",
      value: 36.941573,
    },
    {
      code: "UGX",
      value: 3724.016137,
    },
    {
      code: "USD",
      value: 1,
    },
    {
      code: "UYU",
      value: 38.734935,
    },
    {
      code: "UZS",
      value: 11447.020346,
    },
    {
      code: "VEF",
      value: 2744348.470085,
    },
    {
      code: "VND",
      value: 23487.544086,
    },
    {
      code: "VUV",
      value: 118.935381,
    },
    {
      code: "WST",
      value: 2.731986,
    },
    {
      code: "XAF",
      value: 609.040694,
    },
    {
      code: "XAG",
      value: 0.04151,
    },
    {
      code: "XAU",
      value: 0.00051,
    },
    {
      code: "XCD",
      value: 2.702555,
    },
    {
      code: "XDR",
      value: 0.750838,
    },
    {
      code: "XOF",
      value: 607.50061,
    },
    {
      code: "XPD",
      value: 0.000737,
    },
    {
      code: "XPF",
      value: 111.300193,
    },
    {
      code: "XPT",
      value: 0.001004,
    },
    {
      code: "XRP",
      value: 1.902824,
    },
    {
      code: "YER",
      value: 250.350491,
    },
    {
      code: "ZAR",
      value: 18.55846,
    },
    {
      code: "ZMK",
      value: 9001.2,
    },
    {
      code: "ZMW",
      value: 19.729186,
    },
    {
      code: "ZWL",
      value: 321.999592,
    }
  ]
  
  module.exports = initialData
window.PRODIGY_FAN_DATA_REVIEW = {
  "meta": {
    "purpose": "Inventory of values observed in the current repository. NOT authoritative.",
    "defaultVerification": "pending_review",
    "allowedStates": [
      "verified",
      "pending_review",
      "do_not_publish"
    ]
  },
  "models": {
    "HS-100P": {
      "series": "HS",
      "status": "pending_review",
      "productPage": {
        "high": {
          "airflowM3h": 198,
          "rpm": 2200,
          "powerW": 26,
          "currentA": 0.12,
          "noiseDb": 31
        },
        "low": {
          "airflowM3h": 165,
          "rpm": 1850,
          "powerW": 23,
          "currentA": 0.11,
          "noiseDb": 26
        }
      },
      "legacyCurveSource": "scripts/fan-chart.js",
      "legacyHighCurve": [
        [
          0,
          158
        ],
        [
          25,
          135
        ],
        [
          50,
          110
        ],
        [
          75,
          100
        ],
        [
          100,
          95
        ],
        [
          115,
          100
        ],
        [
          125,
          95
        ],
        [
          150,
          70
        ],
        [
          175,
          45
        ],
        [
          190,
          20
        ],
        [
          200,
          0
        ]
      ]
    },
    "HS-125P": {
      "series": "HS",
      "status": "pending_review",
      "productPage": {
        "high": {
          "airflowM3h": 284,
          "rpm": 2250,
          "powerW": 33,
          "currentA": 0.16,
          "noiseDb": 32
        },
        "low": {
          "airflowM3h": 248,
          "rpm": 1850,
          "powerW": 28,
          "currentA": 0.13,
          "noiseDb": 26
        }
      },
      "legacyCurveSource": "scripts/fan-chart.js",
      "legacyHighCurve": [
        [
          0,
          160
        ],
        [
          50,
          120
        ],
        [
          100,
          105
        ],
        [
          135,
          95
        ],
        [
          150,
          100
        ],
        [
          200,
          75
        ],
        [
          250,
          35
        ],
        [
          285,
          0
        ]
      ],
      "selectionEngine": "missing"
    },
    "HS-150P": {
      "series": "HS",
      "status": "pending_review",
      "productPage": {
        "high": {
          "airflowM3h": 530,
          "rpm": 2250,
          "powerW": 54,
          "currentA": 0.26,
          "noiseDb": 33
        },
        "low": {
          "airflowM3h": 410,
          "rpm": 1850,
          "powerW": 44,
          "currentA": 0.21,
          "noiseDb": 29
        }
      },
      "espPdfObserved": {
        "airflowM3h": 530,
        "rpm": 2550,
        "powerW": 54,
        "currentA": 0.22,
        "noiseDb": 33
      },
      "conflict": [
        "high.rpm",
        "high.currentA"
      ],
      "legacyCurveSource": "scripts/fan-chart.js"
    },
    "HS-200P": {
      "series": "HS",
      "status": "pending_review",
      "productPage": {
        "high": {
          "airflowM3h": 840,
          "rpm": 2450,
          "powerW": 128,
          "currentA": 0.62,
          "noiseDb": 63
        },
        "low": {
          "airflowM3h": 690,
          "rpm": 1950,
          "powerW": 123,
          "currentA": 0.6,
          "noiseDb": 55
        }
      },
      "legacyCurveSource": "scripts/fan-chart.js"
    },
    "HS-250P": {
      "series": "HS",
      "status": "pending_review",
      "productPage": {
        "high": {
          "airflowM3h": 1405,
          "rpm": 2450,
          "powerW": 225,
          "currentA": 1.09,
          "noiseDb": 66
        },
        "low": {
          "airflowM3h": 1064,
          "rpm": 1850,
          "powerW": 165,
          "currentA": 0.8,
          "noiseDb": 58
        }
      },
      "legacyCurveSource": "scripts/fan-chart.js"
    },
    "HS-315P": {
      "series": "HS",
      "status": "pending_review",
      "productPage": {
        "high": {
          "airflowM3h": 2206,
          "rpm": 2350,
          "powerW": 390,
          "currentA": 1.9,
          "noiseDb": 69
        },
        "low": {
          "airflowM3h": 1750,
          "rpm": 1650,
          "powerW": 290,
          "currentA": 1.4,
          "noiseDb": 61
        }
      },
      "legacyCurveSource": "scripts/fan-chart.js"
    },
    "MS-100M": {
      "series": "MS",
      "status": "pending_review",
      "productPage": {
        "powerW": 85,
        "airflowM3h": 310,
        "declaredPressurePa": 315,
        "diameterMm": 100,
        "noiseDb": 52,
        "weightKg": 3.6
      },
      "legacyCurveSource": "scripts/fan-chart.js",
      "legacyCurve": [
        [
          0,
          310
        ],
        [
          50,
          300
        ],
        [
          100,
          280
        ],
        [
          150,
          245
        ],
        [
          200,
          195
        ],
        [
          250,
          125
        ],
        [
          275,
          75
        ],
        [
          300,
          0
        ]
      ]
    },
    "MS-125M": {
      "series": "MS",
      "status": "pending_review",
      "productPage": {
        "powerW": 85,
        "airflowM3h": 385,
        "declaredPressurePa": 350,
        "diameterMm": 125,
        "noiseDb": 50,
        "weightKg": 3.6
      },
      "legacyCurveSource": "scripts/fan-chart.js",
      "legacyCurve": [
        [
          0,
          350
        ],
        [
          50,
          345
        ],
        [
          100,
          330
        ],
        [
          150,
          310
        ],
        [
          200,
          280
        ],
        [
          250,
          240
        ],
        [
          300,
          175
        ],
        [
          350,
          85
        ],
        [
          400,
          0
        ]
      ],
      "selectionEngine": "missing"
    },
    "MS-150M": {
      "series": "MS",
      "status": "pending_review",
      "productPage": {
        "powerW": 105,
        "airflowM3h": 720,
        "declaredPressurePa": 443,
        "diameterMm": 150,
        "noiseDb": 53,
        "weightKg": 5.2
      },
      "legacyCurveSource": "scripts/fan-chart.js"
    },
    "MS-200M": {
      "series": "MS",
      "status": "pending_review",
      "productPage": {
        "powerW": 160,
        "airflowM3h": 1120,
        "declaredPressurePa": 580,
        "diameterMm": 200,
        "noiseDb": 60,
        "weightKg": 6.0
      },
      "legacyCurveSource": "scripts/fan-chart.js"
    },
    "MS-250M": {
      "series": "MS",
      "status": "pending_review",
      "productPage": {
        "powerW": 182,
        "airflowM3h": 1320,
        "declaredPressurePa": 570,
        "diameterMm": 250,
        "noiseDb": 62,
        "weightKg": 6.0
      },
      "fanChartObservedShutoffPa": 660,
      "fanSelectorObservedShutoffPa": 670,
      "conflict": [
        "declaredPressurePa/curve"
      ]
    },
    "MS-315M": {
      "series": "MS",
      "status": "pending_review",
      "productPage": {
        "powerW": 260,
        "airflowM3h": 1900,
        "declaredPressurePa": 700,
        "diameterMm": 315,
        "noiseDb": 65,
        "weightKg": 7.8
      },
      "legacyCurveSource": "scripts/fan-chart.js"
    }
  }
};

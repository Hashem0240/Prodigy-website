/* Shared master: pending legacy observations never authorize selection. */
(function(root){
 const data = {
  "version": "2.0.0",
  "baseline": "f4205e13f04d98d9274868a314c8257d04dca6ef",
  "models": {
    "HS-100P": {
      "id": "HS-100P",
      "metadata": {
        "series": {
          "value": "HS",
          "status": "verified",
          "source": "Repository model identity",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "page": {
          "value": "products/commercial/mixed-flow/hs-100p.html",
          "status": "verified",
          "source": "Repository route",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "electrical": {
        "high": {
          "voltage": {
            "value": "220-240V~/50Hz",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-100p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "powerW": {
            "value": "26",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-100p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "currentA": {
            "value": "0.12",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-100p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        },
        "low": {
          "voltage": {
            "value": "220-240V~/50Hz",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-100p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "powerW": {
            "value": "23",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-100p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "currentA": {
            "value": "0.11",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-100p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "speeds": {
        "high": {
          "airflowM3h": {
            "value": "198",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-100p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "2200",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-100p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "31",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-100p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        },
        "low": {
          "airflowM3h": {
            "value": "165",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-100p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "1850",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-100p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "26",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-100p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "dimensions": {},
      "images": {
        "product": {
          "value": "Media/optimized/HS-100P/1.webp",
          "status": "verified",
          "source": "products/commercial/mixed-flow/hs-100p.html existing product image",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "sourceRevision": {
        "value": null,
        "status": "pending_review",
        "source": "Awaiting approved Prodigy/supplier datasheet",
        "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
      },
      "performance": {
        "status": "pending_review",
        "curves": [],
        "source": null,
        "revision": null
      },
      "observations": {
        "productPage": {
          "value": {
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
          "status": "pending_review",
          "source": "Product HTML / supplied handoff",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "chart": {
          "value": {
            "maxX": 200,
            "maxY": 160,
            "stepX": 25,
            "stepY": 20,
            "IsMS": false,
            "datasets": [
              {
                "label": "HS (High Speed)",
                "data": [
                  {
                    "x": 0,
                    "y": 158
                  },
                  {
                    "x": 25,
                    "y": 135
                  },
                  {
                    "x": 50,
                    "y": 110
                  },
                  {
                    "x": 75,
                    "y": 100
                  },
                  {
                    "x": 100,
                    "y": 95
                  },
                  {
                    "x": 115,
                    "y": 100
                  },
                  {
                    "x": 125,
                    "y": 95
                  },
                  {
                    "x": 150,
                    "y": 70
                  },
                  {
                    "x": 175,
                    "y": 45
                  },
                  {
                    "x": 190,
                    "y": 20
                  },
                  {
                    "x": 200,
                    "y": 0
                  }
                ],
                "borderColor": "#b24341"
              },
              {
                "label": "LS (Low Speed)",
                "data": [
                  {
                    "x": 0,
                    "y": 130
                  },
                  {
                    "x": 25,
                    "y": 110
                  },
                  {
                    "x": 45,
                    "y": 95
                  },
                  {
                    "x": 75,
                    "y": 85
                  },
                  {
                    "x": 95,
                    "y": 80
                  },
                  {
                    "x": 110,
                    "y": 80
                  },
                  {
                    "x": 125,
                    "y": 60
                  },
                  {
                    "x": 150,
                    "y": 30
                  },
                  {
                    "x": 165,
                    "y": 0
                  }
                ],
                "borderColor": "#8ba752"
              }
            ]
          },
          "status": "pending_review",
          "source": "scripts/fan-chart.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selector": {
          "value": {
            "name": "HS-100P",
            "minCFM": 1,
            "maxCFM": 100,
            "minPa": 30,
            "data": [
              [
                0,
                156
              ],
              [
                50,
                135
              ],
              [
                100,
                98
              ],
              [
                125,
                90
              ],
              [
                150,
                69
              ],
              [
                175,
                40
              ],
              [
                198,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "airflow": {
          "value": {
            "name": "HS-100P",
            "data": [
              [
                0,
                156
              ],
              [
                50,
                135
              ],
              [
                100,
                98
              ],
              [
                125,
                90
              ],
              [
                150,
                69
              ],
              [
                175,
                40
              ],
              [
                198,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/airflow-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "pdf": {
          "value": {
            "airflow": 198,
            "voltage": "220-240V-/50Hz",
            "rpm": 2200,
            "power": 26,
            "amps": 0.12,
            "noise": 31
          },
          "status": "pending_review",
          "source": "tools/esp-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selectionRange": {
          "value": {
            "name": "HS-100P",
            "minCFM": 1,
            "maxCFM": 100,
            "minPa": 30
          },
          "status": "do_not_publish",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "conflicts": [],
      "legacyDisplay": {
        "products/commercial/mixed-flow/hs-100p.html:0:0": {
          "value": "H",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-100p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-100p.html:0:1": {
          "value": "198",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-100p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-100p.html:0:2": {
          "value": "220-240V~/50Hz",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-100p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-100p.html:0:3": {
          "value": "2200",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-100p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-100p.html:0:4": {
          "value": "26",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-100p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-100p.html:0:5": {
          "value": "0.12",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-100p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-100p.html:0:6": {
          "value": "31",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-100p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-100p.html:1:0": {
          "value": "L",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-100p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-100p.html:1:1": {
          "value": "165",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-100p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-100p.html:1:2": {
          "value": "220-240V~/50Hz",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-100p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-100p.html:1:3": {
          "value": "1850",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-100p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-100p.html:1:4": {
          "value": "23",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-100p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-100p.html:1:5": {
          "value": "0.11",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-100p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-100p.html:1:6": {
          "value": "26",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-100p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:0": {
          "value": "H",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:1": {
          "value": "198",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:2": {
          "value": "220-240",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:3": {
          "value": "2200",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:4": {
          "value": "26",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:5": {
          "value": "0.12",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:6": {
          "value": "31",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:0": {
          "value": "L",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:1": {
          "value": "165",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:2": {
          "value": "V~/50HZ",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:3": {
          "value": "1850",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:4": {
          "value": "23",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:5": {
          "value": "0.11",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:6": {
          "value": "26",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      }
    },
    "HS-125P": {
      "id": "HS-125P",
      "metadata": {
        "series": {
          "value": "HS",
          "status": "verified",
          "source": "Repository model identity",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "page": {
          "value": "products/commercial/mixed-flow/hs-125p.html",
          "status": "verified",
          "source": "Repository route",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "electrical": {
        "high": {
          "voltage": {
            "value": "220-240V~/50Hz",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-125p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "powerW": {
            "value": "33",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-125p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "currentA": {
            "value": "0.16",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-125p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        },
        "low": {
          "voltage": {
            "value": "220-240V~/50Hz",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-125p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "powerW": {
            "value": "28",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-125p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "currentA": {
            "value": "0.13",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-125p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "speeds": {
        "high": {
          "airflowM3h": {
            "value": "284",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-125p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "2250",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-125p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "32",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-125p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        },
        "low": {
          "airflowM3h": {
            "value": "248",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-125p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "1850",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-125p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "26",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-125p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "dimensions": {},
      "images": {
        "product": {
          "value": "Media/optimized/HS-125P/1.webp",
          "status": "verified",
          "source": "products/commercial/mixed-flow/hs-125p.html existing product image",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "sourceRevision": {
        "value": null,
        "status": "pending_review",
        "source": "Awaiting approved Prodigy/supplier datasheet",
        "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
      },
      "performance": {
        "status": "pending_review",
        "curves": [],
        "source": null,
        "revision": null
      },
      "observations": {
        "productPage": {
          "value": {
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
          "status": "pending_review",
          "source": "Product HTML / supplied handoff",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "chart": {
          "value": {
            "maxX": 300,
            "maxY": 160,
            "stepX": 50,
            "stepY": 20,
            "IsMS": false,
            "datasets": [
              {
                "label": "HS (High Speed)",
                "data": [
                  {
                    "x": 0,
                    "y": 160
                  },
                  {
                    "x": 50,
                    "y": 120
                  },
                  {
                    "x": 100,
                    "y": 105
                  },
                  {
                    "x": 135,
                    "y": 95
                  },
                  {
                    "x": 150,
                    "y": 100
                  },
                  {
                    "x": 200,
                    "y": 75
                  },
                  {
                    "x": 250,
                    "y": 35
                  },
                  {
                    "x": 285,
                    "y": 0
                  }
                ],
                "borderColor": "#b24341"
              },
              {
                "label": "LS (Low Speed)",
                "data": [
                  {
                    "x": 0,
                    "y": 105
                  },
                  {
                    "x": 25,
                    "y": 85
                  },
                  {
                    "x": 75,
                    "y": 78
                  },
                  {
                    "x": 125,
                    "y": 65
                  },
                  {
                    "x": 175,
                    "y": 45
                  },
                  {
                    "x": 250,
                    "y": 0
                  }
                ],
                "borderColor": "#8ba752"
              }
            ]
          },
          "status": "pending_review",
          "source": "scripts/fan-chart.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selector": {
          "value": null,
          "status": "pending_review",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "airflow": {
          "value": null,
          "status": "pending_review",
          "source": "tools/airflow-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "pdf": {
          "value": null,
          "status": "pending_review",
          "source": "tools/esp-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selectionRange": {
          "value": null,
          "status": "do_not_publish",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "conflicts": [],
      "legacyDisplay": {
        "products/commercial/mixed-flow/hs-125p.html:0:0": {
          "value": "H",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-125p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-125p.html:0:1": {
          "value": "284",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-125p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-125p.html:0:2": {
          "value": "220-240V~/50Hz",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-125p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-125p.html:0:3": {
          "value": "2250",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-125p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-125p.html:0:4": {
          "value": "33",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-125p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-125p.html:0:5": {
          "value": "0.16",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-125p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-125p.html:0:6": {
          "value": "32",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-125p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-125p.html:1:0": {
          "value": "L",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-125p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-125p.html:1:1": {
          "value": "248",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-125p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-125p.html:1:2": {
          "value": "220-240V~/50Hz",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-125p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-125p.html:1:3": {
          "value": "1850",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-125p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-125p.html:1:4": {
          "value": "28",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-125p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-125p.html:1:5": {
          "value": "0.13",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-125p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-125p.html:1:6": {
          "value": "26",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-125p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:0": {
          "value": "H",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:1": {
          "value": "284",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:2": {
          "value": "220-240V~/50Hz",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:3": {
          "value": "2250",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:4": {
          "value": "33",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:5": {
          "value": "0.14",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:6": {
          "value": "32",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:0": {
          "value": "L",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:1": {
          "value": "248",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:2": {
          "value": "220-240V~/50Hz",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:3": {
          "value": "1850",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:4": {
          "value": "28",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:5": {
          "value": "0.13",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:6": {
          "value": "26",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      }
    },
    "HS-150P": {
      "id": "HS-150P",
      "metadata": {
        "series": {
          "value": "HS",
          "status": "verified",
          "source": "Repository model identity",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "page": {
          "value": "products/commercial/mixed-flow/hs-150p.html",
          "status": "verified",
          "source": "Repository route",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "electrical": {
        "high": {
          "voltage": {
            "value": "220-240V~/50Hz",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-150p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "powerW": {
            "value": "54",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-150p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "currentA": {
            "value": "0.26",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-150p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        },
        "low": {
          "voltage": {
            "value": "220-240V~/50Hz",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-150p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "powerW": {
            "value": "44",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-150p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "currentA": {
            "value": "0.21",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-150p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "speeds": {
        "high": {
          "airflowM3h": {
            "value": "530",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-150p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "2250",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-150p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "33",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-150p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        },
        "low": {
          "airflowM3h": {
            "value": "410",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-150p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "1850",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-150p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "29",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-150p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "dimensions": {},
      "images": {
        "product": {
          "value": "Media/optimized/HS-150P/1.webp",
          "status": "verified",
          "source": "products/commercial/mixed-flow/hs-150p.html existing product image",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "sourceRevision": {
        "value": null,
        "status": "pending_review",
        "source": "Awaiting approved Prodigy/supplier datasheet",
        "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
      },
      "performance": {
        "status": "pending_review",
        "curves": [],
        "source": null,
        "revision": null
      },
      "observations": {
        "productPage": {
          "value": {
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
          "status": "pending_review",
          "source": "Product HTML / supplied handoff",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "chart": {
          "value": {
            "maxX": 540,
            "maxY": 300,
            "stepX": 90,
            "stepY": 50,
            "IsMS": false,
            "datasets": [
              {
                "label": "HS (High Speed)",
                "data": [
                  {
                    "x": 0,
                    "y": 300
                  },
                  {
                    "x": 45,
                    "y": 240
                  },
                  {
                    "x": 90,
                    "y": 200
                  },
                  {
                    "x": 135,
                    "y": 180
                  },
                  {
                    "x": 180,
                    "y": 180
                  },
                  {
                    "x": 270,
                    "y": 170
                  },
                  {
                    "x": 315,
                    "y": 160
                  },
                  {
                    "x": 360,
                    "y": 135
                  },
                  {
                    "x": 450,
                    "y": 65
                  },
                  {
                    "x": 530,
                    "y": 0
                  }
                ],
                "borderColor": "#b24341"
              },
              {
                "label": "LS (Low Speed)",
                "data": [
                  {
                    "x": 0,
                    "y": 240
                  },
                  {
                    "x": 45,
                    "y": 205
                  },
                  {
                    "x": 90,
                    "y": 170
                  },
                  {
                    "x": 135,
                    "y": 160
                  },
                  {
                    "x": 180,
                    "y": 155
                  },
                  {
                    "x": 270,
                    "y": 125
                  },
                  {
                    "x": 315,
                    "y": 90
                  },
                  {
                    "x": 360,
                    "y": 45
                  },
                  {
                    "x": 410,
                    "y": 0
                  }
                ],
                "borderColor": "#8ba752"
              }
            ]
          },
          "status": "pending_review",
          "source": "scripts/fan-chart.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selector": {
          "value": {
            "name": "HS-150P",
            "minCFM": 101,
            "maxCFM": 221,
            "minPa": 120,
            "data": [
              [
                0,
                300
              ],
              [
                90,
                200
              ],
              [
                180,
                180
              ],
              [
                270,
                165
              ],
              [
                360,
                135
              ],
              [
                450,
                55
              ],
              [
                530,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "airflow": {
          "value": {
            "name": "HS-150P",
            "data": [
              [
                0,
                300
              ],
              [
                90,
                200
              ],
              [
                180,
                180
              ],
              [
                270,
                165
              ],
              [
                360,
                135
              ],
              [
                450,
                55
              ],
              [
                530,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/airflow-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "pdf": {
          "value": {
            "airflow": 530,
            "voltage": "220-240V-/50Hz",
            "rpm": 2550,
            "power": 54,
            "amps": 0.22,
            "noise": 33
          },
          "status": "pending_review",
          "source": "tools/esp-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selectionRange": {
          "value": {
            "name": "HS-150P",
            "minCFM": 101,
            "maxCFM": 221,
            "minPa": 120
          },
          "status": "do_not_publish",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "conflicts": [
        "high.rpm",
        "high.currentA"
      ],
      "legacyDisplay": {
        "products/commercial/mixed-flow/hs-150p.html:0:0": {
          "value": "H",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-150p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-150p.html:0:1": {
          "value": "530",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-150p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-150p.html:0:2": {
          "value": "220-240V~/50Hz",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-150p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-150p.html:0:3": {
          "value": "2250",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-150p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-150p.html:0:4": {
          "value": "54",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-150p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-150p.html:0:5": {
          "value": "0.26",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-150p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-150p.html:0:6": {
          "value": "33",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-150p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-150p.html:1:0": {
          "value": "L",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-150p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-150p.html:1:1": {
          "value": "410",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-150p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-150p.html:1:2": {
          "value": "220-240V~/50Hz",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-150p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-150p.html:1:3": {
          "value": "1850",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-150p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-150p.html:1:4": {
          "value": "44",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-150p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-150p.html:1:5": {
          "value": "0.21",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-150p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-150p.html:1:6": {
          "value": "29",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-150p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:0": {
          "value": "H",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:1": {
          "value": "530",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:2": {
          "value": "220-240",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:3": {
          "value": "2250",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:4": {
          "value": "54",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:5": {
          "value": "0.22",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:6": {
          "value": "33",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:0": {
          "value": "L",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:1": {
          "value": "410",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:2": {
          "value": "V~/50Hz",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:3": {
          "value": "1850",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:4": {
          "value": "44",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:5": {
          "value": "0.19",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:6": {
          "value": "29",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      }
    },
    "HS-200P": {
      "id": "HS-200P",
      "metadata": {
        "series": {
          "value": "HS",
          "status": "verified",
          "source": "Repository model identity",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "page": {
          "value": "products/commercial/mixed-flow/hs-200p.html",
          "status": "verified",
          "source": "Repository route",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "electrical": {
        "high": {
          "voltage": {
            "value": "220-240V~/50Hz",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-200p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "powerW": {
            "value": "128",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-200p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "currentA": {
            "value": "0.62",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-200p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        },
        "low": {
          "voltage": {
            "value": "220-240V~/50Hz",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-200p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "powerW": {
            "value": "123",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-200p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "currentA": {
            "value": "0.60",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-200p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "speeds": {
        "high": {
          "airflowM3h": {
            "value": "840",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-200p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "2450",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-200p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "63",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-200p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        },
        "low": {
          "airflowM3h": {
            "value": "690",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-200p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "1950",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-200p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "55",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-200p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "dimensions": {},
      "images": {
        "product": {
          "value": "Media/optimized/HS-200P/1.webp",
          "status": "verified",
          "source": "products/commercial/mixed-flow/hs-200p.html existing product image",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "sourceRevision": {
        "value": null,
        "status": "pending_review",
        "source": "Awaiting approved Prodigy/supplier datasheet",
        "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
      },
      "performance": {
        "status": "pending_review",
        "curves": [],
        "source": null,
        "revision": null
      },
      "observations": {
        "productPage": {
          "value": {
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
          "status": "pending_review",
          "source": "Product HTML / supplied handoff",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "chart": {
          "value": {
            "maxX": 900,
            "maxY": 400,
            "stepX": 100,
            "stepY": 50,
            "IsMS": false,
            "datasets": [
              {
                "label": "HS",
                "data": [
                  {
                    "x": 0,
                    "y": 350
                  },
                  {
                    "x": 100,
                    "y": 275
                  },
                  {
                    "x": 200,
                    "y": 240
                  },
                  {
                    "x": 300,
                    "y": 210
                  },
                  {
                    "x": 400,
                    "y": 195
                  },
                  {
                    "x": 500,
                    "y": 180
                  },
                  {
                    "x": 600,
                    "y": 150
                  },
                  {
                    "x": 700,
                    "y": 105
                  },
                  {
                    "x": 800,
                    "y": 45
                  },
                  {
                    "x": 840,
                    "y": 0
                  }
                ],
                "borderColor": "#b24341"
              },
              {
                "label": "LS",
                "data": [
                  {
                    "x": 0,
                    "y": 275
                  },
                  {
                    "x": 100,
                    "y": 225
                  },
                  {
                    "x": 200,
                    "y": 195
                  },
                  {
                    "x": 300,
                    "y": 165
                  },
                  {
                    "x": 400,
                    "y": 120
                  },
                  {
                    "x": 500,
                    "y": 90
                  },
                  {
                    "x": 600,
                    "y": 50
                  },
                  {
                    "x": 700,
                    "y": 0
                  }
                ],
                "borderColor": "#8ba752"
              }
            ]
          },
          "status": "pending_review",
          "source": "scripts/fan-chart.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selector": {
          "value": {
            "name": "HS-200P",
            "minCFM": 222,
            "maxCFM": 336,
            "minPa": 150,
            "data": [
              [
                0,
                352
              ],
              [
                100,
                280
              ],
              [
                200,
                245
              ],
              [
                300,
                210
              ],
              [
                400,
                195
              ],
              [
                500,
                175
              ],
              [
                600,
                140
              ],
              [
                700,
                100
              ],
              [
                840,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "airflow": {
          "value": {
            "name": "HS-200P",
            "data": [
              [
                0,
                352
              ],
              [
                100,
                280
              ],
              [
                200,
                245
              ],
              [
                300,
                210
              ],
              [
                400,
                195
              ],
              [
                500,
                175
              ],
              [
                600,
                140
              ],
              [
                700,
                100
              ],
              [
                840,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/airflow-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "pdf": {
          "value": {
            "airflow": 840,
            "voltage": "220-240V-/50Hz",
            "rpm": 2450,
            "power": 128,
            "amps": 0.53,
            "noise": 63
          },
          "status": "pending_review",
          "source": "tools/esp-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selectionRange": {
          "value": {
            "name": "HS-200P",
            "minCFM": 222,
            "maxCFM": 336,
            "minPa": 150
          },
          "status": "do_not_publish",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "conflicts": [],
      "legacyDisplay": {
        "products/commercial/mixed-flow/hs-200p.html:0:0": {
          "value": "H",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-200p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-200p.html:0:1": {
          "value": "840",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-200p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-200p.html:0:2": {
          "value": "220-240V~/50Hz",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-200p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-200p.html:0:3": {
          "value": "2450",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-200p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-200p.html:0:4": {
          "value": "128",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-200p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-200p.html:0:5": {
          "value": "0.62",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-200p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-200p.html:0:6": {
          "value": "63",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-200p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-200p.html:1:0": {
          "value": "L",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-200p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-200p.html:1:1": {
          "value": "690",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-200p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-200p.html:1:2": {
          "value": "220-240V~/50Hz",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-200p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-200p.html:1:3": {
          "value": "1950",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-200p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-200p.html:1:4": {
          "value": "123",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-200p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-200p.html:1:5": {
          "value": "0.60",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-200p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-200p.html:1:6": {
          "value": "55",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-200p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:0": {
          "value": "H",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:1": {
          "value": "840",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:2": {
          "value": "220-240",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:3": {
          "value": "2450",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:4": {
          "value": "128",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:5": {
          "value": "0.53",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:6": {
          "value": "63",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:0": {
          "value": "L",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:1": {
          "value": "690",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:2": {
          "value": "V~/50Hz",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:3": {
          "value": "1950",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:4": {
          "value": "123",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:5": {
          "value": "0.52",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:6": {
          "value": "55",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      }
    },
    "HS-250P": {
      "id": "HS-250P",
      "metadata": {
        "series": {
          "value": "HS",
          "status": "verified",
          "source": "Repository model identity",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "page": {
          "value": "products/commercial/mixed-flow/hs-250p.html",
          "status": "verified",
          "source": "Repository route",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "electrical": {
        "high": {
          "voltage": {
            "value": "220-240V~/50Hz",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-250p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "powerW": {
            "value": "225",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-250p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "currentA": {
            "value": "1.09",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-250p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        },
        "low": {
          "voltage": {
            "value": "220-240V~/50Hz",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-250p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "powerW": {
            "value": "165",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-250p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "currentA": {
            "value": "0.80",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-250p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "speeds": {
        "high": {
          "airflowM3h": {
            "value": "1405",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-250p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "2450",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-250p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "66",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-250p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        },
        "low": {
          "airflowM3h": {
            "value": "1064",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-250p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "1850",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-250p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "58",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-250p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "dimensions": {},
      "images": {
        "product": {
          "value": "Media/optimized/HS-250P/1.webp",
          "status": "verified",
          "source": "products/commercial/mixed-flow/hs-250p.html existing product image",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "sourceRevision": {
        "value": null,
        "status": "pending_review",
        "source": "Awaiting approved Prodigy/supplier datasheet",
        "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
      },
      "performance": {
        "status": "pending_review",
        "curves": [],
        "source": null,
        "revision": null
      },
      "observations": {
        "productPage": {
          "value": {
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
          "status": "pending_review",
          "source": "Product HTML / supplied handoff",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "chart": {
          "value": {
            "maxX": 1400,
            "maxY": 500,
            "stepX": 200,
            "stepY": 50,
            "IsMS": false,
            "datasets": [
              {
                "label": "HS (High Speed)",
                "data": [
                  {
                    "x": 0,
                    "y": 490
                  },
                  {
                    "x": 100,
                    "y": 460
                  },
                  {
                    "x": 200,
                    "y": 420
                  },
                  {
                    "x": 400,
                    "y": 360
                  },
                  {
                    "x": 600,
                    "y": 300
                  },
                  {
                    "x": 800,
                    "y": 260
                  },
                  {
                    "x": 1000,
                    "y": 220
                  },
                  {
                    "x": 1150,
                    "y": 190
                  },
                  {
                    "x": 1250,
                    "y": 110
                  },
                  {
                    "x": 1400,
                    "y": 0
                  }
                ],
                "borderColor": "#b24341"
              },
              {
                "label": "LS (Low Speed)",
                "data": [
                  {
                    "x": 0,
                    "y": 370
                  },
                  {
                    "x": 200,
                    "y": 290
                  },
                  {
                    "x": 380,
                    "y": 210
                  },
                  {
                    "x": 400,
                    "y": 200
                  },
                  {
                    "x": 600,
                    "y": 140
                  },
                  {
                    "x": 800,
                    "y": 90
                  },
                  {
                    "x": 1000,
                    "y": 40
                  },
                  {
                    "x": 1100,
                    "y": 0
                  }
                ],
                "borderColor": "#8ba752"
              }
            ]
          },
          "status": "pending_review",
          "source": "scripts/fan-chart.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selector": {
          "value": {
            "name": "HS-250P",
            "minCFM": 337,
            "maxCFM": 607,
            "minPa": 200,
            "data": [
              [
                0,
                488
              ],
              [
                200,
                420
              ],
              [
                400,
                355
              ],
              [
                600,
                300
              ],
              [
                800,
                255
              ],
              [
                1200,
                160
              ],
              [
                1405,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "airflow": {
          "value": {
            "name": "HS-250P",
            "data": [
              [
                0,
                488
              ],
              [
                200,
                420
              ],
              [
                400,
                355
              ],
              [
                600,
                300
              ],
              [
                800,
                255
              ],
              [
                1200,
                160
              ],
              [
                1405,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/airflow-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "pdf": {
          "value": {
            "airflow": 1405,
            "voltage": "220-240V-/50Hz",
            "rpm": 2450,
            "power": 225,
            "amps": 1.2,
            "noise": 66
          },
          "status": "pending_review",
          "source": "tools/esp-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selectionRange": {
          "value": {
            "name": "HS-250P",
            "minCFM": 337,
            "maxCFM": 607,
            "minPa": 200
          },
          "status": "do_not_publish",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "conflicts": [],
      "legacyDisplay": {
        "products/commercial/mixed-flow/hs-250p.html:0:0": {
          "value": "H",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-250p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-250p.html:0:1": {
          "value": "1405",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-250p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-250p.html:0:2": {
          "value": "220-240V~/50Hz",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-250p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-250p.html:0:3": {
          "value": "2450",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-250p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-250p.html:0:4": {
          "value": "225",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-250p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-250p.html:0:5": {
          "value": "1.09",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-250p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-250p.html:0:6": {
          "value": "66",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-250p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-250p.html:1:0": {
          "value": "L",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-250p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-250p.html:1:1": {
          "value": "1064",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-250p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-250p.html:1:2": {
          "value": "220-240V~/50Hz",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-250p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-250p.html:1:3": {
          "value": "1850",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-250p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-250p.html:1:4": {
          "value": "165",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-250p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-250p.html:1:5": {
          "value": "0.80",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-250p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-250p.html:1:6": {
          "value": "58",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-250p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:0": {
          "value": "H",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:1": {
          "value": "1405",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:2": {
          "value": "220-240",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:3": {
          "value": "2450",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:4": {
          "value": "225",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:5": {
          "value": "1.20",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:6": {
          "value": "66",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:0": {
          "value": "L",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:1": {
          "value": "1064",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:2": {
          "value": "V~/50HZ",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:3": {
          "value": "1850",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:4": {
          "value": "165",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:5": {
          "value": "0.75",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:6": {
          "value": "58",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      }
    },
    "HS-315P": {
      "id": "HS-315P",
      "metadata": {
        "series": {
          "value": "HS",
          "status": "verified",
          "source": "Repository model identity",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "page": {
          "value": "products/commercial/mixed-flow/hs-315p.html",
          "status": "verified",
          "source": "Repository route",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "electrical": {
        "high": {
          "voltage": {
            "value": "220-240V~/50Hz",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-315p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "powerW": {
            "value": "390",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-315p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "currentA": {
            "value": "1.90",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-315p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        },
        "low": {
          "voltage": {
            "value": "220-240V~/50Hz",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-315p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "powerW": {
            "value": "290",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-315p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "currentA": {
            "value": "1.40",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-315p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "speeds": {
        "high": {
          "airflowM3h": {
            "value": "2206",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-315p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "2350",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-315p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "69",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-315p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        },
        "low": {
          "airflowM3h": {
            "value": "1750",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-315p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "1650",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-315p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "61",
            "status": "pending_review",
            "source": "products/commercial/mixed-flow/hs-315p.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "dimensions": {},
      "images": {
        "product": {
          "value": "Media/optimized/HS-315P/1.webp",
          "status": "verified",
          "source": "products/commercial/mixed-flow/hs-315p.html existing product image",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "sourceRevision": {
        "value": null,
        "status": "pending_review",
        "source": "Awaiting approved Prodigy/supplier datasheet",
        "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
      },
      "performance": {
        "status": "pending_review",
        "curves": [],
        "source": null,
        "revision": null
      },
      "observations": {
        "productPage": {
          "value": {
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
          "status": "pending_review",
          "source": "Product HTML / supplied handoff",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "chart": {
          "value": {
            "maxX": 2200,
            "maxY": 700,
            "stepX": 220,
            "stepY": 100,
            "IsMS": false,
            "datasets": [
              {
                "label": "HS",
                "borderColor": "#b24341",
                "data": [
                  {
                    "x": 0,
                    "y": 700
                  },
                  {
                    "x": 440,
                    "y": 500
                  },
                  {
                    "x": 880,
                    "y": 320
                  },
                  {
                    "x": 1320,
                    "y": 220
                  },
                  {
                    "x": 1760,
                    "y": 120
                  },
                  {
                    "x": 2200,
                    "y": 0
                  }
                ]
              },
              {
                "label": "LS",
                "borderColor": "#8ba752",
                "data": [
                  {
                    "x": 0,
                    "y": 440
                  },
                  {
                    "x": 440,
                    "y": 280
                  },
                  {
                    "x": 660,
                    "y": 220
                  },
                  {
                    "x": 1100,
                    "y": 120
                  },
                  {
                    "x": 1760,
                    "y": 0
                  }
                ]
              }
            ]
          },
          "status": "pending_review",
          "source": "scripts/fan-chart.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selector": {
          "value": {
            "name": "HS-315P",
            "minCFM": 608,
            "maxCFM": 1297,
            "minPa": 200,
            "data": [
              [
                0,
                693
              ],
              [
                220,
                600
              ],
              [
                440,
                500
              ],
              [
                660,
                400
              ],
              [
                880,
                315
              ],
              [
                1100,
                275
              ],
              [
                1320,
                220
              ],
              [
                1540,
                180
              ],
              [
                1760,
                120
              ],
              [
                1980,
                50
              ],
              [
                2206,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "airflow": {
          "value": {
            "name": "HS-315P",
            "data": [
              [
                0,
                693
              ],
              [
                220,
                600
              ],
              [
                440,
                500
              ],
              [
                660,
                400
              ],
              [
                880,
                315
              ],
              [
                1100,
                275
              ],
              [
                1320,
                220
              ],
              [
                1540,
                180
              ],
              [
                1760,
                120
              ],
              [
                1980,
                50
              ],
              [
                2206,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/airflow-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "pdf": {
          "value": {
            "airflow": 2206,
            "voltage": "220-240V-/50Hz",
            "rpm": 2350,
            "power": 390,
            "amps": 1.9,
            "noise": 69
          },
          "status": "pending_review",
          "source": "tools/esp-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selectionRange": {
          "value": {
            "name": "HS-315P",
            "minCFM": 608,
            "maxCFM": 1297,
            "minPa": 200
          },
          "status": "do_not_publish",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "conflicts": [],
      "legacyDisplay": {
        "products/commercial/mixed-flow/hs-315p.html:0:0": {
          "value": "H",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-315p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-315p.html:0:1": {
          "value": "2206",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-315p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-315p.html:0:2": {
          "value": "220-240V~/50Hz",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-315p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-315p.html:0:3": {
          "value": "2350",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-315p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-315p.html:0:4": {
          "value": "390",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-315p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-315p.html:0:5": {
          "value": "1.90",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-315p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-315p.html:0:6": {
          "value": "69",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-315p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-315p.html:1:0": {
          "value": "L",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-315p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-315p.html:1:1": {
          "value": "1750",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-315p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-315p.html:1:2": {
          "value": "220-240V~/50Hz",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-315p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-315p.html:1:3": {
          "value": "1650",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-315p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-315p.html:1:4": {
          "value": "290",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-315p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-315p.html:1:5": {
          "value": "1.40",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-315p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/hs-315p.html:1:6": {
          "value": "61",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/hs-315p.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:0": {
          "value": "H",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:1": {
          "value": "2206",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:2": {
          "value": "220-240",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:3": {
          "value": "2350",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:4": {
          "value": "390",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:5": {
          "value": "1.90",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:0:6": {
          "value": "69",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:0": {
          "value": "L",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:1": {
          "value": "1750",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:2": {
          "value": "V~/50HZ",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:3": {
          "value": "1650",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:4": {
          "value": "275",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:5": {
          "value": "1.40",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/mixed-flow/index.html:1:6": {
          "value": "61",
          "status": "pending_review",
          "source": "products/commercial/mixed-flow/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      }
    },
    "MS-100M": {
      "id": "MS-100M",
      "metadata": {
        "series": {
          "value": "MS",
          "status": "verified",
          "source": "Repository model identity",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "page": {
          "value": "products/commercial/backward-centrifugal/ms-100m.html",
          "status": "verified",
          "source": "Repository route",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "electrical": {
        "high": {
          "powerW": {
            "value": "85W",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-100m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "speeds": {
        "high": {
          "airflowM3h": {
            "value": "310 m³/h",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-100m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "declaredPressurePa": {
            "value": "315 Pa",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-100m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "52 dB",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-100m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "2350",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/index.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "dimensions": {
        "high": {
          "diameterMm": {
            "value": "Ø100 mm",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-100m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "weightKg": {
            "value": "3.6 kg",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-100m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "images": {
        "product": {
          "value": "Media/optimized/MSFan.webp",
          "status": "verified",
          "source": "products/commercial/backward-centrifugal/ms-100m.html existing product image",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "sourceRevision": {
        "value": null,
        "status": "pending_review",
        "source": "Awaiting approved Prodigy/supplier datasheet",
        "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
      },
      "performance": {
        "status": "pending_review",
        "curves": [],
        "source": null,
        "revision": null
      },
      "observations": {
        "productPage": {
          "value": {
            "powerW": 85,
            "airflowM3h": 310,
            "declaredPressurePa": 315,
            "diameterMm": 100,
            "noiseDb": 52,
            "weightKg": 3.6
          },
          "status": "pending_review",
          "source": "Product HTML / supplied handoff",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "chart": {
          "value": {
            "maxX": 350,
            "maxY": 350,
            "stepX": 100,
            "stepY": 50,
            "IsMS": true,
            "datasets": [
              {
                "label": "MS-100M",
                "data": [
                  {
                    "x": 0,
                    "y": 310
                  },
                  {
                    "x": 50,
                    "y": 300
                  },
                  {
                    "x": 100,
                    "y": 280
                  },
                  {
                    "x": 150,
                    "y": 245
                  },
                  {
                    "x": 200,
                    "y": 195
                  },
                  {
                    "x": 250,
                    "y": 125
                  },
                  {
                    "x": 275,
                    "y": 75
                  },
                  {
                    "x": 300,
                    "y": 0
                  }
                ],
                "borderColor": "#555555"
              }
            ]
          },
          "status": "pending_review",
          "source": "scripts/fan-chart.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selector": {
          "value": {
            "name": "MS-100M",
            "minCFM": 0,
            "maxCFM": 160,
            "minPa": 50,
            "data": [
              [
                0,
                315
              ],
              [
                62,
                295
              ],
              [
                124,
                270
              ],
              [
                155,
                250
              ],
              [
                186,
                224
              ],
              [
                217,
                180
              ],
              [
                248,
                125
              ],
              [
                310,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "airflow": {
          "value": {
            "name": "MS-100M",
            "data": [
              [
                0,
                315
              ],
              [
                62,
                295
              ],
              [
                124,
                270
              ],
              [
                155,
                250
              ],
              [
                186,
                224
              ],
              [
                217,
                180
              ],
              [
                248,
                125
              ],
              [
                310,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/airflow-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "pdf": {
          "value": {
            "airflow": 310,
            "voltage": "220-240V-/50Hz",
            "rpm": 2350,
            "power": 85,
            "amps": 0.32,
            "noise": 52
          },
          "status": "pending_review",
          "source": "tools/esp-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selectionRange": {
          "value": {
            "name": "MS-100M",
            "minCFM": 0,
            "maxCFM": 160,
            "minPa": 50
          },
          "status": "do_not_publish",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "conflicts": [],
      "legacyDisplay": {
        "products/commercial/backward-centrifugal/ms-100m.html:0:0": {
          "value": "85W",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-100m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-100m.html:0:1": {
          "value": "310 m³/h",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-100m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-100m.html:0:2": {
          "value": "315 Pa",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-100m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-100m.html:0:3": {
          "value": "Ø100 mm",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-100m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-100m.html:0:4": {
          "value": "52 dB",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-100m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-100m.html:0:5": {
          "value": "3.6 kg",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-100m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:0": {
          "value": "Single",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:1": {
          "value": "310",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:2": {
          "value": "2350",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:3": {
          "value": "85",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:4": {
          "value": "52",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      }
    },
    "MS-125M": {
      "id": "MS-125M",
      "metadata": {
        "series": {
          "value": "MS",
          "status": "verified",
          "source": "Repository model identity",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "page": {
          "value": "products/commercial/backward-centrifugal/ms-125m.html",
          "status": "verified",
          "source": "Repository route",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "electrical": {
        "high": {
          "powerW": {
            "value": "85W",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-125m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "speeds": {
        "high": {
          "airflowM3h": {
            "value": "385 m³/h",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-125m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "declaredPressurePa": {
            "value": "350 Pa",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-125m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "50 dB",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-125m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "2450",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/index.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "dimensions": {
        "high": {
          "diameterMm": {
            "value": "Ø125 mm",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-125m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "weightKg": {
            "value": "3.6 kg",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-125m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "images": {
        "product": {
          "value": "Media/optimized/MSFan.webp",
          "status": "verified",
          "source": "products/commercial/backward-centrifugal/ms-125m.html existing product image",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "sourceRevision": {
        "value": null,
        "status": "pending_review",
        "source": "Awaiting approved Prodigy/supplier datasheet",
        "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
      },
      "performance": {
        "status": "pending_review",
        "curves": [],
        "source": null,
        "revision": null
      },
      "observations": {
        "productPage": {
          "value": {
            "powerW": 85,
            "airflowM3h": 385,
            "declaredPressurePa": 350,
            "diameterMm": 125,
            "noiseDb": 50,
            "weightKg": 3.6
          },
          "status": "pending_review",
          "source": "Product HTML / supplied handoff",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "chart": {
          "value": {
            "maxX": 400,
            "maxY": 400,
            "stepX": 100,
            "stepY": 50,
            "IsMS": true,
            "datasets": [
              {
                "label": "MS-125M",
                "data": [
                  {
                    "x": 0,
                    "y": 350
                  },
                  {
                    "x": 50,
                    "y": 345
                  },
                  {
                    "x": 100,
                    "y": 330
                  },
                  {
                    "x": 150,
                    "y": 310
                  },
                  {
                    "x": 200,
                    "y": 280
                  },
                  {
                    "x": 250,
                    "y": 240
                  },
                  {
                    "x": 300,
                    "y": 175
                  },
                  {
                    "x": 350,
                    "y": 85
                  },
                  {
                    "x": 400,
                    "y": 0
                  }
                ],
                "borderColor": "#555555"
              }
            ]
          },
          "status": "pending_review",
          "source": "scripts/fan-chart.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selector": {
          "value": null,
          "status": "pending_review",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "airflow": {
          "value": null,
          "status": "pending_review",
          "source": "tools/airflow-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "pdf": {
          "value": null,
          "status": "pending_review",
          "source": "tools/esp-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selectionRange": {
          "value": null,
          "status": "do_not_publish",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "conflicts": [],
      "legacyDisplay": {
        "products/commercial/backward-centrifugal/ms-125m.html:0:0": {
          "value": "85W",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-125m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-125m.html:0:1": {
          "value": "385 m³/h",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-125m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-125m.html:0:2": {
          "value": "350 Pa",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-125m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-125m.html:0:3": {
          "value": "Ø125 mm",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-125m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-125m.html:0:4": {
          "value": "50 dB",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-125m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-125m.html:0:5": {
          "value": "3.6 kg",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-125m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:0": {
          "value": "Single",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:1": {
          "value": "385",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:2": {
          "value": "2450",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:3": {
          "value": "85",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:4": {
          "value": "50",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      }
    },
    "MS-150M": {
      "id": "MS-150M",
      "metadata": {
        "series": {
          "value": "MS",
          "status": "verified",
          "source": "Repository model identity",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "page": {
          "value": "products/commercial/backward-centrifugal/ms-150m.html",
          "status": "verified",
          "source": "Repository route",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "electrical": {
        "high": {
          "powerW": {
            "value": "105W",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-150m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "speeds": {
        "high": {
          "airflowM3h": {
            "value": "720 m³/h",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-150m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "declaredPressurePa": {
            "value": "443 Pa",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-150m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "53 dB",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-150m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "2400",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/index.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "dimensions": {
        "high": {
          "diameterMm": {
            "value": "Ø150 mm",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-150m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "weightKg": {
            "value": "5.2 kg",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-150m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "images": {
        "product": {
          "value": "Media/optimized/MSFan.webp",
          "status": "verified",
          "source": "products/commercial/backward-centrifugal/ms-150m.html existing product image",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "sourceRevision": {
        "value": null,
        "status": "pending_review",
        "source": "Awaiting approved Prodigy/supplier datasheet",
        "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
      },
      "performance": {
        "status": "pending_review",
        "curves": [],
        "source": null,
        "revision": null
      },
      "observations": {
        "productPage": {
          "value": {
            "powerW": 105,
            "airflowM3h": 720,
            "declaredPressurePa": 443,
            "diameterMm": 150,
            "noiseDb": 53,
            "weightKg": 5.2
          },
          "status": "pending_review",
          "source": "Product HTML / supplied handoff",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "chart": {
          "value": {
            "maxX": 800,
            "maxY": 500,
            "stepX": 100,
            "stepY": 100,
            "IsMS": true,
            "datasets": [
              {
                "label": "MS-150M",
                "data": [
                  {
                    "x": 0,
                    "y": 440
                  },
                  {
                    "x": 100,
                    "y": 430
                  },
                  {
                    "x": 200,
                    "y": 410
                  },
                  {
                    "x": 300,
                    "y": 385
                  },
                  {
                    "x": 400,
                    "y": 350
                  },
                  {
                    "x": 500,
                    "y": 300
                  },
                  {
                    "x": 600,
                    "y": 220
                  },
                  {
                    "x": 650,
                    "y": 140
                  },
                  {
                    "x": 720,
                    "y": 0
                  }
                ],
                "borderColor": "#555555"
              }
            ]
          },
          "status": "pending_review",
          "source": "scripts/fan-chart.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selector": {
          "value": {
            "name": "MS-150M",
            "minCFM": 161,
            "maxCFM": 359,
            "minPa": 160,
            "data": [
              [
                0,
                443
              ],
              [
                112,
                415
              ],
              [
                224,
                385
              ],
              [
                336,
                357
              ],
              [
                448,
                320
              ],
              [
                560,
                240
              ],
              [
                672,
                62
              ],
              [
                720,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "airflow": {
          "value": {
            "name": "MS-150M",
            "data": [
              [
                0,
                443
              ],
              [
                112,
                415
              ],
              [
                224,
                385
              ],
              [
                336,
                357
              ],
              [
                448,
                320
              ],
              [
                560,
                240
              ],
              [
                672,
                62
              ],
              [
                720,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/airflow-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "pdf": {
          "value": {
            "airflow": 720,
            "voltage": "220-240V-/50Hz",
            "rpm": 2400,
            "power": 105,
            "amps": 0.45,
            "noise": 53
          },
          "status": "pending_review",
          "source": "tools/esp-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selectionRange": {
          "value": {
            "name": "MS-150M",
            "minCFM": 161,
            "maxCFM": 359,
            "minPa": 160
          },
          "status": "do_not_publish",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "conflicts": [],
      "legacyDisplay": {
        "products/commercial/backward-centrifugal/ms-150m.html:0:0": {
          "value": "105W",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-150m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-150m.html:0:1": {
          "value": "720 m³/h",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-150m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-150m.html:0:2": {
          "value": "443 Pa",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-150m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-150m.html:0:3": {
          "value": "Ø150 mm",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-150m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-150m.html:0:4": {
          "value": "53 dB",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-150m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-150m.html:0:5": {
          "value": "5.2 kg",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-150m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:0": {
          "value": "Single",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:1": {
          "value": "720",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:2": {
          "value": "2400",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:3": {
          "value": "105",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:4": {
          "value": "53",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      }
    },
    "MS-200M": {
      "id": "MS-200M",
      "metadata": {
        "series": {
          "value": "MS",
          "status": "verified",
          "source": "Repository model identity",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "page": {
          "value": "products/commercial/backward-centrifugal/ms-200m.html",
          "status": "verified",
          "source": "Repository route",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "electrical": {
        "high": {
          "powerW": {
            "value": "160W",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-200m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "speeds": {
        "high": {
          "airflowM3h": {
            "value": "1120 m³/h",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-200m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "declaredPressurePa": {
            "value": "580 Pa",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-200m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "60 dB",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-200m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "2450",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/index.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "dimensions": {
        "high": {
          "diameterMm": {
            "value": "Ø200 mm",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-200m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "weightKg": {
            "value": "6.0 kg",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-200m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "images": {
        "product": {
          "value": "Media/optimized/MSFan.webp",
          "status": "verified",
          "source": "products/commercial/backward-centrifugal/ms-200m.html existing product image",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "sourceRevision": {
        "value": null,
        "status": "pending_review",
        "source": "Awaiting approved Prodigy/supplier datasheet",
        "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
      },
      "performance": {
        "status": "pending_review",
        "curves": [],
        "source": null,
        "revision": null
      },
      "observations": {
        "productPage": {
          "value": {
            "powerW": 160,
            "airflowM3h": 1120,
            "declaredPressurePa": 580,
            "diameterMm": 200,
            "noiseDb": 60,
            "weightKg": 6
          },
          "status": "pending_review",
          "source": "Product HTML / supplied handoff",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "chart": {
          "value": {
            "maxX": 1300,
            "maxY": 800,
            "stepX": 200,
            "stepY": 100,
            "IsMS": true,
            "datasets": [
              {
                "label": "MS-200M",
                "data": [
                  {
                    "x": 0,
                    "y": 580
                  },
                  {
                    "x": 200,
                    "y": 570
                  },
                  {
                    "x": 400,
                    "y": 550
                  },
                  {
                    "x": 600,
                    "y": 510
                  },
                  {
                    "x": 800,
                    "y": 440
                  },
                  {
                    "x": 900,
                    "y": 380
                  },
                  {
                    "x": 1000,
                    "y": 280
                  },
                  {
                    "x": 1100,
                    "y": 120
                  },
                  {
                    "x": 1120,
                    "y": 0
                  }
                ],
                "borderColor": "#555555"
              }
            ]
          },
          "status": "pending_review",
          "source": "scripts/fan-chart.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selector": {
          "value": {
            "name": "MS-200M",
            "minCFM": 360,
            "maxCFM": 500,
            "minPa": 300,
            "data": [
              [
                0,
                580
              ],
              [
                250,
                555
              ],
              [
                500,
                500
              ],
              [
                625,
                455
              ],
              [
                750,
                400
              ],
              [
                875,
                315
              ],
              [
                1000,
                155
              ],
              [
                1120,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "airflow": {
          "value": {
            "name": "MS-200M",
            "data": [
              [
                0,
                580
              ],
              [
                250,
                555
              ],
              [
                500,
                500
              ],
              [
                625,
                455
              ],
              [
                750,
                400
              ],
              [
                875,
                315
              ],
              [
                1000,
                155
              ],
              [
                1120,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/airflow-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "pdf": {
          "value": {
            "airflow": 1120,
            "voltage": "220-240V-/50Hz",
            "rpm": 2450,
            "power": 160,
            "amps": 0.72,
            "noise": 60
          },
          "status": "pending_review",
          "source": "tools/esp-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selectionRange": {
          "value": {
            "name": "MS-200M",
            "minCFM": 360,
            "maxCFM": 500,
            "minPa": 300
          },
          "status": "do_not_publish",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "conflicts": [],
      "legacyDisplay": {
        "products/commercial/backward-centrifugal/ms-200m.html:0:0": {
          "value": "160W",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-200m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-200m.html:0:1": {
          "value": "1120 m³/h",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-200m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-200m.html:0:2": {
          "value": "580 Pa",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-200m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-200m.html:0:3": {
          "value": "Ø200 mm",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-200m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-200m.html:0:4": {
          "value": "60 dB",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-200m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-200m.html:0:5": {
          "value": "6.0 kg",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-200m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:0": {
          "value": "Single",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:1": {
          "value": "1120",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:2": {
          "value": "2450",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:3": {
          "value": "160",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:4": {
          "value": "60",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      }
    },
    "MS-250M": {
      "id": "MS-250M",
      "metadata": {
        "series": {
          "value": "MS",
          "status": "verified",
          "source": "Repository model identity",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "page": {
          "value": "products/commercial/backward-centrifugal/ms-250m.html",
          "status": "verified",
          "source": "Repository route",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "electrical": {
        "high": {
          "powerW": {
            "value": "182W",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-250m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "speeds": {
        "high": {
          "airflowM3h": {
            "value": "1320 m³/h",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-250m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "declaredPressurePa": {
            "value": "570 Pa",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-250m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "62 dB",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-250m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "2450",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/index.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "dimensions": {
        "high": {
          "diameterMm": {
            "value": "Ø250 mm",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-250m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "weightKg": {
            "value": "6.0 kg",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-250m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "images": {
        "product": {
          "value": "Media/optimized/MSFan.webp",
          "status": "verified",
          "source": "products/commercial/backward-centrifugal/ms-250m.html existing product image",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "sourceRevision": {
        "value": null,
        "status": "pending_review",
        "source": "Awaiting approved Prodigy/supplier datasheet",
        "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
      },
      "performance": {
        "status": "pending_review",
        "curves": [],
        "source": null,
        "revision": null
      },
      "observations": {
        "productPage": {
          "value": {
            "powerW": 182,
            "airflowM3h": 1320,
            "declaredPressurePa": 570,
            "diameterMm": 250,
            "noiseDb": 62,
            "weightKg": 6
          },
          "status": "pending_review",
          "source": "Product HTML / supplied handoff",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "chart": {
          "value": {
            "maxX": 1600,
            "maxY": 800,
            "stepX": 400,
            "stepY": 100,
            "IsMS": true,
            "datasets": [
              {
                "label": "MS-250M",
                "data": [
                  {
                    "x": 0,
                    "y": 660
                  },
                  {
                    "x": 200,
                    "y": 650
                  },
                  {
                    "x": 400,
                    "y": 630
                  },
                  {
                    "x": 600,
                    "y": 600
                  },
                  {
                    "x": 800,
                    "y": 550
                  },
                  {
                    "x": 1000,
                    "y": 470
                  },
                  {
                    "x": 1200,
                    "y": 340
                  },
                  {
                    "x": 1300,
                    "y": 200
                  },
                  {
                    "x": 1400,
                    "y": 0
                  }
                ],
                "borderColor": "#555555"
              }
            ]
          },
          "status": "pending_review",
          "source": "scripts/fan-chart.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selector": {
          "value": {
            "name": "MS-250M",
            "minCFM": 501,
            "maxCFM": 691,
            "minPa": 300,
            "data": [
              [
                0,
                670
              ],
              [
                250,
                650
              ],
              [
                500,
                610
              ],
              [
                750,
                540
              ],
              [
                1000,
                440
              ],
              [
                1125,
                350
              ],
              [
                1250,
                225
              ],
              [
                1320,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "airflow": {
          "value": {
            "name": "MS-250M",
            "data": [
              [
                0,
                670
              ],
              [
                250,
                650
              ],
              [
                500,
                610
              ],
              [
                750,
                540
              ],
              [
                1000,
                440
              ],
              [
                1125,
                350
              ],
              [
                1250,
                225
              ],
              [
                1320,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/airflow-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "pdf": {
          "value": {
            "airflow": 1320,
            "voltage": "220-240V-/50Hz",
            "rpm": 2450,
            "power": 182,
            "amps": 0.83,
            "noise": 62
          },
          "status": "pending_review",
          "source": "tools/esp-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selectionRange": {
          "value": {
            "name": "MS-250M",
            "minCFM": 501,
            "maxCFM": 691,
            "minPa": 300
          },
          "status": "do_not_publish",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "conflicts": [
        "declaredPressurePa/curve"
      ],
      "legacyDisplay": {
        "products/commercial/backward-centrifugal/ms-250m.html:0:0": {
          "value": "182W",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-250m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-250m.html:0:1": {
          "value": "1320 m³/h",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-250m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-250m.html:0:2": {
          "value": "570 Pa",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-250m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-250m.html:0:3": {
          "value": "Ø250 mm",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-250m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-250m.html:0:4": {
          "value": "62 dB",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-250m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-250m.html:0:5": {
          "value": "6.0 kg",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-250m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:0": {
          "value": "Single",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:1": {
          "value": "1320",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:2": {
          "value": "2450",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:3": {
          "value": "182",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:4": {
          "value": "62",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      }
    },
    "MS-315M": {
      "id": "MS-315M",
      "metadata": {
        "series": {
          "value": "MS",
          "status": "verified",
          "source": "Repository model identity",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "page": {
          "value": "products/commercial/backward-centrifugal/ms-315m.html",
          "status": "verified",
          "source": "Repository route",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "electrical": {
        "high": {
          "powerW": {
            "value": "260W",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-315m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "speeds": {
        "high": {
          "airflowM3h": {
            "value": "1900 m³/h",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-315m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "declaredPressurePa": {
            "value": "700 Pa",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-315m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "noiseDb": {
            "value": "65 dB",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-315m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "rpm": {
            "value": "2450",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/index.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "dimensions": {
        "high": {
          "diameterMm": {
            "value": "Ø315 mm",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-315m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          },
          "weightKg": {
            "value": "7.8 kg",
            "status": "pending_review",
            "source": "products/commercial/backward-centrifugal/ms-315m.html",
            "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
          }
        }
      },
      "images": {
        "product": {
          "value": "Media/optimized/MSFan.webp",
          "status": "verified",
          "source": "products/commercial/backward-centrifugal/ms-315m.html existing product image",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "sourceRevision": {
        "value": null,
        "status": "pending_review",
        "source": "Awaiting approved Prodigy/supplier datasheet",
        "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
      },
      "performance": {
        "status": "pending_review",
        "curves": [],
        "source": null,
        "revision": null
      },
      "observations": {
        "productPage": {
          "value": {
            "powerW": 260,
            "airflowM3h": 1900,
            "declaredPressurePa": 700,
            "diameterMm": 315,
            "noiseDb": 65,
            "weightKg": 7.8
          },
          "status": "pending_review",
          "source": "Product HTML / supplied handoff",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "chart": {
          "value": {
            "maxX": 2000,
            "maxY": 800,
            "stepX": 400,
            "stepY": 100,
            "IsMS": true,
            "datasets": [
              {
                "label": "MS-315M",
                "data": [
                  {
                    "x": 0,
                    "y": 700
                  },
                  {
                    "x": 400,
                    "y": 660
                  },
                  {
                    "x": 800,
                    "y": 600
                  },
                  {
                    "x": 1200,
                    "y": 500
                  },
                  {
                    "x": 1400,
                    "y": 410
                  },
                  {
                    "x": 1600,
                    "y": 300
                  },
                  {
                    "x": 1800,
                    "y": 120
                  },
                  {
                    "x": 1900,
                    "y": 0
                  }
                ],
                "borderColor": "#555555"
              }
            ]
          },
          "status": "pending_review",
          "source": "scripts/fan-chart.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selector": {
          "value": {
            "name": "MS-315M",
            "minCFM": 692,
            "maxCFM": 1100,
            "minPa": 300,
            "data": [
              [
                0,
                700
              ],
              [
                250,
                685
              ],
              [
                500,
                655
              ],
              [
                750,
                635
              ],
              [
                1000,
                580
              ],
              [
                1250,
                520
              ],
              [
                1500,
                430
              ],
              [
                1750,
                275
              ],
              [
                1900,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "airflow": {
          "value": {
            "name": "MS-315M",
            "data": [
              [
                0,
                700
              ],
              [
                250,
                685
              ],
              [
                500,
                655
              ],
              [
                750,
                635
              ],
              [
                1000,
                580
              ],
              [
                1250,
                520
              ],
              [
                1500,
                430
              ],
              [
                1750,
                275
              ],
              [
                1900,
                0
              ]
            ]
          },
          "status": "pending_review",
          "source": "tools/airflow-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "pdf": {
          "value": {
            "airflow": 1900,
            "voltage": "220-240V-/50Hz",
            "rpm": 2450,
            "power": 260,
            "amps": 0.84,
            "noise": 65
          },
          "status": "pending_review",
          "source": "tools/esp-calculator.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "selectionRange": {
          "value": {
            "name": "MS-315M",
            "minCFM": 692,
            "maxCFM": 1100,
            "minPa": 300
          },
          "status": "do_not_publish",
          "source": "tools/fan-selector.js",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      },
      "conflicts": [],
      "legacyDisplay": {
        "products/commercial/backward-centrifugal/ms-315m.html:0:0": {
          "value": "260W",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-315m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-315m.html:0:1": {
          "value": "1900 m³/h",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-315m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-315m.html:0:2": {
          "value": "700 Pa",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-315m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-315m.html:0:3": {
          "value": "Ø315 mm",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-315m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-315m.html:0:4": {
          "value": "65 dB",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-315m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/ms-315m.html:0:5": {
          "value": "7.8 kg",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/ms-315m.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:0": {
          "value": "Single",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:1": {
          "value": "1900",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:2": {
          "value": "2450",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:3": {
          "value": "260",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        },
        "products/commercial/backward-centrifugal/index.html:0:4": {
          "value": "65",
          "status": "pending_review",
          "source": "products/commercial/backward-centrifugal/index.html",
          "revision": "f4205e13f04d98d9274868a314c8257d04dca6ef"
        }
      }
    }
  }
};
 root.ProdigyFans=data; if(typeof module!=="undefined")module.exports=data;
})(typeof window!=="undefined"?window:globalThis);

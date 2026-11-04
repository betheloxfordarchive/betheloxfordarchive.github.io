var APP_DATA = {
  "scenes": [
    {
      "id": "0-sanctuary-entrance",
      "name": "Sanctuary Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "yaw": 1.425570417576309,
        "pitch": 0.02957504797188726,
        "fov": 1.7010466534636683
      },
      "linkHotspots": [
        {
          "yaw": 1.4109314393132752,
          "pitch": 0.2525237703681764,
          "rotation": 0,
          "target": "1-sanctuary-aisle"
        },
        {
          "yaw": 1.416845716165028,
          "pitch": 0.029573906323307142,
          "rotation": 0,
          "target": "2-pulpit"
        },
        {
          "yaw": 1.7031720307048603,
          "pitch": 0.022851797081656855,
          "rotation": 0,
          "target": "3-annex-potluck-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sanctuary-aisle",
      "name": "Sanctuary Aisle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "yaw": 0.9288507890309532,
        "pitch": 0.19801160894084902,
        "fov": 1.7010466534636683
      },
      "linkHotspots": [
        {
          "yaw": 1.5567385353667902,
          "pitch": 0.07387690095153943,
          "rotation": 0,
          "target": "2-pulpit"
        },
        {
          "yaw": 2.073792307897582,
          "pitch": 0.0693091107047703,
          "rotation": 0,
          "target": "3-annex-potluck-hall"
        },
        {
          "yaw": -1.6010393944799084,
          "pitch": 0.11847430930763281,
          "rotation": 0,
          "target": "0-sanctuary-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pulpit",
      "name": "Pulpit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "yaw": 0.6695226989300131,
        "pitch": 0.09595760294621947,
        "fov": 1.7010466534636683
      },
      "linkHotspots": [
        {
          "yaw": 1.5992815103680762,
          "pitch": 0.4179067892956674,
          "rotation": 0,
          "target": "1-sanctuary-aisle"
        },
        {
          "yaw": 1.600274076284272,
          "pitch": 0.1260899466541936,
          "rotation": 0,
          "target": "0-sanctuary-entrance"
        },
        {
          "yaw": -0.34856768270087457,
          "pitch": 0.26487038760937587,
          "rotation": 0,
          "target": "3-annex-potluck-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-annex-potluck-hall",
      "name": "Annex Potluck Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "yaw": 0.8037202264018077,
        "pitch": -0.381541772993538,
        "fov": 1.7010466534636683
      },
      "linkHotspots": [
        {
          "yaw": 0.8432555757344264,
          "pitch": 0.05615619199198285,
          "rotation": 0,
          "target": "2-pulpit"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Bethel AME Church Virtual Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

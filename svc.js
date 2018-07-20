// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App setup
var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res) {
  res.send('GLO Web Services - contact Tracey Birch @ SOFWERX for information\n');
});

// Services for GLO components

app.post('/AuthService', function(req, res) {
  if (req.body.id == 'foo' && req.body.pass == 'bar') {
    // TODO: verify cookie / auth token & send new token for next tx (for ALL services)
    res.cookie("glo-svc","XYZZZ",{maxAge: 86400});
    res.json(AuthService);
  } else {
    res.json({
      "authenticated": false
    })
  }
  return;
});

app.post('/ForceMgmtService/GetUnitPAX', function(req, res) {
  var token = req.body.AuthToken;
  var unit = req.body.UIC;

  res.cookie("glo-svc","XYZZZ2",{maxAge: 86400});
  res.json(ForceMgmtService_GetUnitPAX);
});

app.post('/ForceMgmtService/GetUnitTOE', function(req, res) {
  var token = req.body.AuthToken;
  var unit = req.body.UIC;

  // look up TOE based on UIC
  res.cookie("glo-svc","XYZZZ3",{maxAge: 86400});
  res.json(ForceMgmtService_GetUnitTOE);
});

app.post('/WeatherService/GetClimate', function(req, res) {
  var token = req.body.AuthToken;
  var unit = req.body.UIC;

  // look up TOE based on UIC
  res.cookie("glo-svc","XYZZZ4",{maxAge: 86400});
  res.json(WeatherService_GetClimate);
});

app.post('/WeatherService/GetWeatherRpt', function(req, res) {
  var token = req.body.AuthToken;
  var unit = req.body.UIC;

  // look up TOE based on UIC
  res.cookie("glo-svc","XYZZZ5",{maxAge: 86400});
  res.json(WeatherService_GetWeatherRpt);
});

app.post('/PlanFactorService/GetMissionDetails', function(req, res) {
  var token = req.body.AuthToken;
  var unit = req.body.UIC;

  res.cookie("glo-svc","XYZZZ6",{maxAge: 86400});
  res.json(PlanFactorService_GetMissionDetails);
});

app.post('/ApprovalService', function(req, res) {
  var token = req.body.AuthToken;
  var unit = req.body.UIC;

  res.cookie("glo-svc","XYZZZ7",{maxAge: 86400});
  res.json(ApprovalService);
});

app.post('/SupplyService', function(req, res) {
  var token = req.body.AuthToken;
  var unit = req.body.UIC;

  res.cookie("glo-svc","XYZZZ8",{maxAge: 86400});
  res.json(SupplyService);
});

/////////////////////////////////////////////////////////////
// Static / test JSON data
// TODO: look up based on input
/////////////////////////////////////////////////////////////
var AuthService = {
  "authenticated": true,
  "AuthToken": "XYZZZ",
  "units": [
    "WH1BAA",
    "WH1BA0",
    "WH1BA1"
  ]
};

var ForceMgmtService_GetUnitPAX = {
  "requestOK": true,
  "AuthToken": "XYZZZ2",
  "UIC": "WH1BAA",
  "PAXlist": [
    {
      "qty": 80,
      "branch": "AR",
      "rank": "enlisted",
      "duty": "active",
      "gender": "M"
    },
    {
      "qty": 8,
      "branch": "AR",
      "rank": "officer",
      "duty": "active",
      "gender": "M"
    },
    {
      "qty": 2,
      "branch": "AR",
      "rank": "officer",
      "duty": "active",
      "gender": "F"
    },
    {
      "qty": 10,
      "branch": "AF",
      "rank": "officer",
      "duty": "active",
      "gender": "M"
    }
  ]
}

var ForceMgmtService_GetUnitTOE = {
  "requestOK": true,
  "AuthToken": "XYZZZ3",
  "UIC": "WH1BAA",
  "EqipList": [
    {
      "LIN-TAMCN": "R45351",
      "name": "RIFLE SNIPER .50 CALIBER: M107",
      "qty-onhand": 36,
      "category": "shoot",
    },
    {
      "LIN-TAMCN": "L69080",
      "name": "LAUNCHER GRENADE: M320A1",
      "qty-onhand": 49,
      "category": "shoot",
    },
    {
      "LIN-TAMCN": "N05482",
      "name": "NIGHT VISION: GOGGLE",
      "qty-onhand": 47,
      "category": "shoot",
    },
    {
      "LIN-TAMCN": "T41036",
      "name": "TRUCK CARGO: 5 TON 6X6 MTV W/E LAPES/AD",
      "qty-onhand": 3,
      "category": "move",
    },
    {
      "LIN-TAMCN": "T59584",
      "name": "TRUCK CARGO: W/MHE WO/WINCH",
      "qty-onhand": 4,
      "category": "move",
    },
    {
      "LIN-TAMCN": "W98825",
      "name": "TRAILER TANK: WATER 400 GALLON 1-1/2 TON 2 WHEEL W/E",
      "qty-onhand": 1,
      "category": "move",
    },
    {
      "LIN-TAMCN": "R05007",
      "name": "RADIO SET: MULTIBAND MANPACK",
      "qty-onhand": 64,
      "category": "comms",
    },
    {
      "LIN-TAMCN": "T05021",
      "name": "TACTICAL LOCAL AREA NETWRK (TACLAN):",
      "qty-onhand": 1,
      "category": "comms",
    },
    {
      "LIN-TAMCN": "70210N",
      "name": "COMPUTER, MICRO LAP TOP PORTABLE AC/DC W/BATTERY PK",
      "qty-onhand": 480,
      "category": "comms",
    },
  ]
};

var WeatherService_GetClimate = {
  "location": {
    "lat": 69.190509,
    "lon": 34.536212
  },
  "ClimateTemp": "temperate",
  "ClimateHumidity": "arid"
}

var WeatherService_GetWeatherRpt = {
  "location": {
    "lat": 69.190509,
    "lon": 34.536212
  },
  DateRange: {
    "start": "2018-08-01",
    "end": "2018-11-30"
  },
  "AvgTemp": 23.5,
  "AvgHumidity": 24,
  "Precipitation": 0
}

var PlanFactorService_GetMissionDetails = {
   "requestOK": true,
   "AuthToken": "XYZZZ3",
   "UIC": "WH1BAA",
   "SupplyClass": 1,
   "Terrain": ["sandy", "rocky"],
   "Weather": ["dry", "hot"],
   "OpTempo": "Attack",
   "UnitPax": "12"
}

var ApprovalService = {
   "requestOK": true,
   "AuthToken": "XYZZZ3",
   "UIC": "WH1BAA",
   "ApprovalRequest": [
      {
       "name": "Baldwin, Christopher M MAJ USSOCOM SOCOM J43 ",
       "email": "christopher.baldwin@socom.mil",
       "section": "TSOC",
       "category": "Approval"
      },
      {
       "name": "Caldas, Rodrigo SOFWERX Data Science/DevOps Intern",
       "email": "rodrigo.caldas.intern@sofwerx.org",
       "section": "SOFWERX Level 1",
       "category": "Notification"
      },
      {
<<<<<<< HEAD
       "name": "Birch, Tracey Sr. Software Dnmceveloper",
=======
       "name": "Birch, Tracey SOFWERX Sr. Software Developer",
>>>>>>> f14881e6a052311a1a5012f47100ce672acf5482
       "email": "tracey.birch@sofwerx.org",
       "section": "SOFWERX Level 2",
       "category": "Notification"
      }
    ]
}

var SupplyService = {
   "requestOK": true,
   "AuthToken": "XYZZZ3",
   "UIC": "WH1BAA",
   "SupplyClass": 1,
   "ItemsRequested": [
      {
        "NSN": "8970-01-543-3458",
        "name": "First-Strike-Ration(FSR)",
        "qty": "12"
      },
      {
        "NSN": "8970-00-149-1094",
        "name": "Meal-Ready-to-Eat(MRE)",
        "qty": "40"
      },
      {
        "NSN": "8970-01-432-9951",
        "name": "UGR H&S Lunch Menu 2",
        "qty": "3"
      },
      {
        "NSN": "8970-01-432-9976",
        "name": "UGR H&S Lunch Menu 5",
        "qty": "3"
      },
      {
        "NSN": "8970-01-433-0018",
        "name": "UGR H&S Lunch Menu 9",
        "qty": "3"
      }
    ]
}
/////////////////////////////////////////////////////////////

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

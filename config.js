var config = {};

// AWS IoT
config.aws = {};
config.aws.magicmirror = {
    "keyPath": __dirname+'/keys/MagicMirrorThing-private.pem.key',
    "certPath": __dirname+'/keys/MagicMirrorThing-certificate.pem.crt',
    "caPath": __dirname+'/keys/root-CA.crt',
    "host": "A2S4HK394S6UXN.iot.us-east-1.amazonaws.com",
    "port": 8883,
    "clientId": "MagicMirror-"+(new Date().getTime()),
    "region":"us-east-1",
    debug:true
};

// YQL
config.yql = {};
config.yql.api = '';
config.yql.secret = '';

// Weather
config.weather = [
    "Puyallup, WA",
    "Seattle, WA",
    "Detroit, MI"
];

// YQL Weather Condition => font character
config.weatherCondition = {
    "0":"f",
    "1":"r",
    "2":"f",
    "3":"0",
    "4":"t",
    "5":"g",
    "6":"x",
    "7":"v",
    "8":"u",
    "9":"q",
    "10":"x",
    "11":"r",
    "12":"r",
    "13":"w",
    "14":"g",
    "15":"w",
    "16":"g",
    "17":"x",
    "18":"g",
    "19":"f",
    "20":"l",
    "21":"m",
    "22":"n",
    "23":"f",
    "24":"f",
    "25":"g",
    "26":"y",
    "27":"i",
    "28":"h",
    "29":"i",
    "30":"h",
    "31":"c",
    "32":"b",
    "33":"k",
    "34":"j",
    "35":"x",
    "36":"b",
    "37":"p",
    "38":"p",
    "39":"p",
    "40":"q",
    "41":"w",
    "42":"w",
    "43":"w",
    "44":"n",
    "45":"z",
    "46":"w",
    "47":"z"
};

module.exports = config;
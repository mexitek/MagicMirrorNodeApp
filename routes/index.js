var YQL = require('yql');
var express = require('express');
var fs      = require('fs');
var router  = express.Router();
var config = require("../config");
var magicMirror = require('../magicMirror');
var moment = require("moment");


// Prep YQL Query for Weather
var yqlCities = "text=\""+config.weather.join("\" OR text=\"")+"\"";
var yqlString = 'select * from weather.forecast where woeid in (select woeid from geo.places where '+yqlCities+')';
var query = new YQL(yqlString);
/**
 * Variables later used in our markup
 */
var rowContent = [];

/**
 * Actual Magic Mirror homepage
 */
router.get('/', function(req, res, next) {
    query.exec(function(err, data) {
        for(var i=0; data && i<data.query.count; i++) {
            var channel   = data.query.results.channel[i];
            var code = channel.item.condition.code;
            channel.item.condition.character = (config.weatherCondition[code] || ")").toUpperCase();

            // HTML
            rowContent.push({left:channel});
        }
        next();
    });

}, function(req, res, next) {

    if(rowContent.length) {
        // Put current time in first row
        rowContent[0].right = "<h1>"+moment().format('MMMM Do YYYY, h:mm a')+"</h1>";
    }


    // Render our index.html
    res.render('index',{ 
        title:"Carreon Home",
        rows: rowContent
    });
    next();
}, function(){
    // clean up
    rowContent = [];
});

module.exports = router;

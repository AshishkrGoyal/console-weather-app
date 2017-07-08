/**
 * Created by Ashish Goyal on 7/7/2017.
 */
const express = require('express');
const request = require('request');
const argv = require('yargs').argv;
var app = express();
var api_key = "d9422ae85c8faa5ed76bbfd803aef127";
/*var city = argv.c||"Noida";*/
var city = process.argv[2]||"Noida";
var URI =  "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+api_key;
/*var url =  "api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}";*/
request(URI,function (error,response,body) {
    if(error)
    {
        console.log(error);
    }
    else
    {
        /*var weather = JSON.parse(body);
        console.log(weather);*/
        //JSON.stringify(console.log(body));
        /*console.log(body);*/
        var weather =  JSON.parse(body);
        console.log((weather.main.temp)-273);
        console.log(weather.name, weather.sys.country);
    }
});
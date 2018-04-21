
require("dotenv").config();

var keys = require('./keys.js');
var request = require('request');
var twitter = require('twitter');
var Spotify = require('node-spotify-api');



var fs = require("fs");

var spotify = new Spotify(keys.spotify);
var client = new twitter(keys.twitter);


var liriBot = process.argv[2];


switch (liriBot) {
    case "my-tweets":
        getTweets();
        break;

    case "spotify-this-song":
        break;

    case "movie-this":

        break;

    case "do-what-it-says":

        break;
}

function getTweets(){

    var tweetData = {sid_str:'TonyScott_GTCBC', count: 20};
    client.get('statuses/user_timeline', tweetData, function(error, tweets, response){
        if(!error){
            for(var i = 0; i<tweets.length; i++){

                console.log("@Coder444: " + tweets[i].text);
                console.log("--------------------------");

                //adds text to log.txt file
                fs.appendFile('log.txt', "@Coder444: " + tweets[i].text);
                fs.appendFile('log.txt', "--------------------------");

            }
        }else{
            console.log('Error Retrieving Data from Twitter API');
        }
    });
}

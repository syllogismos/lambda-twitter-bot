
var irc = require('irc');
var Twit = require('twit');

var config = {
  channels: ["##world-cup"],
  server: "irc.freenode.net",
  botName: "lelimsofuni"
};

var T = new Twit({
  consumer_key: "xxxxx"
  , consumer_secret: "xxxxx"
  , access_token: "xxxxx"
  , access_token_secret: "xxxxx"
});

// var bot = new irc.Client(config.server, config.botName, {
//   channels: config.channels
// });
// 
// bot.addListener("join", function(channel, who){
//   console.log(who);
//   bot.say("lambdalambda", "say meyhond");
// });
// 
// bot.addListener("error", function(message){
//   console.log(message);
// })
// 
// 
// // if nick is lambda bot tweet that message to 
// bot.addListener("pm", function(nick, text, message){
//   console.log(nick);
//   console.log(text);
//   console.log(message);
// });
// 

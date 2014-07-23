var _ = require('underscore');
var ntwitter = require('ntwitter');

var T = new ntwitter({
  consumer_key: "XXXX"
  , consumer_secret: "XXXX"
  , access_token: "XXXX"
  , access_token_secret: "XXXX"
});

var me = 'wikieditsbot';
bot();

function bot(){
  T.verifyCredentials(function (err, data){
    if (err){
      console.log("wrong api credentials");
    }
    console.log("Verified Credentials.");
  })
  .stream('user', {track: me}, function(stream){
    console.log("listening to tweets");
    stream.on('data', function(data){
      console.log(data);
    });
    stream.on('end', function(response){
      console.log("end event, listening again");
      setTimeout(1000, listen);
    });
    stream.on('destroy', function(response){
      console.log('destroy event, listening again');
      setTimeout(1000, listen);
    });
  });
}

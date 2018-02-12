var restify = require('restify');
var builder = require('botbuilder');


var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function(){
    console.log('%s listening to %s', server.name, server.url);
});

// Setup Bot
var connector = new builder.ChatConnector({
    appId: "3bbfb959-0cee-420c-9112-61954c753978",
    appPassword: "eraQGMYK36:xmvzHY851?:_"
});
var bot = new builder.UniversalBot(connector);




server.post('api/messages', connector.listen());

bot.dialog('/', function (session) {
    session.send("Hello World");
});

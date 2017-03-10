const express = require("express");
const Botly = require("botly");
const bodyParser = require('body-parser')
const app = express();
const DecisionTree = require('decision-tree');
const newPort = process.env.PORT || 8080
app.use(bodyParser.json())
const botly = new Botly({
    accessToken: 'EAAPb6ZBvji1EBAG6ZCacYeD7AYM36ZCmT3LPH4dUKqSnrsBDfactqqPzTwFtldr4fZAiaR9GpXvFzaNFXp2tNcLRN37lvJQx3ePC3ffqZA5Qop2uNcH3yRc0HgVItZB3WRhUL7QIGp00nJoWFVDUqSO8y9qaDSWLgYvZAGUF3w7rAZDZD', //page access token provided by facebook 
    verifyToken: 'taller', //needed when using express - the verification token you provided when defining the webhook in facebook 
    webHookPath: '/webhook', //defaults to "/", 
    notificationType: Botly.CONST.REGULAR //already the default (optional), 
});

var objetoConDatos = {}

var training_data = [
  {"pregunta1":"opcion1p1","pregunta2":"opcion1p2", "pregunta3":"opcion1p3", "pregunta4":"opcion1p4", "pregunta5":"opcion1p5", "pregunta6":"opcion1p6", "pregunta7":"opcion1p7","nombre":"Ana"},
  {"pregunta1":"opcion2p1","pregunta2":"opcion2p2", "pregunta3":"opcion2p3", "pregunta4":"opcion2p4", "pregunta5":"opcion2p5", "pregunta6":"opcion2p6", "pregunta7":"opcion2p7","nombre":"Fernanda"}, 
  {"pregunta1":"opcion3p1","pregunta2":"opcion3p2", "pregunta3":"opcion3p3", "pregunta4":"opcion3p4", "pregunta5":"opcion3p5", "pregunta6":"opcion3p6", "pregunta7":"opcion3p7","nombre":"Diana"},
];


var features = ["pregunta1","pregunta2"];
var class_name = "nombre";

var dt = new DecisionTree(training_data, class_name, features);

app.get('/', function(req, res) {
  res.send('Hola');
});

 
botly.on("message", (senderId, message, data) => {
	console.log(message)
	console.log(data)
	console.log("estoy dentro")
    let text = `echo: ${data.text}`;
    // text = 'echo' + data.text;
 
 //    botly.sendText({id: senderId, text: "Hi There!"}, function (err, data) {
 //    	console.log(data)
	// });


	let buttons = [];
	
	buttons.push(botly.createPostbackButton("Opcion1P1", "opcion1p1"));
	buttons.push(botly.createPostbackButton("Opcion2P1", "opcion2p1"));
	buttons.push(botly.createPostbackButton("Opcion3P1", "opcion3p1"));
	botly.sendButtons({id: senderId, text: "Primera pregunta", buttons: buttons}, function (err, data) {
	       console.log(data)

	});


});

botly.on("postback", (senderId, message, postback, ref) => {
	console.log(senderId)
	console.log("postback")
	console.log(postback)

	switch (postback) {
   
    case "opcion1p1":
    case "opcion2p1":
    case "opcion3p1":

    	objetoConDatos.pregunta1 = postback;
 		
 		let buttons = [];
	
		buttons.push(botly.createPostbackButton("Opcion1P2", "opcion1p2"));
		buttons.push(botly.createPostbackButton("Opcion1P2", "opcion2p2"));
		buttons.push(botly.createPostbackButton("Opcion3P2", "opcion3p2"));
		botly.sendButtons({id: senderId, text: "Segunda Pregunta", buttons: buttons}, function (err, data) {
		       console.log(data)

		});

        break;

        //Chacar desde aqui

        case "opcion1p2":
   	 	case "opcion2p2":
    	case "opcion3p2":

    	objetoConDatos.pregunta2 = postback;
 		
 		let buttons = [];
	
		buttons.push(botly.createPostbackButton("Opcion1P3", "opcion1p3"));
		buttons.push(botly.createPostbackButton("Opcion2P3", "opcion2p3"));
		buttons.push(botly.createPostbackButton("Opcion3P3", "opcion3p3"));
		botly.sendButtons({id: senderId, text: "Tercera Pregunta", buttons: buttons}, function (err, data) {
		       console.log(data)

		});

        break;

        //hasta aqui


        //Chacar desde aqui

        case "opcion1p3":
   	 	case "opcion2p3":
    	case "opcion3p3":

    	objetoConDatos.pregunta3 = postback;
 		
 		let buttons = [];
	
		buttons.push(botly.createPostbackButton("Opcion1P4", "opcion1p4"));
		buttons.push(botly.createPostbackButton("Opcion2P4", "opcion2p4"));
		buttons.push(botly.createPostbackButton("Opcion3P4", "opcion3p4"));
		botly.sendButtons({id: senderId, text: "Cuarta Pregunta", buttons: buttons}, function (err, data) {
		       console.log(data)

		});

        break;

        //hasta aqui

        //Chacar desde aqui

        case "opcion1p4":
   	 	case "opcion2p4":
    	case "opcion3p4":

    	objetoConDatos.pregunta4 = postback;
 		
 		let buttons = [];
	
		buttons.push(botly.createPostbackButton("Opcion1P5", "opcion1p5"));
		buttons.push(botly.createPostbackButton("Opcion2P5", "opcion2p5"));
		buttons.push(botly.createPostbackButton("Opcion3P5", "opcion3p5"));
		botly.sendButtons({id: senderId, text: "Quinta Pregunta", buttons: buttons}, function (err, data) {
		       console.log(data)

		});

        break;

        //hasta aqui


        //Chacar desde aqui

        case "opcion1p5":
   	 	case "opcion2p5":
    	case "opcion3p5":

    	objetoConDatos.pregunta5 = postback;
 		
 		let buttons = [];
	
		buttons.push(botly.createPostbackButton("Opcion1P6", "opcion1p6"));
		buttons.push(botly.createPostbackButton("Opcion2P6", "opcion2p6"));
		buttons.push(botly.createPostbackButton("Opcion3P6", "opcion3p6"));
		botly.sendButtons({id: senderId, text: "Sexta Pregunta", buttons: buttons}, function (err, data) {
		       console.log(data)

		});

        break;

        //hasta aqui
 

        //Checar desde aqui

        case "opcion1p6":
   	 	case "opcion2p6":
    	case "opcion3p6":

    	objetoConDatos.pregunta6 = postback;
 		
 		let buttons = [];
	
		buttons.push(botly.createPostbackButton("Opcion1P7", "opcion1p7"));
		buttons.push(botly.createPostbackButton("Opcion2P7", "opcion2p7"));
		buttons.push(botly.createPostbackButton("Opcion3P7", "opcion3p7"));
		botly.sendButtons({id: senderId, text: "Septima Pregunta", buttons: buttons}, function (err, data) {
		       console.log(data)

		});

        break;
    case "opcion1p7":
    case "opcion2p7":
    case "opcion3p7":


    	objetoConDatos.pregunta7 = postback;

    //hasta aqui

    	var predicted_class = dt.predict(objetoConDatos);

    	console.log(predicted_class)

	    botly.sendText({id: senderId, text: "Tu nombre es:"+predicted_class}, function (err, data) {
	    	console.log(data)
		});
	    // no se si vaya éste break!
	    break;

	
	}


});


 
app.use("/webhook", botly.router());
var server = app.listen(newPort, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Web server started at http://%s:%s', host, port);
});
var awsIot = require('aws-iot-device-sdk');
var config = require("./config");

var app = {};
var clientToken;
app.TOPIC_IMAGES = "MagicMirror:new-images";
app.TOPIC_TEXT = "MagicMirror:new-text";
app.LAST_TIMESTAMP = 0;

// Callbacks that will be invoked when a message is received
app.callbacks = [];
app.onMessage = function(callback){
    app.callbacks.push(callback);
}

// Setup our AWS IoT device and receive messages
app.setup = function() {
    app.device = awsIot.device(config.aws.magicmirror);

    /**
     * AWS IoT - Connecting MagicMirror as a device to our AWS IoT topics
     */
    console.log("Attempt to connect to AWS ");
    app.device.on("connect",function(){
        console.log("Connected to AWS ");
        app.device.subscribe(app.TOPIC_TEXT);
        app.device.subscribe(app.TOPIC_IMAGES);
        console.log("Subscribed: "+app.TOPIC_TEXT);
        console.log("Subscribed: "+app.TOPIC_IMAGES);
    });

    // Listeners
    app.device.on("message",function(topic, payload){
        var JSONpayload = JSON.parse(payload.toString());

        // Drop old messages
        if(!JSONpayload.timestamp || JSONpayload.timestamp <= app.LAST_TIMESTAMP) {
            console.log("Dropping: "+JSONpayload.displayText+" => "+JSONpayload.timestamp);
            console.log("====================================================");
            console.log("====================================================");
            return;
        } else {
            // We have a new message
            app.LAST_TIMESTAMP = JSONpayload.timestamp;
        }

        console.log("Message: "+topic+" => "+JSON.stringify(JSONpayload));
        console.log("====================================================");
        console.log("====================================================");
        // If successfull, let's let our application know
        for(i=0;i<app.callbacks.length;i++) {
            app.callbacks[i](topic,JSONpayload);
        }
    });
}

module.exports = app;
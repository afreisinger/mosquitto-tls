const mqtt = require('async-mqtt');

const MTPMQTTTopic = '/afreisinger/';

const HOST = "wss://localhost:8883"; // <-- change to your host and port 443

const optionsLocal = {
   username: 'afreisinger',
   password: '8Sww#__zLcG#y4g%'
};

(async () => {
   const client = await mqtt.connectAsync(HOST,optionsLocal).catch(error => console.log(error));

   if (client === undefined)
      process.exit();

   await client.subscribe(MTPMQTTTopic).catch(error => console.log(error));

   await client.publish(MTPMQTTTopic,"Hello HiMinds").catch(error => console.log(error));

   client.on('message', function (topic, message) {
      console.log("topic: " + topic);
      console.log(message.toString());
   })
})();
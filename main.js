import mqtt from 'mqtt'
const client = mqtt.connect('mqtt://127.0.0.1:1888')

client.on('connect', function() {
  client.subscribe('getInfo')
  client.publish('getInfo', '你好')
})

client.on('message', function(topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})

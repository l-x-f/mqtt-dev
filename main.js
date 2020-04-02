import mqtt from 'mqtt'
import msgpack from 'msgpack-lite'

const client = mqtt.connect('mqtt://127.0.0.1:1888')

client.on('connect', function() {
  client.subscribe('getInfo')
  client.publish(
    'getInfo',
    msgpack.encode({ name: '你好', list: [0, 1, 2, 3, 4, 5, 6] })
  )
})

client.on('message', function(topic, message) {
  // message is Buffer
  const msg = msgpack.decode(message) // decode from MessagePack (Buffer) to JS Object
  console.log(msg)
  client.end()
})

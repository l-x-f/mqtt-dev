const mosca = require('mosca')

const ascoltatore = {}

const settings = {
  http: {
    port: 1888,
    bundle: true,
    static: './'
  },
  backend: ascoltatore
}

const server = new mosca.Server(settings)

server.on('clientConnected', function(client) {
  console.log('客户端已连接', client.id)
})

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.payload)
})

server.on('ready', setup)

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running')
}

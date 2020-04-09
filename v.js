

//var fetch = require('isomorphic-unfetch')
function o() {
  var se = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] //["🅲", "🅳", "🅴", "🅵", "🅶", "🅷", "🅸", "🅹", "🅺", "🅻", "🅼", "🅽", "🆀", "🆁", "🆂", "🆃", "🆄", "🆅", "🆆", "🆇", "🆈", "🆉"]
  return se[Math.floor(Math.random() * (se.length - 1))] + se[Math.floor(Math.random() * (se.length - 1))] + se[Math.floor(Math.random() * (se.length - 1))];
}

exports.viB = async function(upd) {

  try{
    const event = upd.event
    const from = upd.sender || upd.user || upd || ''
    const USER_ID = from.id || from.user_id || ''   
    const name = from.name || ''
    const msg = upd.message || ''
    const type = msg.type || ''
    var text = msg.text || ''

var DATA = {
  'type': 'text',
  'text': JSON.stringify(upd,null,4),
  'receiver': USER_ID
}

DATA = JSON.stringify(DATA)

let V = await fetch('https://chatapi.viber.com/pa/send_message', {
    body: DATA,
    headers: {
      'X-Viber-Auth-Token': '4ad20ef0d5e7d0d4-c5fac2dea9f5e53-7ed5f693d9225cb4',
    },
    method: 'POST'
  }).then(r => r.json())
    .then(data => {
      return data
  })
    return V
    } catch (err) {
      let ERR=  fetch('https://api.telegram.org/bot1067208185:AAEsGHJmtYJTgJm9XTCJ-FdA-rowTO2bL3M/sendMessage?chat_id=986940575&text=' + JSON.stringify(err) )
    }
  }




exports.a = async function readRequestBody(request) {
  const { headers } = request
  const contentType = headers.get('content-type')
  if (contentType.includes('application/json')) {
    const body = await request.json()
    return JSON.stringify(body)
  } else if (contentType.includes('application/text')) {
    const body = await request.text()
    return body
  } else if (contentType.includes('text/html')) {
    const body = await request.text()
    return body
  } else if (contentType.includes('form')) {
    const formData = await request.formData()
    let body = {}
    for (let entry of formData.entries()) {
      body[entry[0]] = entry[1]
    }
    return JSON.stringify(body)
  } else {
    let myBlob = await request.blob()
    var objectURL = URL.createObjectURL(myBlob)
    return objectURL
  }
}

/*

 exports.viB = function(upd) {

//     const event = upd.event
//     const from = upd.sender || upd.user || upd || ''
//     const USER_ID = from.id || from.user_id || ''   
//     const name = from.name || ''
//     const msg = upd.message || ''
//     const type = msg.type || ''

   
//     var text = msg.text || ''

 


var DATA = {
  'type': 'text',
  'text': upd,
  'receiver': "hUdkaw5ogntVW47FB3VHZw=="
}

DATA = JSON.stringify(DATA)

let T =  fetch('https://api.telegram.org/bot1067208185:AAEsGHJmtYJTgJm9XTCJ-FdA-rowTO2bL3M/sendMessage?chat_id=986940575&text=' + DATA )


let V =  fetch('https://chatapi.viber.com/pa/send_message', {
    body: DATA,
    headers: {
      'X-Viber-Auth-Token': '4ad20ef0d5e7d0d4-c5fac2dea9f5e53-7ed5f693d9225cb4',
    },
    method: 'POST'
  }).then(r => r.json())
    .then(data => {
    
    return data
  })


    }

*/
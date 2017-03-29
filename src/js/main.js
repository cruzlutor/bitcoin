const w = new WebSocket('wss://api.bitfinex.com/ws/2')

const msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'ticker', 
  symbol: 'tBTCUSD' 
})


w.onmessage = (msg) => {
  console.log(msg.data)
}

w.onopen = () => {
   w.send(msg)
  // API keys setup here (See "Authenticated Channels")
}


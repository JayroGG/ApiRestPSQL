const { parentPort } = require('node:worker_threads')

let total = 0
const start = performance.now()

for (let i = 0; i < 5000000000; i++) {
  total += i
}

const end = performance.now()
const cost = Math.floor((end - start)) / 1000

const message = `The task has ended and it took ${cost} seconds to complete`

parentPort.postMessage({ total, message })

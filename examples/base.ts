import { ChopCb, ChopReq, ChopRes } from '../public'
import Chopstick from '../src/bootstrap/app'

const app = new Chopstick()

const middleware: ChopCb = (_, res) => {
  res.userData = {
    test: true,
  }
}

const returnJson: ChopCb = (_, res) => {
  const anotherObj = {
    chop: 'world',
  }

  return res.json({ ...anotherObj, ...res.userData })
}

app.get('/chop', [middleware, returnJson])
app.get('/chop/:id', ({ query, params }: ChopReq, res: ChopRes) => {
  console.log('chopchop')

  console.log(params)
  console.log(query)

  return res.json({
    singleFound: true,
  })
})

app.listen()
// Defaults to port 3000
//
// To run on port 8080 do:
// app.listen({ port: 8080 })

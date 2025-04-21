const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([{
    id: 1,
    name: 'John Doe',
    age: 30,
    email: 'johndoe@gmail.com',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    },
  }])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
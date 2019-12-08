const express = require("express")

const app = express()

// app.use((req, res) => {
//   if (req.get('authorization') === process.env.TOKEN) {
//     res.json({
//       ok: true
//     })
//   } else {
//     res.status(401).json({
//       ok: false
//     })
//   }
// })

app.get('/', (req, res, next)=>{
  res.json({
    status: "hola",
    message: "error"
  })
});

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`auth_svc listening on ${port}`)
})
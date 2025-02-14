const express = require('express')
const app = express()
const port = 3000
const postRouter = require('./routers/postRouter');

app.use(express.static('./public/imgs'));

app.use(express.json())

app.get('/', (req, res) => {
res.send('QUESTO è IL SERVER DEL BLOG')
})

app.use("/api/posts", postRouter)

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})


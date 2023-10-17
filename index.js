import express, {response} from "express";

const app = express()

app.get('/',(req, res) => {
    res.send("I love basketball")
})

app.listen(3000,() => {
    console.log('Listen on http://localhost:3000...')
})
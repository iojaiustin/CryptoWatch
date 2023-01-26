const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

app.get("/", (req,res) => {
    res.json("Welcome to CryptoWatch")
})

app.listen(PORT, () => console.log("Server started running on port: 8000"))



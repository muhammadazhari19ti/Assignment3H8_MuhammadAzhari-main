
const express = require('express')
const app = express()
const port = 3000

const {getData} = require("./ajax.js");

app.set('views', __dirname + '/views');
app.get('/', async (req, res) => {
    const response = await getData();
    const listCovid = response.list_data;
    res.render("index",{listCovid: listCovid});
})

app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

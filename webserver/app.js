const express = require('express')
const app = express()
var path = require('path');
const port = 3000


app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, '/portfolio/index.html'));
})

app.get('/project01', (req, res) => {
    res.sendFile(path.join(__dirname, '/project01/index.html'));
})

app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`This app listening on port ${port}`)
})
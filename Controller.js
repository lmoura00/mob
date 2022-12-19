const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
const models=require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

let pax = models.Pax;
let mot = models.Mot;
let corrida = models.Corrida;

app.post('/login', async (req, res)=>{
    let login = await pax.findOne({where: {name:'lucas'}});
        console.log(login); // true
})



let port = process.env.PORT || 3000;
app.listen(port,(req, res)=>{
    console.log("Servidor rodando")
})
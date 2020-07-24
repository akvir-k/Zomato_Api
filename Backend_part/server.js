const express = require('express')
const cors= require('cors')
const bodyParser= require('body-parser');
const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.raw());


app.use('/',router=express.Router())
require('./router/Router')(router)



app.listen(5000)
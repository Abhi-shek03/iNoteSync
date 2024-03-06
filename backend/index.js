require('dotenv').config();

const express = require("express");
const app = express();
const connectToMongo = require('./db');
app.use(express.json())

const port = process.env.PORT || 6010;
// app.get('/', (req, res)=>{
//     res.send('Hello Abhishek')
// })

app.use('/api/auth', require('./router/auth-router') )
app.use('/api/notes', require('./router/notes-router'))

connectToMongo().then(()=>{
    app.listen(port, ()=>{
        console.log(`app listning at http://localhost:${port} !!!`)
    })
});

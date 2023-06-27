require('dotenv').config();
const express = require('express');
const {dbConnection} = require('./src/db/config');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));

dbConnection();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/user', require("./src/routes/usuarios.routes"))
app.use('/api/mail', require("./src/routes/mail.routes"))


app.get("/j", (req, res) => {
  res.status(200).send({ message: "You are connected to the project" });
});

app.listen(process.env.PORT, () =>{
    console.log('App listening on PORT: '+process.env.PORT);
})

module.exports = app;

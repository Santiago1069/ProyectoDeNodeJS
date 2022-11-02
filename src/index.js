const express = require('express');
const morgan = require('morgan');
const app = express();

const server_port = 3000;
const port = server_port || 3306;


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {

    res.send('Configuracion Exitosa');

});


app.listen(3000, () => {

    console.log(`Aplicacion ejecutando se en el puerto: ${port}`);
    console.log(`Dar click en ==> http://localhost:${port}`);

});
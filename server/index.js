const express = require('express');
const bodyParser = require('body-parser');
const getUserController = require('./controllers/getUserController');
const putUserController = require('./controllers/putUserController');
const updateUserController = require('./controllers/updateUserController');
const app = express();
app.use(bodyParser.json());
const port = 4000;


app.post('/user', getUserController);
app.post('/new', putUserController);
app.put('/user', updateUserController);

app.listen(port, () => console.log('Ativo'))
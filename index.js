const express = require('express');
const BodyParser = require('body-parser');
const userRouter = require('./Routes/UserRoutes');

const app = express();

app.use(BodyParser.json());

app.use('/user', userRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const express = require('express');
const BodyParser = require('body-parser');

const userRouter = require('./src/routes/UserRoutes');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

app.use(BodyParser.json());

app.use('/user', userRouter);
app.use(errorHandler);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

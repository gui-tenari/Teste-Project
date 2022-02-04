const express = require('express');
const BodyParser = require('body-parser');

const userRouter = require('./src/routes/userRoutes');
const loginRouter = require('./src/routes/loginRoute');
const categoryRouter = require('./src/routes/categoryRouter');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

app.use(BodyParser.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoryRouter);
app.use(errorHandler);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

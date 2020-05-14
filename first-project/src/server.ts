import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ msg: 'Hello World!' });
});

app.listen(3333, () => {
  console.log('Back-end rodando na porta 333!');
});

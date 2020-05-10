const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
  const { title, owner } = request.query;
  console.log(title);
  console.log(owner);

  return response.json([
    'Projeto 1',
    'Projeto 2',
  ])
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;
  console.log(title);
  console.log(owner);

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3 - new'
  ])
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  console.log(id)

  return response.json([
    'Projeto 1',
    'Projeto 2 - change',
    'Projeto 3 - new',
  ])
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 2 - change',
    'Projeto 3 - new',
  ])
});

app.listen(3333, () => {
  console.log('✅ back-end rodando...');
});
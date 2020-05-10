const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
  ])
});

app.post('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3 - new'
  ])
});

app.put('/projects/:id', (request, response) => {
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
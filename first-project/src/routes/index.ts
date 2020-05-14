import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ msg: 'Hello World!' });
});

export default routes;

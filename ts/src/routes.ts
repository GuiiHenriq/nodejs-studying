import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'email@gmail.com',
    pass: '1234',
    skills: ['VueJS', 'React Native', 'Flutter']
  });

  return response.json({ message: 'Hello World TS!' });
}

interface SkillObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string; // '?' = define que o valor é opcional
  email: string;
  pass: string;
  skills: Array<string | SkillObject>; // o '|' define que podemos(*opcional) ter 2 tipos de valores
}

export default function createUser ({ name = '', email, pass }: CreateUserData) {
  const user = {
    name,
    email,
    pass
  }

  return user;
}
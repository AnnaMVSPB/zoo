import { Animal, AnimalId } from '../features/animals/Types/types';
import { User } from '../features/auth/Types/type';

export const loadAnimals = async (): Promise<Animal[]> => {
  const res = await fetch('http://localhost:4000/api/animals');
  return res.json();
};

export const addAnimal = async (newAnimal: Animal): Promise<Animal> => {
  const res = await fetch('http://localhost:4000/api/animals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: newAnimal.type,
      img: newAnimal.img,
      description: newAnimal.description,
      price: newAnimal.price,
    }),
  });
  return res.json();
};

export const delAnimal = async (id: AnimalId): Promise<Animal> => {
  const res = await fetch(`http://localhost:4000/api/animals/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const updateAnimal = async (animal: Animal): Promise<Animal> => {
  const res = await fetch(`http://localhost:4000/api/animals/${animal.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: animal.type,
      img: animal.img,
      description: animal.description,
      price: animal.price,
    }),
  });
  return res.json();
};

export const registr = async (newUser: User): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
     name: newUser.name,
     email: newUser.email,
     password: newUser.password,
     password2: newUser.password2
    }),
  });
  return res.json();
};

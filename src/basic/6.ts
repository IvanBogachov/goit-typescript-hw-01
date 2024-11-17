interface Address {
  city: string;
  country: string;
}
interface UserPerson {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

const mango: UserPerson = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com',
  address: {
    city: 'New York',
    country: 'USA',
  },
};

const poly: UserPerson = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com',
};

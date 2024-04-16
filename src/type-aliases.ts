export {};

type Mojiretu = string;

const fooString: Mojiretu = 'wood';

type Profile = {
  name: string;
  age: number;
};

const example1: Profile = {
  name: 'wood',
  age: 123,
};

type profile1 = typeof example1;

const example2: profile1 = {
  name: 'fire',
  age: 35,
};

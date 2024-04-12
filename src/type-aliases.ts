export {};

// type Profile = {
//   name: string;
//   age: number;
// };

const example1 = {
  name: 'wood',
  age: 30,
};

type profile1 = typeof example1;

const example2: profile1 = {
  name: 'fire',
  age: 35,
};

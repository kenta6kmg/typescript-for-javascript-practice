export {};

let profile: object = {
  name: 'wood',
};

let profile2: {
  name: string;
} = {
  name: 'fire',
};

profile2 = { name: 'water' };
console.log(profile2);

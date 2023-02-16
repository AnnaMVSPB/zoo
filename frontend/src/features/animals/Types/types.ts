export type Animal = {
  id: number;
  type: string;
  img: string;
  description: string;
  price: number;
};
export type State = {
  animals: Animal[];
};

export type AnimalId = Animal['id'];

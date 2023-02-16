import { Animal, AnimalId } from './types';

type Action =
  | {
      type: 'INIT_ANIMALS';
      payload: Animal[];
    }
  | { type: 'DEL_ANIMAL'; payload: AnimalId }
  | {type:'UPDATE_ANIMAL'; payload:Animal}
export default Action;

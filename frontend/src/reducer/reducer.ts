/* eslint-disable max-len */
import Action from '../features/animals/Types/Action';
import { State } from '../features/animals/Types/types';

export const init = { animals: [] };
// eslint-disable-next-line import/prefer-default-export
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INIT_ANIMALS':
      return {
        ...state,
        animals: action.payload,
      };
    case 'DEL_ANIMAL':
      return {
        ...state,
        animals: state.animals.filter((animal) => animal.id !== action.payload),
      };
      case 'UPDATE_ANIMAL':
        return {
          ...state,
          animals: state.animals.map((animal) => animal.id === action.payload.id ? action.payload : { ...animal })
        };
    default:
      return state;
  }
};

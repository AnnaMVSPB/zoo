import React from 'react';
import Action from '../../features/animals/Types/Action';
import { State } from '../../features/animals/Types/types';

export type Context = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

/**
 * Selectors let us factorize logic that queries the state.
 *
 * Selectors can be used in sagas or components to avoid duplicating that logic.
 *
 * Writing selectors is optional as it is not always necessary, we provide a simple example below.
 */

import {RootState} from '../';

export const settings = (state: RootState) => {
  console.log('state.settings = ', state, state.settings);
  return state.settings;
};

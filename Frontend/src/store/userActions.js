import { setEmail } from './store';

export const setUserEmail = (email) => (dispatch) => {
  dispatch(setEmail(email));
};
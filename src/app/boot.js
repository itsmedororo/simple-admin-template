import store, { sessionExpiredAction, } from '@store';
import { localStorage, } from '@utils';
import { saveToken, } from '@store/auth/authSlice';
import { api } from '@api';

const initializeApp = () => {
  api.init({ sessionExpiredAction });
}

const checkAuthorization = () => {
  const token = localStorage.getToken();
  if (token) {
    // save token to redux
    store.dispatch(saveToken(token));
    // set token to request obj
    api.setSessionToken(token);
  }
}

const boot = () =>
  new Promise(() => {
    initializeApp();
    checkAuthorization();
  });

export default boot;
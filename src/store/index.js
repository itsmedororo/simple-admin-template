import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@store/auth/authSlice';
import { sessionExpired } from '@store/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// ==================================================
// Global action, called from outside the components
// ==================================================
const sessionExpiredAction = () => {
  store.dispatch(sessionExpired());
};

// ==================================================

export { sessionExpiredAction };

export default store;
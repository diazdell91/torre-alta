import React, { useEffect, useReducer, useContext } from "react";
import { logout } from "../../apis/auth";

import { AuthContext } from "./auth.context";
import authReducer from "./auth.reducer";
import { clearStore, getUser, saveUser } from "./helpers/storeUser";

const INITIAL_STATE = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

const useAuthActions = (initialAuth = INITIAL_STATE) => {
  const [state, dispatch] = useReducer(authReducer, initialAuth);

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      //Getting session from localStorage
      const user = await getUser();
      const valid = user && user.uid;
      if (valid) {
        dispatch({ type: "RESTORE_TOKEN", payload: user });
      }
    };
    bootstrapAsync();
  }, []);

  async function login(user: any) {
    const success = await saveUser(user);

    if (success)
      dispatch({
        type: "SIGN_IN",
        payload: user,
      });
  }

  async function signOut() {
    await clearStore();
    dispatch({ type: "SIGN_OUT", payload: {} });
    await logout();
  }

  return {
    state,
    login,
    signOut,
  };
};

export const AuthProvider = ({ children }: { children: any }) => {
  const { state, login, signOut } = useAuthActions();

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        user: state.user,
        login,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

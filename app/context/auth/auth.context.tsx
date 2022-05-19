import { createContext } from "react";

interface User {
  uid: string;
  email: string;
}

export const AuthContext = createContext(
  {} as {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: User;
    signOut: () => void;
    login: (user: User) => void;
  }
);

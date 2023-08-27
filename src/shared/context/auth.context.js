import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  access_token: null,
  login: () => {},
  logout: () => {},
});

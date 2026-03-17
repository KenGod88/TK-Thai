import { createContext } from "react";

export type AuthData = {
  accessToken: string;
  role: string;
};

export type AuthContextType = {
  token: string | null;
  role: string | null;
  login: (data: AuthData) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
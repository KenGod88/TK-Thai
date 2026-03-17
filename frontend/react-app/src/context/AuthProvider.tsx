import { useState } from "react";
import type { ReactNode } from "react";
import { AuthContext, type AuthData } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const [role, setRole] = useState<string | null>(
    localStorage.getItem("role")
  );

  const login = (data: AuthData) => {
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("role", data.role);

    setToken(data.accessToken);
    setRole(data.role);
  };

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
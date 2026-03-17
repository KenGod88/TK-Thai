import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  role?: string;
};

export default function ProtectedRoute({ children, role }: Props) {
  const { token, role: userRole } = useAuth();

  if (!token) return <Navigate to="/" />;

  if (role && userRole !== role)
    return <Navigate to="/dashboard" />;

  return <>{children}</>;
}
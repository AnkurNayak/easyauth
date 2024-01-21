import { useContext } from "react";
import { AuthContext } from "./AppContext";
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { useAuth };

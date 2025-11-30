import React, { createContext, useContext, useState } from "react";

type User = {
  nome: string;
  email: string;
  perfil: string;
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    nome: "Raphaela Samille",
    email: "raphaela@email.com",
    perfil: "Usuário",
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

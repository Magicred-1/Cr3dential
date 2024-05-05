import React, { createContext, useContext, useState } from "react";
import { Web3Auth } from "@web3auth/modal";

interface AuthContextType {
  web3Auth: Web3Auth | null;
  setWeb3Auth: (web3Auth: Web3Auth | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  web3Auth: null,
  setWeb3Auth: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  const [web3Auth, setWeb3Auth] = useState<Web3Auth | null>(null);

  return (
    <AuthContext.Provider value={{ web3Auth, setWeb3Auth }}>
      {children}
    </AuthContext.Provider>
  );
};

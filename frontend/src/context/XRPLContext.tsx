"use client";

import React, { createContext, useContext, useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import { IProvider } from "@web3auth/base";

interface AuthContextType {
  web3Auth: Web3Auth | null;
  setWeb3Auth: (web3Auth: Web3Auth | null) => void;
  provider?: IProvider | null;
  loggedIn?: boolean;
}

const AuthContext = createContext<AuthContextType>({
  web3Auth: null,
  setWeb3Auth: () => {},
  provider: null,
  loggedIn: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [web3Auth, setWeb3Auth] = useState<Web3Auth | null>(null);

  return (
    <AuthContext.Provider value={{ web3Auth, setWeb3Auth }}>
      {children}
    </AuthContext.Provider>
  );
};
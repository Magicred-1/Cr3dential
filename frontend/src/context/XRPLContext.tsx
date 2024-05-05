"use client";

import React, { createContext, useContext, useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import { IProvider } from "@web3auth/base";

interface AuthContextType {
  web3Auth: Web3Auth | null;
  setWeb3Auth: (web3Auth: Web3Auth | null) => void;
  provider: IProvider | null;
  setProvider: (provider: IProvider | null) => void;
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>({
  web3Auth: null,
  setWeb3Auth: () => {},
  provider: null,
  loggedIn: false,
  setProvider: () => {},
  setLoggedIn: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [web3Auth, setWeb3Auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <AuthContext.Provider value={{ 
      web3Auth, 
      setWeb3Auth,
      provider,
      setProvider,
      loggedIn,
      setLoggedIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
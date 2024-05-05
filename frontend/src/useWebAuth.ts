import { useEffect, useState, useContext } from "react";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider, UX_MODE, WEB3AUTH_NETWORK } from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { XrplPrivateKeyProvider } from "@web3auth/xrpl-provider";
import RPC from "./RPC";
import { AuthContext, useAuth } from "./context/XRPLContext";
import { uploadToIPFS } from "./xrpl-transact/pinata";

export const useWebAuth = () => {
    const web3AuthContext = useContext(AuthContext);

    const web3auth = web3AuthContext.web3Auth;
    const provider = web3AuthContext.provider;

    const login = async () => {
        if (!web3auth) {
          uiConsole("web3auth not initialized yet");
          return;
        }
        const web3authProvider = await web3auth.connect();
        web3AuthContext.setProvider(web3authProvider!);
        web3AuthContext.setLoggedIn(true);
      };
    
      const authenticateUser = async () => {
        if (!web3auth) {
          uiConsole("web3auth not initialized yet");
          return;
        }
        const idToken = await web3auth.authenticateUser();
        uiConsole(idToken);
      };
    
      const getPublicKey = async () => {
        console.log("getPublicKey");
    
        if (!provider) {
          uiConsole("web3auth not initialized yet");
          return;
        }
        const publicKey = await provider.request<never, string>({
          method: "xrpl_getPublicKey",
        });
    
        // const res = await uploadToIPFS("azfiazfzaifnaziufn")
        // console.log("🚀 ~ getPublicKey ~ res:", res)
    
        console.log("🚀 ~ getPublicKey ~ publicKey:", publicKey)
    
        uiConsole(publicKey);
      }
    
      const getUserInfo = async () => {
        if (!web3auth) {
          uiConsole("web3auth not initialized yet");
          return;
        }
        const user = await web3auth.getUserInfo();
        uiConsole(user);
      };
    
      const logout = async () => {
        if (!web3auth) {
          uiConsole("web3auth not initialized yet");
          return;
        }
        await web3auth.logout();
        web3AuthContext.setProvider(null);
        web3AuthContext.setLoggedIn(false);
      };
    
      const getAccounts = async () => {
        if (!provider) {
          uiConsole("provider not initialized yet");
          return;
        }
        const rpc = new RPC(provider);
        const userAccount = await rpc.getAccounts();
        uiConsole("Accpuint info: ", userAccount);
      };
    
      const getBalance = async () => {
        if (!provider) {
          uiConsole("provider not initialized yet");
          return;
        }
        const rpc = new RPC(provider);
        const balance = await rpc.getBalance();
        console.log("🚀 ~ getBalance ~ balance:", balance)
        uiConsole("Balance", balance);
      };
    
      const sendTransaction = async () => {
        if (!provider) {
          uiConsole("provider not initialized yet");
          return;
        }
        const rpc = new RPC(provider);
        const result = await rpc.signAndSendTransaction();
        uiConsole(result);
      };
    
      const signMessage = async () => {
        if (!provider) {
          uiConsole("provider not initialized yet");
          return;
        }
        const rpc = new RPC(provider);
        const result = await rpc.signMessage();
        uiConsole(result);
      };
    
      const setDID = async () => {
        if (!provider) {
          uiConsole("provider not initialized yet");
          return;
        }
    
        const testIPFS = await uploadToIPFS("afzafazfazfssssssssssssssaaaaaaaaa")
    
        const rpc = new RPC(provider);
        const result = await rpc.signAndSetDid(testIPFS);
        uiConsole(result);
      }
    
      function uiConsole(...args: any[]): void {
        const text = JSON.stringify(args || {}, null, 2);
        console.log("🚀 ~ uiConsole ~ text:", text)
        const el = document.querySelector("#console>p");
        if (el) {
          el.innerHTML = JSON.stringify(args || {}, null, 2);
        }
      }

    return {
        login,
        authenticateUser,
        getPublicKey,
        getUserInfo,
        logout,
        getAccounts,
        getBalance,
        sendTransaction,
        signMessage,
        setDID
    }
}
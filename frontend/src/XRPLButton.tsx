import { useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider, UX_MODE, WEB3AUTH_NETWORK } from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { XrplPrivateKeyProvider } from "@web3auth/xrpl-provider";
import RPC from "./RPC";

import { useRouter } from "next/navigation";
import { uploadToIPFS } from "./xrpl-transact/pinata";
import { useAuth } from "./context/XRPLContext";

const clientId = "BB-L9kbN4pFagxGuwtq12Qzh-4cqOPjdueOPwFw14z7PlxkwfBbZ3GnW5wnfiTilbN_JoskT7Yvo2BstonpkmaQ";

const XRPLButton = () => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const webAuthContext = useAuth();


  const router = useRouter();

  const chainConfig = {
    chainNamespace: CHAIN_NAMESPACES.XRPL,
    chainId: "0x2",
    // Avoid using public rpcTarget & wsTarget in production.
    // Use services like Infura, Quicknode etc
    rpcTarget: "https://ripple-node.tor.us",
    wsTarget: "wss://s.devnet.rippletest.net:51233/",
    ticker: "XRP",
    tickerName: "XRPL",
    displayName: "xrpl devnet",
    blockExplorer: "https://devnet.xrpl.org",
  };

  useEffect(() => {
    const init = async () => {
      try {
        const xrplProvider = new XrplPrivateKeyProvider({
          config: {
            chainConfig: chainConfig
          },
        });

        console.log(xrplProvider.config);

        const web3auth = new Web3Auth({
          clientId,
          // uiConfig refers to the whitelabeling options, which is available only on Growth Plan and above
          // Please remove this parameter if you're on the Base Plan
          uiConfig: {
            appName: "Cr3dential",
            // appLogo: "https://web3auth.io/images/web3authlog.png", // Your App Logo Here
            theme: {
              primary: "red",
            },
            mode: "dark",
            logoLight: "https://web3auth.io/images/web3authlog.png",
            logoDark: "https://web3auth.io/images/web3authlogodark.png",
            defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl
            loginGridCol: 3,
            primaryButton: "externalLogin", // "externalLogin" | "socialLogin" | "emailLogin"
            uxMode: UX_MODE.REDIRECT,
          },
          web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
          privateKeyProvider: xrplProvider,
        });

        const openloginAdapter = new OpenloginAdapter({
          loginSettings: {
            mfaLevel: "optional",
          },
          adapterSettings: {
            uxMode: "redirect", // "redirect" | "popup"
            whiteLabel: {
              logoLight: "https://web3auth.io/images/web3authlog.png",
              logoDark: "https://web3auth.io/images/web3authlogodark.png",
              defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl
              // dark: false, // whether to enable dark mode. defaultValue: false
            },
            mfaSettings: {
              deviceShareFactor: {
                enable: true,
                priority: 1,
                mandatory: true,
              },
              backUpShareFactor: {
                enable: true,
                priority: 2,
                mandatory: false,
              },
              socialBackupFactor: {
                enable: true,
                priority: 3,
                mandatory: false,
              },
              passwordFactor: {
                enable: true,
                priority: 4,
                mandatory: false,
              },
            },
          },
        });
        web3auth.configureAdapter(openloginAdapter);

        setWeb3auth(web3auth);

        await web3auth.initModal();

        if (web3auth.connected) {
          setProvider(web3auth.provider!);
          setLoggedIn(true);
          webAuthContext.setWeb3Auth(web3auth);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const login = async () => {
    if (!web3auth) {
      uiConsole("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider!);
    setLoggedIn(true);
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
    setProvider(null);
    setLoggedIn(false);
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

  const loggedInView = (
    <>
      {/* Redirect to Profile Page after login */}
      <button onClick={() => router.push("/profile")} className="button button-primary">
        Profile
      </button>
      <button onClick={getPublicKey} className="button button-primary">
        Get Public Key
      </button>
      <button onClick={() => setDID()} >
        setDid
      </button>

      <button onClick={getBalance}>
        get balance
      </button>

      <button onClick={getAccounts}>
        get accounts
      </button>

      <button onClick={getUserInfo} >
        getUserInfo
      </button>

      <button onClick={signMessage} >
        sign message
      </button>

      <button onClick={sendTransaction} >
        send transaction
      </button>
    </>
  );

  const unloggedInView = (
    <button onClick={login} className="button button-primary">
      Login
    </button>
  );

  return (
    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {loggedIn ? loggedInView : unloggedInView}
    </div>
  );
}

export default XRPLButton;
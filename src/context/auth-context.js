// ** React Imports
import { createContext, useEffect, useState } from "react";

// ** Next Import
import { useRouter } from "next/router";

// ** Axios
import axios from "axios";

// ** Config
import authConfig from "src/configs/auth";
import toast from "react-hot-toast";

// ** API Imports
import { userLogin, verifyToken } from "src/services/login";

// ** Defaults
const defaultProvider = {
  user: null,

  loading: true,
  setUser: () => null,

  setLoading: () => Boolean,
  isInitialized: false,
  login: () => {
    return Promise.resolve();
  },
  logout: () => Promise.resolve(),
  setIsInitialized: () => Boolean,
};
const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user);

  const [loading, setLoading] = useState(defaultProvider.loading);
  const [isInitialized, setIsInitialized] = useState(
    defaultProvider.isInitialized
  );

  // ** Hooks
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = localStorage.getItem(authConfig.storageTokenKeyName);
        if (token) {
          setLoading(true);
          verifyToken()
            .then(async (res) => {
              let responseData = res.data;
              setLoading(false);

              setUser({ ...responseData.data, role: "super-admin" });
            })
            .catch((err) => {
              console.log("page-refresh error ==>", err);
              setLoading(false);
              handleLogout();
            });
        } else {
          removeLocalStorageData();
          setUser(null);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    };
    initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeLocalStorageData = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem(authConfig.storageTokenKeyName);
    localStorage.removeItem(authConfig.storageUId);
    localStorage.removeItem(authConfig.storageRoleName);
  };

  const handleLogin = (params, errorCallback) => {
    return userLogin(params)
      .then(async (res) => {
        let responseData = res.data;

        // ** store user info and permissions in context

        setUser({ ...responseData.data, role: "super-admin" });

        // ** redirection based on previous path
        const returnUrl = router.query.returnUrl;
        const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/";
        router.replace(redirectURL);

        return res;
      })
      .catch((err) => {
        if (errorCallback)
          errorCallback(
            err?.response?.data?.message ? err?.response?.data : err
          );
      });
  };

  const handleLogout = () => {
    setUser(null);
    setLoading(false);
    setIsInitialized(false);
    window.localStorage.removeItem("userData");
    window.localStorage.removeItem(authConfig.storageTokenKeyName);
    window.localStorage.removeItem(authConfig.storageUId);
    window.localStorage.removeItem(authConfig.storageRoleName);
    router.push("/login");
  };

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    isInitialized,
    setIsInitialized,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

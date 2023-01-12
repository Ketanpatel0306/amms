import { defaults } from "./defaults";
import authConfig from "src/configs/auth";

export const login = {
  login: {
    ...defaults.methods.POST,
    uri: "/api/login",
  },

  verifyToken: {
    ...defaults.methods.GET,
    uri: "/api/verify-token",
  },

  refreshToken: {
    ...defaults.methods.POST,
    uri: "/api/get-refresh-token",
  },

  verifyRefreshToken: {
    ...defaults.methods.POST,
    uri: "/api/verify-refresh-token",
  },
};

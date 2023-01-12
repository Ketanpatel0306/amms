import { login } from "../utils/endpoints/login";
import { callApi } from "../utils/api-utils";
import authConfig from "src/configs/auth";
import Axios from "axios";
import { Config } from "../../config";

export const userLogin = (body) => {
  return callApi({ uriEndPoint: login.login, body })
    .then((res) => {
      localStorage.setItem(authConfig.storageTokenKeyName, res.data.token);
      localStorage.setItem(authConfig.storageUId, res.data.u_id);
      localStorage.setItem(authConfig.storageRoleName, res.data.role_name);
      localStorage.setItem("userData", JSON.stringify(res.data));

      return res;
    })
    .catch((err) => {
      throw err;
    });
};

export const verifyToken = () => {
  return callApi({ uriEndPoint: login.verifyToken })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};

export const refreshToken = (body) => {
  return Axios({
    method: login.refreshToken.method,
    url: Config.API_URL + login.refreshToken.uri,
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const permissionList = () => {
  return callApi({ uriEndPoint: login.getPermissions })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};

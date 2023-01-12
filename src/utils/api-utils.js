/**
 * Utility methods to be used for invoking API methods
 */

import Axios from "axios";
import { Config } from "../../config";
import authConfig from "src/configs/auth";
import queryString from "querystring";
import { refreshToken } from "src/services/login";

// ** Moment
import moment from "moment";

const showLogs = false;

const checkTokenExpired = async () => {
  let userData = localStorage.getItem("userData");
  let loginData = JSON.parse(userData);
  var date = moment().toDate();

  if (loginData.tokenTime > date.getTime() / 1000) {
    return localStorage.getItem(authConfig.storageTokenKeyName);
  } else if (loginData.refreshTokenTime > date.getTime() / 1000) {
    const newRefreshToken = await refreshToken({
      refresh_token: loginData.refreshToken,
    });
    localStorage.setItem("userData", JSON.stringify(newRefreshToken.data));
    localStorage.setItem(
      authConfig.storageTokenKeyName,
      newRefreshToken.data.token
    );
    localStorage.setItem(authConfig.storageUId, newRefreshToken.data.u_id);
    localStorage.setItem(
      authConfig.storageRoleName,
      newRefreshToken.data.role_name
    );

    return newRefreshToken.data.token;
  } else {
    localStorage.removeItem("userData");
    localStorage.removeItem(authConfig.storageTokenKeyName);
    localStorage.removeItem(authConfig.storageUId);
    localStorage.removeItem(authConfig.storageRoleName);
    window.location.href = "/login";

    return null;
  }
};

export const getDefaultHeaders = async () => {
  if (localStorage.accessToken) {
    return {
      Authorization: "Bearer " + (await checkTokenExpired()),
      "Content-Type": "application/json",
    };
  } else {
    return { "Content-Type": "application/json" };
  }
};

export const makeUrl = ({ uri = "", pathParams, query }, host) => {
  return `${host || `${Config.API_URL}`}${uri
    .split("/")
    .map((param) =>
      param.charAt(0) === ":" ? encodeURI(pathParams[param.slice(1)]) : param
    )
    .join("/")}${query ? `?${queryString.stringify(query)}` : ""}`;
};

const callAxios = async ({
  uriEndPoint,
  pathParams,
  query,
  body,
  apiHostUrl,
}) => {
  showLogs &&
    console.log("Call AXIOS ==>", {
      method: uriEndPoint.method,
      url: makeUrl({ ...uriEndPoint, pathParams, query }, apiHostUrl),
      headers: {
        ...(await getDefaultHeaders()),
        ...uriEndPoint.headerProps,
      },
      data: body || {},
    });

  return Axios({
    method: uriEndPoint.method,
    url: makeUrl({ ...uriEndPoint, pathParams, query }, apiHostUrl),
    headers: {
      ...(await getDefaultHeaders()),
      ...uriEndPoint.headerProps,
    },
    data: body || {},
  });
};

export const callApi = (props) => {
  const {
    uriEndPoint = { uri: "", method: "", headerProps: {} },
    pathParams,
    query,
    body,
    apiHostUrl,
  } = props;

  return new Promise((resolve, reject) => {
    callAxios({
      uriEndPoint,
      pathParams,
      query,
      body,
      apiHostUrl,
    })
      .then((response) => {
        showLogs && console.log("callApi RES ==>", response.data);
        resolve(response.data);
      })
      .catch((err) => {
        showLogs && console.log("callApi ERR ==>", err);
        reject(err.response.data ?? err);
      });
  });
};

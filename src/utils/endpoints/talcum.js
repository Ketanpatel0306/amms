import { defaults } from "./defaults";

export const Talcum = {
  talcumList: {
    ...defaults.methods.GET,
    uri: "/api/talcum",
  },

  viewTalcumById: {
    ...defaults.methods.GET,
    uri: "/api/talcum/:talcumID",
  },
};

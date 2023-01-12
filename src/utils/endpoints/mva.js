import { defaults } from "./defaults";

export const MVA = {
  mvaList: {
    ...defaults.methods.GET,
    uri: "/api/mva",
  },

  viewMVAById: {
    ...defaults.methods.GET,
    uri: "/api/mva/:mvaID",
  },
};

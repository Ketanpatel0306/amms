import { defaults } from "./defaults";

export const Zantac = {
  zantacList: {
    ...defaults.methods.GET,
    uri: "/api/zantac",
  },

  viewZantacById: {
    ...defaults.methods.GET,
    uri: "/api/zantac/:zantacID",
  },
};

import { defaults } from "./defaults";

export const Paraquat = {
  paraquatList: {
    ...defaults.methods.GET,
    uri: "/api/paraquat",
  },

  viewParaquatById: {
    ...defaults.methods.GET,
    uri: "/api/paraquat/:paraquatID",
  },
};

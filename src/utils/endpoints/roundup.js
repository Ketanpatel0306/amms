import { defaults } from "./defaults";

export const Roundup = {
  roundupList: {
    ...defaults.methods.GET,
    uri: "/api/round-up",
  },

  viewRoundupById: {
    ...defaults.methods.GET,
    uri: "/api/round-up/:roundupID",
  },
};

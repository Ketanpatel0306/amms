import { defaults } from "./defaults";

export const NEC = {
  necList: {
    ...defaults.methods.GET,
    uri: "/api/nec",
  },

  viewNECById: {
    ...defaults.methods.GET,
    uri: "/api/nec/:necID",
  },
};

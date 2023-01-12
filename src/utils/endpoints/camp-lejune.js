import { defaults } from "./defaults";

export const CampLejune = {
  campLejuneList: {
    ...defaults.methods.GET,
    uri: "/api/camp-lejune",
  },

  viewCampLejuneById: {
    ...defaults.methods.GET,
    uri: "/api/camp-lejune/:campLejuneID",
  },
};

import { defaults } from "./defaults";

export const Herniamesh = {
  herniameshList: {
    ...defaults.methods.GET,
    uri: "/api/herniamesh",
  },

  viewHerniameshById: {
    ...defaults.methods.GET,
    uri: "/api/herniamesh/:herniameshID",
  },
};

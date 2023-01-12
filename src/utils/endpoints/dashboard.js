import { defaults } from "./defaults";

export const dashboard = {
  dashboardList: {
    ...defaults.methods.GET,
    uri: "/api/dashboard",
  },
};

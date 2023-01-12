// ** Toolkit imports
import { configureStore } from "@reduxjs/toolkit";

// ** Reducers

import admin from "src/store/super-admin-profile";

import staticPage from "src/store/static-page";

// lawsuit
import zantac from "./zantac";
import herniamesh from "./herniamesh";
import roundup from "./roundup";
import talcum from "./talcum";
import campLejune from "./camp-lejune";
import paraquat from "./paraquat";
import mva from "./mva";
import nec from "./nec";
import dashboard from "./dashboard";

export const store = configureStore({
  reducer: {
    admin,

    staticPage,
    dashboard,
    zantac,
    herniamesh,
    roundup,
    talcum,
    campLejune,
    paraquat,
    mva,
    nec,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// ** Next Imports
import Head from "next/head";
import { Router } from "next/router";

// ** Loader Import
import NProgress from "nprogress";
import { store } from "src/store";
import { Provider } from "react-redux";

// ** Emotion Imports
import { CacheProvider } from "@emotion/react";
import { I18nextProvider } from "react-i18next";

// ** Config Imports
import i18n from "src/configs/i18n";
import { defaultACLObj } from "src/configs/acl";
import themeConfig from "src/configs/theme-config";

// ** Fake-DB Import
import "src/@fake-db";

// ** Third Party Import
import { Toaster } from "react-hot-toast";

// ** Component Imports
import UserLayout from "src/layouts/user-layout";
import AclGuard from "src/@core/components/auth/acl-guard";
import ThemeComponent from "src/@core/theme/theme-component";
import AuthGuard from "src/@core/components/auth/auth-guard";
import GuestGuard from "src/@core/components/auth/guest-guard";
import WindowWrapper from "src/@core/components/window-wrapper";

// ** Spinner Import
import Spinner from "src/@core/components/spinner";

// ** Contexts
import { AuthProvider } from "src/context/auth-context";
import {
  SettingsConsumer,
  SettingsProvider,
} from "src/@core/context/settings-context";

// ** Styled Components
import ReactHotToast from "src/@core/styles/libs/react-hot-toast";

// ** Utils Imports
import { createEmotionCache } from "src/@core/utils/create-emotion-cache";

// ** Prismjs Styles
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

// ** React Perfect Scrollbar Style
import "react-perfect-scrollbar/dist/css/styles.css";

// ** Global css styles
import "../../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
}

const Guard = ({ children, authGuard, guestGuard }) => {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>;
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>;
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>;
  }
};

// ** Configure JSS & ClassName
const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Variables
  const getLayout =
    Component.getLayout ?? ((page) => <UserLayout>{page}</UserLayout>);
  const setConfig = Component.setConfig ?? undefined;
  const authGuard = Component.authGuard ?? true;
  const guestGuard = Component.guestGuard ?? false;
  const aclAbilities = Component.acl ?? defaultACLObj;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>{`${themeConfig.templateName}`}</title>
          <meta
            name="description"
            content={`${themeConfig.templateName} – Best online electronics shopping at Lawsuit for best TVs, ACs, washing machines, refrigerators & more.`}
          />
          <meta name="keywords" content="Lawsuit Admin Template" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <AuthProvider>
          <I18nextProvider i18n={i18n}>
            <SettingsProvider
              {...(setConfig ? { pageSettings: setConfig() } : {})}
            >
              <SettingsConsumer>
                {({ settings }) => {
                  return (
                    <ThemeComponent settings={settings}>
                      <WindowWrapper>
                        <Guard authGuard={authGuard} guestGuard={guestGuard}>
                          <AclGuard
                            aclAbilities={aclAbilities}
                            guestGuard={guestGuard}
                          >
                            {getLayout(<Component {...pageProps} />)}
                          </AclGuard>
                        </Guard>
                      </WindowWrapper>
                      <ReactHotToast>
                        <Toaster
                          position={settings.toastPosition}
                          toastOptions={{ className: "react-hot-toast" }}
                        />
                      </ReactHotToast>
                    </ThemeComponent>
                  );
                }}
              </SettingsConsumer>
            </SettingsProvider>
          </I18nextProvider>
        </AuthProvider>
      </CacheProvider>
    </Provider>
  );
};

export default App;

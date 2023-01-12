export const loginIllustrationContainer = () => ({
  flex: 1,
  display: "flex",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
});

export const rightWrapper = (skin) =>
  skin === "bordered" && !hidden
    ? { borderLeft: `1px solid ${theme.palette.divider}` }
    : {};

export const rightSideContainer = () => ({
  p: 7,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "background.paper",
});

export const templateNameContainer = () => ({
  top: 30,
  left: 40,
  display: "flex",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
});

export const templateNameText = () => ({
  ml: 2,
  lineHeight: 1,
  fontWeight: 700,
  fontSize: "1.5rem !important",
});

export const welcomeTextContainer = () => ({
  mb: 6,
});

export const loginAlertContainer = (bgClasses) => ({
  py: 3,
  mb: 6,
  ...bgClasses.primaryLight,
  "& .MuiAlert-message": { p: 0 },
});

export const sampleInfoText = () => ({
  mb: 2,
  display: "block",
  color: "primary.main",
});

export const loginEmailContainer = () => ({
  mb: 4,
});

export const rememberMeAndPassRow = () => ({
  mb: 4,
  mt: 2,
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "end",
});

export const errorText = () => ({
  color: "error.main",
});

export const rememberMeText = () => ({
  "& .MuiFormControlLabel-label": { color: "text.primary" },
});

export const forgotPassText = () => ({
  color: "primary.main",
});

export const loginBtn = () => ({
  mb: 7,
  mt: 4,
});

export const BoxLink = () => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "-20px",
});

export const BoxHref = () => ({
  textDecoration: "none",
  color: "#26C6F9",
});

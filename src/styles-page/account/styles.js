export const mainBox = () => ({
  p: 5,
  pb: 3,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
});

export const box = () => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
});

export const textField = () => ({
  mr: 6,
  mb: 2,
});

export const rowOptions = () => ({
  mr: 2,
});

export const columnBox = () => ({
  display: "flex",
  alignItems: "center",
});

export const columnMainBox = () => ({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
});

export const columnRole = () => ({
  color: "text.secondary",
  textTransform: "capitalize",
});

export const columnTypography = () => ({
  color: "text.primary",
  textDecoration: "none",
});

export const addButton = () => ({
  mb: 2,
});

export const menuItem = () => ({
  p: 0,
});

export const userRoleError = () => ({
  mr: 2,
  color: "error.main",
});

export const userRoleWarning = () => ({
  mr: 2,
  color: "warning.main",
});

export const userRoleInfo = () => ({
  mr: 2,
  color: "info.main",
});

export const userRoleSuccess = () => ({
  mr: 2,
  color: "success.main",
});

export const userRolePrimary = () => ({
  mr: 2,
  color: "primary.main",
});

export const errorText = () => ({
  mr: 2,
  color: "primary.main",
});

export const boxImage = () => ({
  display: "flex",
  alignItems: "center",
});

export const resetButton = () => ({
  my: 4,
});

export const errorTypography = () => ({
  mt: 4,
});

export const formHelperTextError = () => ({
  color: "error.main",
  mt: 3,
});

export const submitButton = () => ({
  mr: 4,
});

export const errorMessage = () => ({
  color: "error.main",
  ml: 2,
});

export const imageTypography = () => ({
  mt: 4,
});

// ** Bank View CSS
export const divider = () => ({
  mt: 4,
});

export const viewBox = (theme) => ({
  mt: 2,
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "10px 0px",
  },
});

export const viewTypography = () => ({
  textTransform: "capitalize",
});

export const image = () => ({
  width: "160px",
  height: "160px",
  ml: 4,
});

export const customImage = () => ({
  mr: 3,
  width: 34,
  height: 34,
});

export const customImageRender = () => ({
  mr: 3,
  width: 34,
  height: 34,
  fontSize: "1rem",
});

export const dialogTitle = () => ({
  pt: 12,
  mx: "auto",
  textAlign: "center",
});

export const dialogTypography = () => ({
  mb: 2,
});

export const dialogContent = () => ({
  pb: 10,
  mx: "auto",
});

export const formGroup = () => ({
  mb: 1,
});

export const statusStyle = () => ({
  ml: 1,
});

export const saveStyle = () => ({
  "&>:last-child": { mr: 0 },
  mt: 4,
});

export const menuStyleItem = () => ({
  p: 0,
});

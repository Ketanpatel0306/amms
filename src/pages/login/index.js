// ** React Imports
import { useState } from "react";

// ** Next Imports
import Link from "next/link";

// ** MUI Components
import MuiLink from "@mui/material/Link";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import useMediaQuery from "@mui/material/useMediaQuery";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";

// ** Icons Imports
import EyeOutline from "mdi-material-ui/EyeOutline";
import EyeOffOutline from "mdi-material-ui/EyeOffOutline";

// ** Constant Route and Strings Imports
import { route } from "src/constants/route";
import { strings } from "src/constants/strings";

// ** Third Party Imports
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

// ** Hooks
import { useAuth } from "src/hooks/useAuth";
import { useSettings } from "src/@core/hooks/useSettings";

// ** Configs
import themeConfig from "src/configs/theme-config";

// ** Layout Import
import BlankLayout from "src/@core/layouts/blank-layout";

// ** Demo Imports
import FooterIllustrationsV2 from "src/components/footer/auth/footer-illustrationsV2";

// ** Styles and Styled Components Imports
import * as styles from "@styles-page/login/styles";
import {
  BoxWrapper,
  LoginIllustration,
  LoginIllustrationWrapper,
  RightWrapper,
  TypographyStyled,
} from "@styles-page/login/styled-components";

const schema = yup.object().shape({
  email: yup
    .string()
    .email(strings.loginEmailYupMsg)
    .required(strings.loginEmailYupReqMsg),
  password: yup
    .string()
    .required(strings.loginPasswordYupReqMsg)
    .min(4, strings.loginPasswordYupMsg),
});

// TODO: Remove this before production
const defaultValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [wait, setWait] = useState(false);

  // ** Hooks
  const auth = useAuth();
  const theme = useTheme();
  const { settings } = useSettings();
  const hidden = useMediaQuery(theme.breakpoints.down("md"));

  // ** Vars
  const { skin } = settings;

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email, password } = data;

    const response = await auth.login({ email, password }, (error) => {
      toast.error(error.message, {
        duration: 2000,
      });
    });

    if (response) {
      toast.success(response.message ?? strings.loginSuccessToastMessage);
    } else if (response === undefined) {
    } else {
      toast.loading(strings.loginLoadingToastMsg);
    }
  };

  const imageSource =
    skin === "bordered"
      ? "auth-v2-login-illustration-bordered"
      : "auth-v2-login-illustration";

  return (
    <Box className="content-right">
      {!hidden ? (
        <Box sx={styles.loginIllustrationContainer()}>
          <LoginIllustrationWrapper>
            <LoginIllustration
              alt={strings.loginIllustrationAltText}
              src={`/images/pages/misc-coming-soon.png`}
            />
          </LoginIllustrationWrapper>
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
      <RightWrapper sx={styles.rightWrapper(skin)}>
        <Box sx={styles.rightSideContainer()}>
          <BoxWrapper>
            <Box sx={styles.templateNameContainer()}>
              <Typography variant="h6" sx={styles.templateNameText()}>
                {themeConfig.templateName}
              </Typography>
            </Box>
            <Box sx={styles.welcomeTextContainer()}>
              <TypographyStyled variant="h6">{`Welcome to ${themeConfig.templateName}! 👋🏻`}</TypographyStyled>
              <Typography variant="body2">
                {strings.loginTypographyText}
              </Typography>
            </Box>

            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <FormControl fullWidth sx={styles.loginEmailContainer()}>
                <Controller
                  name={strings.loginEmailName}
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      autoFocus
                      label={strings.loginEmailLabelName}
                      value={value}
                      onBlur={onBlur}
                      onKeyUp={() => {
                        trigger(strings.loginEmailName);
                      }}
                      onChange={onChange}
                      error={Boolean(errors.email)}
                      placeholder={strings.loginEmailPlaceholder}
                    />
                  )}
                />
                {errors.email && (
                  <FormHelperText sx={styles.errorText()}>
                    {errors.email?.message}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth>
                <InputLabel
                  htmlFor="auth-login-v2-password"
                  error={Boolean(errors.password)}
                >
                  {strings.loginPasswordLabelName}
                </InputLabel>
                <Controller
                  name={strings.loginPasswordName}
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <OutlinedInput
                      value={value}
                      onBlur={onBlur}
                      label={strings.loginPasswordLabelName}
                      onChange={onChange}
                      onKeyUp={() => {
                        trigger(strings.loginPasswordName);
                      }}
                      autoComplete="off"
                      id={strings.loginPasswordName}
                      error={Boolean(errors.password)}
                      inputProps={{ maxLength: 15, minLength: 4 }}
                      type={
                        showPassword
                          ? strings.loginPasswordTextName
                          : strings.loginPasswordName
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOutline /> : <EyeOffOutline />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.password && (
                  <FormHelperText sx={styles.errorText()} id="">
                    {errors.password.message}
                  </FormHelperText>
                )}
              </FormControl>

              <Button
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                sx={styles.loginBtn()}
              >
                {strings.loginTextButton}
              </Button>
            </form>
          </BoxWrapper>
        </Box>
      </RightWrapper>
    </Box>
  );
};
LoginPage.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;
LoginPage.guestGuard = true;

export default LoginPage;

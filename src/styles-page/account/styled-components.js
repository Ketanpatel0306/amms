// ** MUI Import
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// ** Styled Components
export const Div = styled(Card)(({ theme }) => ({
  width: "100%",
  margin: "auto",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const ViewTitle = styled(Typography)(() => ({
  padding: "10px 5px",
  marginLeft: "20px",
  fontWeight: 700,
  fontSize: "1.8rem",
}));

export const DivContent = styled(CardContent)(({ theme }) => ({
  paddingTop: "0px",
  paddingBottom: "0px",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
}));

export const BoxContent = styled(Box)(() => ({
  display: "flex",

  alignItems: "baseline",
}));

export const ContentActions = styled(CardActions)(({ theme }) => ({
  padding: "0px",
  paddingLeft: "5px",
  marginTop: "20px",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const CardTitle = styled(Typography)(() => ({
  padding: "5px 5px",
  marginRight: "2px",
  fontWeight: 300,
  fontSize: "0.999rem",
  color: "lightblack",
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
  },
}));

export const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginLeft: 0,
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
}));

export const ImgStyled = styled("img")(({ theme }) => ({
  width: 150,
  height: 150,
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
}));

export const MenuItemLink = styled("a")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  padding: theme.spacing(1.5, 4),
  color: theme.palette.text.primary,
}));

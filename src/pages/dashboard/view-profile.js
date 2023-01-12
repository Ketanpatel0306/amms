// ** React Imports
import { useState, useEffect } from "react";

// ** Redux Imports
import { useDispatch } from "react-redux";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

// ** API Imports
import { viewAdmin } from "src/store/super-admin-profile";
// import { viewStaff } from "src/store/staffs";

// ** Hook
import { useSettings } from "src/@core/hooks/useSettings";

// ** Context Imports
import authConfig from "src/configs/auth";

// ** Styles and Styled Component Import
import * as styles from "@styles-page/dashboard/styles";
import { StyledGrid, Img } from "@styles-page/dashboard/styled-components";

const ViewProfile = () => {
  // ** Hook
  const { settings } = useSettings();
  const dispatch = useDispatch();

  const [viewData, setViewData] = useState({});

  const dropDownData = (response) => {
    if (
      response.payload === undefined ||
      response.error ||
      response.payload.status === false
    ) {
      return null;
    } else {
      setViewData(response?.payload?.data);
    }
  };

  useEffect(() => {
    (async () => {
      const id = window.localStorage.getItem(authConfig.storageUId);
      const roleName = window.localStorage.getItem(authConfig.storageRoleName);

      if (roleName === "Super Admin") {
        await dispatch(viewAdmin(id)).then((response) => {
          dropDownData(response);
        });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card sx={styles.cardPosition()}>
      <CardContent sx={styles.cardContentPadding()}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={styles.typographyMarginBottom()}>
              Welcome{" "}
              <Box component="span" sx={styles.boxFontWeight()}>
                Lawsuit
              </Box>
              ! 🎉
            </Typography>
            <Typography sx={styles.typographyMarginBottom()} variant="body2">
              Check case count here.
            </Typography>
          </Grid>
          <StyledGrid item xs={12} sm={6}>
            <Img
              alt="Congratulations John"
              src={`/images/cards/illustration-john-${settings.mode}.png`}
            />
          </StyledGrid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ViewProfile;

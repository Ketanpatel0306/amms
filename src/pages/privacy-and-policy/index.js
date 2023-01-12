// ** React Imports
import { useState, useEffect } from "react";

// ** MUI Imports
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

// ** Context and API Imports
import themeConfig from "src/configs/theme-config";
import { viewSlugPage } from "src/store/static-page";

// ** redux
import { useDispatch } from "react-redux";

// ** Spinner
import Spinner from "src/@core/components/spinner";

// ** Styles and Styled Components Imports
import * as styles from "@styles-page/terms-privacy/styles";

// ** Layout Import
import BlankLayout from "src/@core/layouts/blank-layout";

const PrivacyPolicy = () => {
  // ** Hooks
  const [privacyData, setPrivacyData] = useState({});
  const dispatch = useDispatch();
  const [wait, setWait] = useState(true);
  const slug = "privacy-and-policy";

  useEffect(() => {
    (async () => {
      await dispatch(viewSlugPage(slug)).then((response) => {
        const responseData = response?.payload?.data ?? [];

        setPrivacyData(responseData);
        setWait(false);
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (wait) {
    return <Spinner />;
  } else {
    return (
      <Card sx={styles.Card()}>
        <div style={styles.ImgTitleDiv()}>
          <Typography>{themeConfig.templateName}</Typography>
        </div>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Card>
                <CardHeader title={privacyData.title}></CardHeader>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography sx={{ mb: 2 }}>
                    <td
                      dangerouslySetInnerHTML={{ __html: privacyData.details }}
                    />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
};

PrivacyPolicy.guestGuard = true;
PrivacyPolicy.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

export default PrivacyPolicy;

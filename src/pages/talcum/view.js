// ** React Imports
import React, { useEffect, useState } from "react";

// ** Redux Imports
import { useDispatch } from "react-redux";

// ** Next Imports
import Link from "next/link";

// ** MUI Imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

// ** Constant String Imports
import { strings } from "src/constants/strings";

// ** Constant Route Imports
import { route } from "src/constants/route";

// ** Custom Components Imports
import CustomAvatar from "src/@core/components/mui/avatar";

// ** Spinner Import
import Spinner from "src/@core/components/spinner";

// ** API Imports
import { viewTalcum } from "src/store/talcum";

// ** Styles and Styled Components Imports
import * as styles from "@styles-page/account/styles";
import {
  BoxContent,
  CardTitle,
  ContentActions,
  ViewTitle,
} from "@styles-page/account/styled-components";
import { Card } from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import InputAdornment from "@mui/material/InputAdornment";
import FormLabel from "@mui/material/FormLabel";
import IconIfyIcon from "src/components/icons/icons";
const defaultValues = {
  email: "",
  have_been_diagnosed_with_cancer: "",
  last_name: "",
  phone: "",
  zip: "",
  first_name: "",
  ip_address: "",
};

const TalcumView = ({ id }) => {
  const dispatch = useDispatch();
  const [viewData, setViewData] = useState({});
  const [wait, setWait] = useState(false);
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues });

  useEffect(() => {
    (async () => {
      setWait(true);
      await dispatch(viewTalcum(id)).then((response) => {
        if (response.payload !== 0) {
          setViewData(response.payload);
          setValue("email", response.payload.email);
          setValue("first_name", response.payload.first_name);
          setValue("last_name", response.payload.last_name);
          setValue("ip_address", response.payload.ip_address);
          setValue("phone", response.payload.phone);
          setValue("zip", response.payload.zip);
        }
        setWait(false);
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = () => {};

  if (wait) {
    return <Spinner />;
  } else {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <ViewTitle sx={{ textAlign: "center" }}>Talcum View</ViewTitle>
            <Divider />

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <Controller
                        name="first_name"
                        control={control}
                        render={({ field: { value } }) => (
                          <TextField
                            value={value}
                            label="First Name"
                            placeholder="First Name"
                            disabled
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <IconIfyIcon icon="mdi:account-outline" />
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <Controller
                        name="last_name"
                        control={control}
                        render={({ field: { value } }) => (
                          <TextField
                            value={value}
                            disabled
                            label="Last Name"
                            placeholder="Last Name"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <IconIfyIcon icon="mdi:account-outline" />
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field: { value } }) => (
                          <TextField
                            type="email"
                            disabled
                            value={value}
                            autoComplete="off"
                            label="Email"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <IconIfyIcon icon="mdi:email-outline" />
                                </InputAdornment>
                              ),
                            }}
                            placeholder="carterleonard@gmail.com"
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <Controller
                        name="ip_address"
                        control={control}
                        render={({ field: { value } }) => (
                          <TextField
                            type="text"
                            disabled
                            value={value}
                            autoComplete="off"
                            label="Ip Address"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <IconIfyIcon icon="mdi:address-outline" />
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <Controller
                        name="phone"
                        control={control}
                        render={({ field: { value } }) => (
                          <ReactInputMask
                            mask={"999 999 9999"}
                            value={value}
                            disabled={true}
                            maskChar=" "
                          >
                            {() => (
                              <TextField
                                label="Phone"
                                disabled
                                placeholder="123 456 7890"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <IconIfyIcon icon="mdi:phone-outline" />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            )}
                          </ReactInputMask>
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <Controller
                        name="zip"
                        control={control}
                        render={({ field: { value } }) => (
                          <TextField
                            type="number"
                            value={value}
                            disabled
                            autoComplete="off"
                            label="Zip Code"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <IconIfyIcon icon="mdi:zip-outline" />
                                </InputAdornment>
                              ),
                            }}
                            placeholder="121212"
                            aria-describedby="validation-basic-zip"
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl>
                      <FormLabel>
                        Have you been diagnosed with Cancer?
                      </FormLabel>
                      <Controller
                        name="have_been_diagnosed_with_cancer"
                        control={control}
                        render={({ field }) => (
                          <RadioGroup
                            row
                            {...field}
                            value={
                              viewData?.have_been_diagnosed_with_cancer === true
                                ? "yes"
                                : "no"
                            }
                            aria-label="gender"
                            name="validation-basic-have_been_diagnosed_with_cancer"
                          >
                            <FormControlLabel
                              value="yes"
                              disabled
                              label="Yes"
                              control={<Radio />}
                            />
                            <FormControlLabel
                              value="no"
                              disabled
                              label="NO"
                              control={<Radio />}
                            />
                          </RadioGroup>
                        )}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} className="button-div">
                    <Link href="/talcum">
                      <Button
                        size="large"
                        type="submit"
                        variant="contained"
                        color="error"
                      >
                        Back
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
};

export default TalcumView;

export async function getServerSideProps(context) {
  const id = context.resolvedUrl.split("=")[1];

  return {
    props: { id },
  };
}

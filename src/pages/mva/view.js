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
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

// ** Custom Components Imports
import CustomAvatar from "src/@core/components/mui/avatar";

// ** Spinner Import
import Spinner from "src/@core/components/spinner";

// ** API Imports
import { viewMVA } from "src/store/mva";

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
  is_involved_in_vehicle_accident: "",
  last_name: "",
  phone: "",
  zip: "",
  first_name: "",
  ip_address: "",
};

const MVAView = ({ id }) => {
  const dispatch = useDispatch();
  const [viewData, setViewData] = useState({});
  const [wait, setWait] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues });

  useEffect(() => {
    (async () => {
      setWait(true);
      await dispatch(viewMVA(id)).then((response) => {
        if (response.payload !== 0) {
          setViewData(response.payload);
          setValue("email", response.payload.email);
          setValue("first_name", response.payload.first_name);
          setValue("last_name", response.payload.last_name);
          setValue("phone", response.payload.phone);
          setValue("zip", response.payload.zip);
          setValue("ip_address", response.payload.ip_address);
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
            <ViewTitle>MVA View</ViewTitle>
            <Divider />

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <Controller
                        name="first_name"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            value={value}
                            disabled
                            label="First Name"
                            placeholder="First Name"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <IconIfyIcon icon="mdi:account-outline" />
                                </InputAdornment>
                              ),
                            }}
                            error={Boolean(errors.first_name)}
                            aria-describedby="validation-basic-first-name"
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
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            value={value}
                            label="Last Name"
                            disabled
                            onChange={onChange}
                            placeholder="Last Name"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <IconIfyIcon icon="mdi:account-outline" />
                                </InputAdornment>
                              ),
                            }}
                            aria-describedby="validation-basic-last-name"
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
                        render={({ field: { value, onChange } }) => (
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
                            aria-describedby="validation-basic-email"
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
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            type="text"
                            value={value}
                            disabled
                            autoComplete="off"
                            label="Ip Address"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <IconIfyIcon icon="mdi:address-outline" />
                                </InputAdornment>
                              ),
                            }}
                            placeholder="Ip Address"
                            aria-describedby="validation-basic-ip_address"
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
                        render={({ field: { value, onChange } }) => (
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
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            type="number"
                            disabled
                            value={value}
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
                        Were you or a loved one involved in a motor vehicle
                        accident?
                      </FormLabel>
                      <Controller
                        name="is_involved_in_vehicle_accident"
                        control={control}
                        render={({ field }) => (
                          <RadioGroup
                            row
                            {...field}
                            {...field}
                            value={
                              viewData?.is_involved_in_vehicle_accident === true
                                ? "yes"
                                : "no"
                            }
                            aria-label="gender"
                            name="validation-basic-is_involved_in_vehicle_accident"
                          >
                            <FormControlLabel
                              value="yes"
                              label="Yes"
                              disabled
                              control={<Radio />}
                            />
                            <FormControlLabel
                              value="no"
                              label="NO"
                              disabled
                              control={<Radio />}
                            />
                          </RadioGroup>
                        )}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} className="button-div">
                    <Link href="/mva">
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

export default MVAView;

export async function getServerSideProps(context) {
  const id = context.resolvedUrl.split("=")[1];

  return {
    props: { id },
  };
}

// ** React Imports
import React, { useEffect, useState } from "react";

// ** Redux Imports
import { useDispatch } from "react-redux";

// ** Next Imports
import Link from "next/link";

// ** MUI Imports
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

// ** Spinner Import
import Spinner from "src/@core/components/spinner";

// ** API Imports
import { viewCampLejune } from "src/store/camp-lejune";

// ** Styles and Styled Components Imports
import * as styles from "@styles-page/account/styles";
import { ViewTitle } from "@styles-page/account/styled-components";
import { Card } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import FormLabel from "@mui/material/FormLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconIfyIcon from "src/components/icons/icons";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const defaultValues = {
  email: "",
  did_live_or_work_at_camp_30_days: "",
  last_name: "",
  phone: "",
  zip: "",
  first_name: "",
  did_develop_cancer_or_other_health_issues: "",
  ip_address: "",
};

const CampLejune = ({ id }) => {
  const dispatch = useDispatch();
  const [viewData, setViewData] = useState({});
  const [wait, setWait] = useState(false);

  // ** Hooks
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues });

  useEffect(() => {
    (async () => {
      setWait(true);
      await dispatch(viewCampLejune(id)).then((response) => {
        if (response.payload !== 0) {
          setViewData(response.payload);
          setValue("email", response.payload.email);
          setValue("first_name", response.payload.first_name);
          setValue("last_name", response.payload.last_name);
          setValue("phone", response.payload.phone);
          setValue("zip", response.payload.zip);
          setValue("ip_address", response.payload.ip_address);

          setWait(false);
        }
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
            <ViewTitle sx={{ textAlign: "center" }}>Camp-Lejune View</ViewTitle>
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
                            type="text"
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
                            disabled
                            label="Last Name"
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
                            value={value}
                            disabled
                            autoComplete="off"
                            label="Email"
                            onChange={onChange}
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
                        render={({ field: { value } }) => (
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
                            placeholder="49.12.12.2"
                            aria-describedby="validation-basic-email"
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
                          <TextField
                            type="number"
                            value={value}
                            disabled
                            autoComplete="off"
                            label="Phone"
                            onChange={onChange}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <IconIfyIcon icon="mdi:phone-outline" />
                                </InputAdornment>
                              ),
                            }}
                            placeholder="+29999999999"
                            aria-describedby="validation-basic-Phone"
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <Controller
                        name="zip"
                        control={control}
                        render={({ field: { value, onChange } }) => {
                          return (
                            <TextField
                              type="number"
                              value={value}
                              disabled
                              autoComplete="off"
                              label="Zip Code"
                              onChange={onChange}
                              error={Boolean(errors.zip)}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <IconIfyIcon icon="mdi:zip-outline" />
                                  </InputAdornment>
                                ),
                              }}
                              placeholder="121210"
                              aria-describedby="validation-basic-zip"
                            />
                          );
                        }}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl>
                      <FormLabel>
                        Did you or a loved one live or work at Camp Lejeune at
                        least 30 days between 1953-1987?
                      </FormLabel>
                      <Controller
                        name="did_live_or_work_at_camp_30_days"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <RadioGroup
                            row
                            {...field}
                            value={
                              viewData?.did_live_or_work_at_camp_30_days ===
                              true
                                ? "yes"
                                : "no"
                            }
                            aria-label="gender"
                            name="validation-basic-did_live_or_work_at_camp_30_days"
                          >
                            <FormControlLabel
                              label="Yes"
                              value="yes"
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
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      error={Boolean(
                        errors.did_develop_cancer_or_other_health_issues
                      )}
                    >
                      <FormLabel>
                        Did you or a loved one develop cancer or other health
                        related issues?
                      </FormLabel>
                      <Controller
                        name="did_develop_cancer_or_other_health_issues"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <RadioGroup
                            row
                            {...field}
                            value={"no"}
                            aria-label="gender"
                            name="validation-basic-did_develop_cancer_or_other_health_issues"
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

                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Link href="/camp-lejune">
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

export default CampLejune;

export async function getServerSideProps(context) {
  const id = context.resolvedUrl.split("=")[1];

  return {
    props: { id },
  };
}

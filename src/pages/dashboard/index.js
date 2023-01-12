// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Icon Imports
import Link from "mdi-material-ui/Link";
import CartPlus from "mdi-material-ui/CartPlus";
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import Typography from "@mui/material/Typography";

// ** Custom Component Import
import CardStatisticsVertical from "src/@core/components/card-statistics/card-stats-vertical";
import PageHeader from "src/@core/components/page-header";

// ** Styled Component Import
import KeenSliderWrapper from "src/@core/styles/libs/keen-slider";
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Component Imports
import ViewProfile from "./view-profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDashboard } from "src/store/dashboard";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const storeDashboard = useSelector((state) => state.dashboard.allData);

  useEffect(() => {
    dispatch(fetchDashboard());
  }, []);
  if (storeDashboard.length !== 0)
    return (
      <ApexChartWrapper>
        <KeenSliderWrapper>
          <Grid container spacing={6} className="match-height">
            <Grid item xs={12} md={8}>
              <ViewProfile />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <CardStatisticsVertical
                color="info"
                stats={storeDashboard[0].zantacFormCount}
                icon={<Link />}
                chipText="Till Now"
                title="Total Zantac"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <CardStatisticsVertical
                color="info"
                stats={storeDashboard[0].herniameshFormCount}
                icon={<Link />}
                chipText="Till Now"
                title="Total Herniamesh"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <CardStatisticsVertical
                color="info"
                stats={storeDashboard[0].roundUpFormCount}
                icon={<Link />}
                chipText="Till Now"
                title="Total Roundup"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <CardStatisticsVertical
                color="info"
                stats={storeDashboard[0].talcumFormCount}
                icon={<Link />}
                chipText="Till Now"
                title="Total Talcum"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <CardStatisticsVertical
                color="info"
                stats={storeDashboard[0].campLeJuneFormCount}
                icon={<Link />}
                chipText="Till Now"
                title="Total Camp-Lejune"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <CardStatisticsVertical
                color="info"
                stats={storeDashboard[0].paraquatFormCount}
                icon={<Link />}
                chipText="Till Now"
                title="Total Paraquat"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <CardStatisticsVertical
                color="info"
                stats={storeDashboard[0].mvaFormCount}
                icon={<Link />}
                chipText="Till Now"
                title="Total MVA"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <CardStatisticsVertical
                color="info"
                stats={storeDashboard[0].necFormCount}
                // icon={<Link />}
                chipText="Till Now"
                title="Total NEC"
              />
            </Grid>
          </Grid>
        </KeenSliderWrapper>
      </ApexChartWrapper>
    );
};

export default Home;

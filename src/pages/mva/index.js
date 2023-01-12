// ** React Imports
import { useState, useEffect, useContext } from "react";

// ** Redux Import
import { useDispatch, useSelector } from "react-redux";

// ** Next Import
import Link from "next/link";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { GridToolbarFilterButton } from "@mui/x-data-grid";
import { GridToolbarExport } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";

// ** Icons Imports
import { EyeOutline } from "mdi-material-ui";
import DotsVertical from "mdi-material-ui/DotsVertical";
import DeleteOutline from "mdi-material-ui/DeleteOutline";
import PencilOutline from "mdi-material-ui/PencilOutline";
import Close from "mdi-material-ui/Close";
import Magnify from "mdi-material-ui/Magnify";

// ** Constant Route and Strings Imports
import { route } from "src/constants/route";
import { strings } from "src/constants/strings";

// ** Third Party Imports
import Swal from "sweetalert2";

// ** Context and API Imports
import { AbilityContext } from "src/layouts/components/acl/can";
import { fetchMVAData } from "src/store/mva";

// ** Custom Components Imports
import CustomChip from "src/@core/components/mui/chip";

// ** Styles and Styled Components Imports
import * as styles from "@styles-page/order-management/styles";
import { MenuItemLink } from "@styles-page/order-management/styled-components";

const TableHeader = (props) => {
  return (
    <Box sx={styles.mainBox()}>
      <Box>
        <GridToolbarFilterButton />
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
      </Box>
      <Box sx={styles.box()}>
        <TextField
          variant="standard"
          value={props.value}
          onChange={props.onChange}
          autoComplete="off"
          sx={styles.textField()}
          placeholder="Search"
          InputProps={{
            startAdornment: <Magnify fontSize="small" />,
            endAdornment: (
              <IconButton
                size="small"
                title="Clear"
                aria-label="Clear"
                onClick={props.clearSearch}
              >
                <Close fontSize="small" />
              </IconButton>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

const escapeRegExp = (value) => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

const RowOptions = ({ id, abilities }) => {
  // ** Hooks
  const dispatch = useDispatch();

  // ** State
  const [anchorEl, setAnchorEl] = useState(null);
  const rowOptionsOpen = Boolean(anchorEl);

  const handleRowOptionsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRowOptionsClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuItem onClick={handleRowOptionsClose} sx={styles.menuItem()}>
        <Link href={{ pathname: "/mva/view", query: { id: id } }}>
          <MenuItemLink>
            <EyeOutline fontSize="small" sx={styles.rowOptions()} />
          </MenuItemLink>
        </Link>
      </MenuItem>
    </>
  );
};

const MVA = () => {
  // ** State
  const [value, setValue] = useState("");
  const ability = useContext(AbilityContext);

  // const [pageSize, setPageSize] = useState(10)

  const [data] = useState(data);
  const [pageSize, setPageSize] = useState(7);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");

    const filteredRows = store.allData.filter((row) => {
      return Object.keys(row).some((field) => {
        // @ts-ignore
        return searchRegex.test(row[field].toString());
      });
    });
    if (searchValue.length) {
      setFilteredData(filteredRows);
    } else {
      setFilteredData([]);
    }
  };

  const NoRowsOverlay = () => {
    return (
      <Stack height="100%" alignItems="center" justifyContent="center">
        No Data Found
      </Stack>
    );
  };

  // ** Hooks
  const dispatch = useDispatch();
  const store = useSelector((state) => state.mva);

  useEffect(() => {
    dispatch(fetchMVAData());
  }, [dispatch, value]);

  const columns = [
    {
      flex: 0.1,
      minWidth: 180,
      field: "first_name",
      headerName: "Full Name",
      renderCell: ({ row }) => {
        return (
          <Box sx={styles.columnBox()}>
            <Box sx={styles.columnMainBox()}>
              <Typography
                noWrap
                component="a"
                variant="subtitle2"
                sx={styles.columnTypography()}
              >
                {row.first_name} {""}
                {row.last_name}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
    {
      flex: 0.1,
      minWidth: 180,
      field: "email",
      headerName: "Email",
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.email}
          </Typography>
        );
      },
    },
    {
      flex: 0.1,
      field: "phone",
      minWidth: 150,
      headerName: "Phone-Number",
      renderCell: ({ row }) => {
        return (
          <Box sx={styles.columnBox()}>
            <Typography noWrap sx={styles.columnRole()}>
              {row.phone}
            </Typography>
          </Box>
        );
      },
    },

    {
      flex: 0.1,
      minWidth: 120,
      headerName: "IP Address",
      field: "ip_address",
      renderCell: ({ row }) => {
        return (
          <Typography variant="subtitle1" noWrap sx={styles.viewTypography()}>
            {row.ip_address}
          </Typography>
        );
      },
    },

    {
      flex: 0.1,
      minWidth: 90,
      sortable: false,
      field: "actions",
      headerName: "Actions",
      renderCell: ({ row }) => <RowOptions id={row.u_id} abilities={ability} />,
    },
  ];

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <DataGrid
            autoHeight
            columns={columns}
            pageSize={pageSize}
            disableSelectionOnClick
            rowsPerPageOptions={[10, 25, 50]}
            components={{ Toolbar: TableHeader, NoRowsOverlay }}
            rows={
              searchText.length
                ? filteredData.length
                  ? filteredData
                  : []
                : store.allData
            }
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            componentsProps={{
              toolbar: {
                value: searchText,
                clearSearch: () => handleSearch(""),
                onChange: (event) => handleSearch(event.target.value),
              },
            }}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default MVA;

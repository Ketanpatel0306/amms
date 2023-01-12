// ** React Imports
import { useState, useEffect, useContext } from "react";

// ** Redux Imports
import { useDispatch, useSelector } from "react-redux";

// ** Next Import
import Link from "next/link";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbarFilterButton } from "@mui/x-data-grid";
import { GridToolbarExport } from "@mui/x-data-grid";

// ** Icons Imports
import EyeOutline from "mdi-material-ui/EyeOutline";
import DotsVertical from "mdi-material-ui/DotsVertical";
import PencilOutline from "mdi-material-ui/PencilOutline";
import { Close, DeleteOutline } from "mdi-material-ui";
import Magnify from "mdi-material-ui/Magnify";
import { MenuItemLink } from "@styles-page/order-management/styled-components";

// ** Context and API Imports
import { AbilityContext } from "src/layouts/components/acl/can";
import { fetchStaticPage, deleteStaticPage } from "src/store/static-page";

// ** Styles and Styled Components Imports
import * as styles from "@styles-page/static-page/styles";

// Strings Constant
import { strings } from "src/constants/strings";
import { route } from "src/constants/route";
import { Button } from "@mui/material";

// ** Third Party Imports
import Swal from "sweetalert2";

const TableHeader = (props) => {
  return (
    <Box sx={styles.mainBox()}>
      <Box>
        <GridToolbarFilterButton />
        <GridToolbarExport
          printOptions={{ disableToolbarButton: true }}
          csvOptions={{ fileName: "static-page" }}
        />
      </Box>
      <Box sx={styles.box()}>
        <TextField
          variant={strings.variant}
          value={props.value}
          onChange={props.onChange}
          sx={styles.textField()}
          placeholder={strings.employeeSearchPlaceholder}
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
        <Box>
          <Link href={route.staticPageAddRoute}>
            <Button variant="contained">{strings.staticAddBtn}</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const escapeRegExp = (value) => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

const RowOptions = ({ data, abilities }) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState(null);
  const rowOptionsOpen = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleRowOptionsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRowOptionsClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    handleRowOptionsClose();

    return Swal.fire({
      title: strings.deleteTitle,
      text: strings.deleteText,
      icon: strings.deleteIcon,
      showCancelButton: true,
      confirmButtonColor: strings.confirmButtonColor,
      cancelButtonColor: strings.cancelButtonColor,
      confirmButtonText: strings.confirmButtonText,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteStaticPage(data.u_id));
      }
    });
  };

  return (
    <>
      <IconButton size="small" onClick={handleRowOptionsClick}>
        <DotsVertical />
      </IconButton>

      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{ style: { minWidth: "8rem" } }}
      >
        <MenuItem sx={styles.menuItem()}>
          <Link
            href={{ pathname: route.staticPageView, query: { id: data.u_id } }}
          >
            <MenuItemLink>
              <EyeOutline fontSize="small" sx={styles.rowOptions()} />
              {strings.view}
            </MenuItemLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleRowOptionsClose} sx={styles.menuItem()}>
          <Link
            href={{ pathname: route.staticPageEdit, query: { id: data.u_id } }}
            passHref
          >
            <MenuItemLink>
              <PencilOutline fontSize="small" sx={styles.rowOptions()} />
              {strings.edit}
            </MenuItemLink>
          </Link>
        </MenuItem>

        <MenuItem onClick={handleDelete}>
          <DeleteOutline fontSize="small" sx={styles.rowOptions()} />
          {strings.delete}
        </MenuItem>
      </Menu>
    </>
  );
};

const StaticList = () => {
  const ability = useContext(AbilityContext);

  // ** State
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
  const store = useSelector((state) => state.staticPage ?? []);

  const columns = [
    {
      flex: 0.2,
      minWidth: 250,
      field: strings.staticFieldName,
      headerName: strings.staticHeaderName,
      renderCell: ({ row }) => {
        const { title } = row;

        return (
          <Box sx={styles.columnBox()}>
            <Typography
              noWrap
              component="a"
              variant="caption"
              sx={styles.iconButton()}
            >
              {title}
            </Typography>
          </Box>
        );
      },
    },
    {
      flex: 0.15,
      minWidth: 150,
      field: strings.staticFieldSlug,
      headerName: strings.staticHeaderNameSlug,
      renderCell: ({ row }) => {
        const { slug, u_id } = row;

        return (
          <Link
            href={{
              pathname: `/static-page/slug/${slug}`,
              query: { id: u_id },
            }}
          >
            <Typography noWrap variant="body2" sx={styles.TypographyLink()}>
              {row.slug}
            </Typography>
          </Link>
        );
      },
    },

    {
      flex: 0.1,
      minWidth: 90,
      filterable: false,
      field: strings.actionsField,
      disableExport: true,
      headerName: strings.actionsName,
      renderCell: ({ row }) => <RowOptions data={row} abilities={ability} />,
    },
  ];

  useEffect(() => {
    dispatch(fetchStaticPage());
  }, [dispatch]);

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
                : store.allData ?? []
            }
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            componentsProps={{
              toolbar: {
                value: searchText,
                clearSearch: () => handleSearch(""),
                onChange: (event) => handleSearch(event.target.value),
                abilities: ability,
              },
            }}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

StaticList.acl = {
  action: "read",
  subject: "static-page",
};

export default StaticList;

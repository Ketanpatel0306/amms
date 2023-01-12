// ** React Imports
import { useState, Fragment, useEffect, useContext } from "react";

// ** Next Import
import Link from "next/link";
import { useRouter } from "next/router";

// ** MUI Imports
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

// ** Icons Imports
import LogoutVariant from "mdi-material-ui/LogoutVariant";
import AccountOutline from "mdi-material-ui/AccountOutline";

// ** Constant  Strings Imports
import { strings } from "src/constants/strings";

// ** Constant Route Imports
import { route } from "src/constants/route";

// ** Config Imports
import { Config } from "../../../config";

// ** Context Imports
import { useAuth } from "src/hooks/useAuth";
import authConfig from "src/configs/auth";

// ** Redux and API Imports
import { viewAdmin } from "src/store/super-admin-profile";
import { useDispatch } from "react-redux";
// import { viewStaff } from "src/store/staffs";

// ** Style Imports
import * as styles from "@styles-layout/components/styles";

const UserDropdown = (props) => {
  // ** Props
  const { settings } = props;

  // ** States
  const [anchorEl, setAnchorEl] = useState(null);
  const [viewImage, setViewImage] = useState({});
  const [viewData, setViewData] = useState({});

  // ** Hooks
  const router = useRouter();
  const dispatch = useDispatch();
  const { logout } = useAuth();

  // ** Vars
  const { direction } = settings;

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = (url) => {
    if (url) {
      router.push(url);
    }
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleDropdownClose();
  };

  const dropDownData = (response) => {
    if (
      response.payload === undefined ||
      response.error ||
      response.payload.status === false
    ) {
      return null;
    } else {
      setViewData(response?.payload?.data);
      setViewImage(response?.payload?.data?.image);
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

  if (viewData !== null) {
    return (
      <Fragment>
        <Badge
          overlap="circular"
          onClick={handleDropdownOpen}
          sx={styles.badgeStyle}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Avatar
            alt="admin"
            onClick={handleDropdownOpen}
            sx={styles.avatarStyle()}
            src={"/images/avatars/1.png"}
          />
        </Badge>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleDropdownClose()}
          sx={styles.menuStyle()}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: direction === "ltr" ? "right" : "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: direction === "ltr" ? "right" : "left",
          }}
        >
          <Box sx={styles.boxPosition()}>
            <Box sx={styles.boxBadgeStyle()}>
              <Badge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <Avatar
                  alt="admin"
                  src={"/images/avatars/1.png"}
                  sx={styles.secAvatarStyle()}
                />
              </Badge>
              <Box sx={styles.box()}>
                <Typography sx={styles.typographyTextName()}>
                  super Admin
                </Typography>
                <Typography variant="body2" sx={styles.typographyAdminText()}>
                  admin@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider />
          <MenuItem sx={styles.menuItemPadding()} onClick={handleLogout}>
            <LogoutVariant sx={styles.logoutVariant()} />
            {strings.logout}
          </MenuItem>
        </Menu>
      </Fragment>
    );
  }
};

export default UserDropdown;

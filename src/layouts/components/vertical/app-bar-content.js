// ** MUI Imports
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

// ** Style Imports
import * as styles from "@styles-layout/components/styles";

// ** Icons Imports
import MenuIcon from "mdi-material-ui/Menu";

// ** Components
import Autocomplete from "src/layouts/components/auto-complete";
import LanguageDropdown from "src/@core/layouts/components/shared-components/language-dropdown";
import ModeToggler from "src/@core/layouts/components/shared-components/mode-toggler";
import UserDropdown from "src/layouts/components/user-dropdown";
import NotificationDropdown from "src/@core/layouts/components/shared-components/notification-dropdown";

const AppBarContent = (props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props;

  return (
    <Box sx={styles.verticalAppBarContentBox()}>
      <Box className="actions-left" sx={styles.actionsLeftBoxStyle()}>
        {hidden ? (
          <IconButton
            color="inherit"
            sx={styles.iconBtnStyle()}
            onClick={toggleNavVisibility}
          >
            <MenuIcon />
          </IconButton>
        ) : null}
      </Box>
      <Box className="actions-right" sx={styles.actionsRightBox()}>
        {/* <NotificationDropdown settings={settings} /> */}
        <UserDropdown settings={settings} />
      </Box>
    </Box>
  );
};

export default AppBarContent;

// ** Icon imports
import AccountOutline from "mdi-material-ui/AccountOutline";
import LockOutline from "mdi-material-ui/LockOutline";
import FileDocumentOutline from "mdi-material-ui/FileDocumentOutline";
import HomeOutline from "mdi-material-ui/HomeOutline";
import AccountTie from "mdi-material-ui/AccountTie";
import BankOutline from "mdi-material-ui/BankOutline";
import TargetAccount from "mdi-material-ui/TargetAccount";
import BullseyeArrow from "mdi-material-ui/BullseyeArrow";
import PlaylistEdit from "mdi-material-ui/PlaylistEdit";
import ClipboardList from "mdi-material-ui/ClipboardList";
import Cogs from "mdi-material-ui/Cogs";
import {
  CurrencyInr,
  ShapeOutline,
  FitToPage,
  Wrench,
  MovieEdit,
  ListStatus,
  Home,
  Account,
} from "mdi-material-ui";

// ** Constant  Strings Imports
import { strings } from "src/constants/strings";

const navigation = () => {
  return [
    {
      title: strings.dashboard,
      icon: HomeOutline,
      path: "/dashboard",
    },

    // ********** Product Management **********
    {
      sectionTitle: "Lawsuit Form Records",
    },

    {
      title: "Zantac",
      icon: FileDocumentOutline,
      path: "/zantac",
    },
    {
      title: "Hernia Mesh",
      icon: FileDocumentOutline,
      path: "/herniamesh",
    },
    {
      title: "Roundup",
      icon: FileDocumentOutline,
      path: "/roundup",
    },
    {
      title: "Talcum Powder",
      icon: FileDocumentOutline,
      path: "/talcum",
    },
    {
      title: "Camp Lejeune",
      icon: FileDocumentOutline,
      path: "/camp-lejune",
    },
    {
      title: "Paraquat",
      icon: FileDocumentOutline,
      path: "/paraquat",
    },
    {
      title: "Baby Formula",
      icon: FileDocumentOutline,
      path: "/mva",
    },
    {
      title: "Elmiron",
      icon: FileDocumentOutline,
      path: "/nec",
    },
    {
      sectionTitle: "Settings",
    },
    // ********** Static Page **********
    {
      title: strings.staticTitle,
      icon: FitToPage,
      path: "/static-page",
    },
  ];
};

export default navigation;

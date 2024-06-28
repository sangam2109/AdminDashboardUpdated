import BasicUi from "@mui/icons-material/GpsFixedSharp";
import Table from "@mui/icons-material/TableChartOutlined";
import Contacts from "@mui/icons-material/Contacts";
import ChartBar from "@mui/icons-material/BarChartOutlined";
import MedicalBag from "@mui/icons-material/MedicalServices";
import Home from "@mui/icons-material/Home";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
 export const MenuItems = [
   {
     title: "Dashboard",
     icon: <Home />,
     path: "/dashboard",
   },

   {
     title: "Basic UI Elements",
     icon: <BasicUi />,
    //  path: "/",
     arrowIcon: 1,
     subMenu: [
       { icon: 1, title: "Buttons", path: "/basic-ui/buttons" },
       { icon: 1, title: "Typography", path: "/basic-ui/typography" },
     ],
   },

   {
     title: "Icons",
     icon: <Contacts />,
     path: "/icons/mdi",
   },
   {
     title: "Form Elements",
     icon: <FormatListBulletedOutlinedIcon />,
     path: "/form-elements/basic-elements",
   },
   {
     title: "Charts",
     icon: <ChartBar />,
     path: "/charts/chart-js",
   },
   {
     title: "Tables",
     icon: <Table />,
     path: "/tables/basic-table",
   },
   {
     title: "Sample Pages",
     icon: <MedicalBag />,
    //  path: "/",
     arrowIcon: 1,
     subMenu: [
       { icon: 1, title: "Login", path: "/user-pages/login" },
       { icon: 1, title: "Register", path: "/user-pages/register" },
       { icon: 1, title: "404", path: "/error-pages/error-404" },
       { icon: 1, title: "500", path: "/error-pages/error-500" },
       { icon: 1, title: "Blank Page", path: "/general-pages/blank-page" },
     ],
   },
 ];

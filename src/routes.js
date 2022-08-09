import React from "react";

// All pages that rely on 3rd party components (other than Bootstrap) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import AuthLayout from "./layouts/Auth";
import DashboardLayout from "./layouts/Dashboard";
import DocLayout from "./layouts/Doc";
import LandingLayout from "./layouts/Landing";

// Guards
import AuthGuard from "./components/guards/AuthGuard";

// Landing
import Landing from "./pages/landing/Landing";

// Dashboards
import Default from "./pages/dashboards/Default";
import Analytics from "./pages/dashboards/Analytics";
import SaaS from "./pages/dashboards/SaaS";
import Social from "./pages/dashboards/Social";
import Crypto from "./pages/dashboards/Crypto";

// Pages
import Profile from "./pages/pages/Profile";
import Settings from "./pages/pages/Settings";
import Clients from "./pages/pages/Clients";
import Projects from "./pages/pages/Projects";
import Invoice from "./pages/pages/Invoice";
import Pricing from "./pages/pages/Pricing";
import Tasks from "./pages/pages/Tasks";
import Chat from "./pages/pages/Chat";
import Blank from "./pages/pages/Blank";

// Auth
import Page500 from "./pages/auth/Page500";
import Page404 from "./pages/auth/Page404";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ResetPassword from "./pages/auth/ResetPassword";

// UI components
import Alerts from "./pages/ui/Alerts";
import Buttons from "./pages/ui/Buttons";
import Cards from "./pages/ui/Cards";
import Carousel from "./pages/ui/Carousel";
import EmbedVideo from "./pages/ui/EmbedVideo";
import General from "./pages/ui/General";
import Grid from "./pages/ui/Grid";
import Modals from "./pages/ui/Modals";
import Offcanvas from "./pages/ui/Offcanvas";
import Tabs from "./pages/ui/Tabs";
import Typography from "./pages/ui/Typography";

// Icons
import Feather from "./pages/icons/Feather";
import FontAwesome from "./pages/icons/FontAwesome";

// Forms
import Layouts from "./pages/forms/Layouts";
import BasicInputs from "./pages/forms/BasicInputs";
import InputGroups from "./pages/forms/InputGroups";
import FloatingLabels from "./pages/forms/FloatingLabels";
import AdvancedInputs from "./pages/forms/AdvancedInputs";
import Formik from "./pages/forms/Formik";
import Editors from "./pages/forms/Editors";

// Tables
import Tables from "./pages/tables/Tables";
import Pagination from "./pages/tables/Pagination";
import ColumnSorting from "./pages/tables/ColumnSorting";
import ColumnFiltering from "./pages/tables/ColumnFiltering";
import RowExpanding from "./pages/tables/RowExpanding";
import RowSelection from "./pages/tables/RowSelection";

// Charts
import Chartjs from "./pages/charts/Chartjs";
import ApexCharts from "./pages/charts/ApexCharts";

// Notifications
import Notifications from "./pages/notifications/Notifications";

// Maps
import GoogleMaps from "./pages/maps/GoogleMaps";
import VectorMaps from "./pages/maps/VectorMaps";

// Calendar
import Calendar from "./pages/calendar/Calendar";

// Documentation
import Introduction from "./pages/docs/Introduction";
import GettingStarted from "./pages/docs/GettingStarted";
import Routing from "./pages/docs/Routing";
import Auth0 from "./pages/docs/auth/Auth0";
import Cognito from "./pages/docs/auth/Cognito";
import Firebase from "./pages/docs/auth/Firebase";
import JWT from "./pages/docs/auth/JWT";
import Guards from "./pages/docs/Guards";
import APICalls from "./pages/docs/APICalls";
import Redux from "./pages/docs/Redux";
import Internationalization from "./pages/docs/Internationalization";
import EnvironmentVariables from "./pages/docs/EnvironmentVariables";
import ESLintAndPrettier from "./pages/docs/ESLintAndPrettier";
import Deployment from "./pages/docs/Deployment";
import MigratingToNextJS from "./pages/docs/MigratingToNextJS";
import Support from "./pages/docs/Support";
import Changelog from "./pages/docs/Changelog";

// Protected routes
import ProtectedPage from "./pages/protected/ProtectedPage";

const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Default />,
      },
    ],
  },
];

export default routes;

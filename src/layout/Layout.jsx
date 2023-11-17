import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  useMediaQuery,
  List,
  Text,
  ListItem,
  ListItemIcon,
  ListItemText,
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { ReactComponent as HomeIcon } from "./../assets/icons/Home.svg";
import { ReactComponent as CardIcon } from "./../assets/icons/Card.svg";
import { ReactComponent as PaymentIcon } from "./../assets/icons/Payments.svg";
import { ReactComponent as CreditIcon } from "./../assets/icons/Credit.svg";
import { ReactComponent as AccountIcon } from "./../assets/icons/Account.svg";
import { ReactComponent as AspireLogo } from "./../assets/icons/aspire-logo.svg";

const navigationMenuItems = [
  {
    text: "Home",
    path: "/home",
    icon: <HomeIcon />,
  },
  {
    text: "Cards",
    path: "/cards",
    icon: <CardIcon />,
  },
  {
    text: "Payments",
    path: "/payments",
    icon: <PaymentIcon />,
  },
  {
    text: "Credit",
    path: "/credit",
    icon: <CreditIcon />,
  },
  {
    text: "Settings",
    path: "/settings",
    icon: <AccountIcon />,
  },
];

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const sideBarWidth = 340;

  const LeftSideBar = (
    <Box
      style={{
        width: "30%",
        maxWidth: sideBarWidth,
        position: "fixed",
        boxSizing: "border-box",
        height: "100vh",
        padding: "3rem",
        paddingTop: "4rem",
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <div>
        <AspireLogo />
      </div>
      <p style={{ fontSize: "15pt", opacity: "30%" }}>
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </p>
      <List>
        {navigationMenuItems.map((menuItem) => {
          const { text, path, icon } = menuItem;
          return (
            <ListItem
              button
              component={Link}
              to={path}
              key={path}
              style={{ marginBottom: "62px" }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
  return (
    <Box display="flex" style={{ backgroundColor: isMobile && "#0C365A" }}>
      {isMobile ? (
        <BottomNavigation
          showLabels
          style={{ position: "fixed", bottom: 0, width: "100%" , backgroundColor:'white', zIndex:100}}
        >
          {navigationMenuItems.map((menuItem) => {
            const { text, path, icon } = menuItem;
            return (
              <BottomNavigationAction
                key={path}
                label={text}
                icon={icon}
                component={Link}
                to={path}
              />
            );
          })}
        </BottomNavigation>
      ) : (
        LeftSideBar
      )}

      <Box
        component="main"
        style={{
          flexGrow: 1,
          padding: isMobile ? 0 : theme.spacing(3),
          marginLeft: isMobile ? 0 : sideBarWidth,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

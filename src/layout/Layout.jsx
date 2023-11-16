import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from "@material-ui/core";
import { ReactComponent as HomeIcon } from "./../assets/icons/Home.svg";
import { ReactComponent as CardIcon } from "./../assets/icons/Card.svg";
import { ReactComponent as PaymentIcon } from "./../assets/icons/Payments.svg";
import { ReactComponent as CreditIcon } from "./../assets/icons/Credit.svg";
import { ReactComponent as AccountIcon } from "./../assets/icons/Account.svg";

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
  const drawerWidth = 340;

  const drawer = (
    <Drawer variant="permanent" anchor="left" style={{ width: drawerWidth }}>
      <List style={{ width: drawerWidth }}>
        {navigationMenuItems.map((menuItem) => {
          const { text, path, icon } = menuItem;
          return (
            <ListItem button component={Link} to={path} key={path}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
  return (
    <Box display="flex">
      {isMobile ? (
        <BottomNavigation
          showLabels
          style={{ position: "fixed", bottom: 0, width: "100%" }}
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
        drawer
      )}

      <Box
        component="main"
        style={{
          flexGrow: 1,
          padding: theme.spacing(3),
          marginLeft: isMobile ? 0 : drawerWidth,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

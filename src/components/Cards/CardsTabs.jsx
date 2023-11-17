import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@material-ui/core";
import MyDebitCard from "./MyDebitCard";

const CardTabs=()=> {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const containerCustomStyle = isMobile
    ? {
        padding: 0,
        backgroundColor: theme.palette.primary[300],
      }
    : {
        padding: "0 2.5rem 2.5rem 2.5rem",
        border: `1px solid ${theme.palette.white[500]}`,
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
      };

  const tabColor = isMobile ? "white" : theme.palette.grey[400];
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: theme.palette.primary[100],
              },
            }}
          >
            <Tab
              label="My debit cards"
              value="1"
              sx={{
                width: "155px",
                fontWeight: value === "1" ? "bold" : "normal",
                opacity: value === "1" ? "100%" : "30%",
              }}
              style={{ color: tabColor }}
            />
            <Tab
              label="All company cards"
              value="2"
              sx={{
                width: "195px",
                fontWeight: value === "2" ? "bold" : "normal",
                opacity: value === "2" ? "100%" : "30%",
              }}
              style={{ color: tabColor }}
            />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          style={{ ...containerCustomStyle, marginTop: "1rem" }}
        >
          <MyDebitCard />{" "}
        </TabPanel>
        <TabPanel
          value="2"
          className="text_center"
          style={{
            color: isMobile ? "white" : theme.palette.primary.main,
          }}
        >All company cards</TabPanel>
      </TabContext>
    </Box>
  );
}


export default CardTabs;
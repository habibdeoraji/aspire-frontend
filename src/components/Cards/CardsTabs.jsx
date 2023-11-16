import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useTheme } from "@emotion/react";

export default function LabTabs() {
  const theme = useTheme();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const activeTabStyle = {
    fontWeight: "bold",
    color: theme.palette.grey[400],
  };

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
                fontWeight: value === "1" ? activeTabStyle : { opacity: "30%" },
              }}
            />
            <Tab
              label="All company cards"
              value="2"
              sx={{
                width: "195px",
                fontWeight: value === "2" ? activeTabStyle : { opacity: "30%" },
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">My company debit cards</TabPanel>
        <TabPanel value="2">All company cards</TabPanel>
      </TabContext>
    </Box>
  );
}

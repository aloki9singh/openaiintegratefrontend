import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CodeConverter from "./Components/CodeConverter";
import { useContext } from "react";
import { context } from './context-api/Context'
import ShayariGenerator from "./Components/ShayariGenerator";
import Navbar from "./Components/Navbar";
import Generatequote from "./Components/Generatequote";
import LoginCard from "./Components/LoginCard";
import SignupCard from "./Components/SignupCard";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);
  const {user,isLogin,isSignUp}=useContext(context);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 

  return (
    <>
    <Navbar/>
      {isLogin && !user ? <LoginCard /> : null} 
      {isSignUp && !user ? <SignupCard /> : null}
      {user ? (
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Quote Generator" {...a11yProps(0)} />
              <Tab label="Shayri Generator" {...a11yProps(1)} />
              <Tab label="Code Converter" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
           <Generatequote/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
          <ShayariGenerator/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <CodeConverter />
          </CustomTabPanel>
        </Box>
      ) : null}
    </>
  );
}

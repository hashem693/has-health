import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "../MedicalTests.scss";
import img1 from "../../assets/Dig.jpg";
import img2 from "../../assets/Dig2.jpg";
import img3 from "../../assets/Dig3.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     backgroundColor: theme.palette.background.paper,
  //     width: 500,
  //   },
}));

export default function TestsMedicalTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <section className="MedicalTests__Tabs m-auto container py-5">
      <div className="w-100">
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Diabetes Testing" {...a11yProps(0)} />
              <Tab label="Chemical Research" {...a11yProps(1)} />
              <Tab label="Pathologycam Testing" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <img src={img1} className="img-fluid w-100 pt-2" alt="" />
                </div>
                <div className="col-md-6 col-sm-12">
                  <h4 className="py-1">
                    A Full services from a Has-Health Diabetes Testing
                  </h4>
                  <div>
                    <p>
                      We have put protocols to protect our patients and staff
                      care. Service overview With experience contracting and
                      professional industry latest generation technological.
                      Excepturi vero aliquam id. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit.
                    </p>
                    <p>
                      Our design professionals are equippe Totam mollitia
                      incidunt vero cupiditate obcaecati iusto tempora unde!
                      Numquam officiis, quae adipisci quam laudantium nulla
                      modi. adipisci quam laudantium nulla modi. Totam mollitia
                      incidunt vero cupiditate obcaecati
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <img src={img2} className="img-fluid w-100 pt-2" alt="" />
                </div>
                <div className="col-md-6 col-sm-12">
                  <h4 className="py-1">
                    A Full services from a Has-Health Chemical Research
                  </h4>
                  <div>
                    <p>
                      We have put protocols to protect our patients and staff
                      care. Service overview With experience contracting and
                      professional industry latest generation technological.
                      Excepturi vero aliquam id. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit.
                    </p>
                    <p>
                      Our design professionals are equippe Totam mollitia
                      incidunt vero cupiditate obcaecati iusto tempora unde!
                      Numquam officiis, quae adipisci quam laudantium nulla
                      modi. adipisci quam laudantium nulla modi. Totam mollitia
                      incidunt vero cupiditate obcaecati
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                  <img src={img3} className="img-fluid w-100 pt-2" alt="" />
                </div>
                <div className="col-md-6 col-sm-12">
                  <h4 className="py-1">
                    A Full services from a Has-Health Pathologycam Testing
                  </h4>
                  <div>
                    <p>
                      We have put protocols to protect our patients and staff
                      care. Service overview With experience contracting and
                      professional industry latest generation technological.
                      Excepturi vero aliquam id. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit.
                    </p>
                    <p>
                      Our design professionals are equippe Totam mollitia
                      incidunt vero cupiditate obcaecati iusto tempora unde!
                      Numquam officiis, quae adipisci quam laudantium nulla
                      modi. adipisci quam laudantium nulla modi. Totam mollitia
                      incidunt vero cupiditate obcaecati
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </section>
  );
}

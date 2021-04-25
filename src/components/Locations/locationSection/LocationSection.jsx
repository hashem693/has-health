import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import LocationCard from "../LocationCard/LocationCard";

import "../LocationCard/locatincard.scss";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    card: (
      <LocationCard
        name="alexandria branch"
        address="6th floor somoha street"
        phone="0345648697"
      ></LocationCard>
    ),
  },
  {
    card: (
      <LocationCard
        style={{ height: "450px" }}
        name="cairo branch"
        address="6th nile street"
        phone="024657879"
      ></LocationCard>
    ),
  },
  {
    card: (
      <LocationCard
        name="tanta branch"
        address="1st floor kafr street"
        phone="0487985413"
      ></LocationCard>
    ),
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 400,
    // flexGrow: 1,
  },
  header: {
    // display: "flex",
    // alignItems: "center",
    // height: 50,
    // paddingLeft: theme.spacing(4),
    // backgroundColor: theme.palette.background.default,
  },
}));

function LocationSection() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <div className="locationsec py-5">
      <div className="container py-5">
        <div className="locationsec__header">
          <h2 className="text-center">Locations</h2>
        </div>

        <div className="row ">
          <div className="col-md-6 col-sm-12">
            <h3>All Our Locations</h3>
            <p>We have multi locations in different sites.</p>
            <p>On our community you will have more benifities</p>
            <ul>
            
              <li>We have the most better doctors.</li>
              <li>You can make an appointment simply.</li>
              <li>Ypu can choose the better and near branch.</li>
              <li>You will have good services.</li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className={classes.root}>
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {tutorialSteps.map((step, index) => (
                  <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <div style={{ height: "100%" }}>{step.card}</div>
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationSection;

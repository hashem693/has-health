import React from "react";
import "../MedicalTests.scss";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import card1 from "../../assets/card_01.jpg";
import card2 from "../../assets/card_02.jpg";
import card3 from "../../assets/card_03.jpg";
import card4 from "../../assets/card_04.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    paddingTop: "90%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function TestsBenifites() {
  const classes = useStyles();
  return (
    <section className="container pb-5 MedicalTests__benifites">
      <div className="row">
        <div className="col-md-6 col-sm-12  MedicalTests__benifites__imgs py-4">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Card className="py-3" className={classes.root}>
                <CardMedia
                  className="img-fluid"
                  className={classes.media}
                  image={card1}
                  title="Paella"
                />
                <CardContent>
                  <Typography
                    className="text-center"
                    variant="body3"
                    component="p"
                  >
                    600+ different tests
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-6 col-sm-12">
              <Card className="py-3" className={classes.root}>
                <CardMedia
                  className="img-fluid"
                  className={classes.media}
                  image={card2}
                  title="Paella"
                />
                <CardContent>
                  <Typography
                    className="text-center"
                    variant="body3"
                    component="p"
                  >
                    High-End Technology
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-6 col-sm-12 mt-4">
              <Card className="py-3" className={classes.root}>
                <CardMedia
                  className="img-fluid"
                  className={classes.media}
                  image={card3}
                  title="Paella"
                />
                <CardContent>
                  <Typography
                    className="text-center"
                    variant="body3"
                    component="p"
                  >
                    Free Home Sampling
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-6 col-sm-12 mt-4">
              <Card className="py-3" className={classes.root}>
                <CardMedia
                  className="img-fluid"
                  className={classes.media}
                  image={card4}
                  title="Paella"
                />
                <CardContent>
                  <Typography
                    className="text-center"
                    variant="body3"
                    component="p"
                  >
                    Patient Support
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12  MedicalTests__benifites__desc py-4">
          <p>BENEFITS</p>
          <h3>We'll Ensure You Always get the Best Results</h3>
          <p>
            Your full-service lab for clinical trials. Our mission is to ensure
            the generation of accurate.
          </p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TestsBenifites;

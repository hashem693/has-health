import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import card1 from "../../assets/card_01.jpg";
import card2 from "../../assets/card_02.jpg";
import card3 from "../../assets/card_03.jpg";
import card4 from "../../assets/card_04.jpg";
import { Link } from "react-router-dom";

import "../MedicalTests.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    paddingTop: "85%", // 16:9
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
              <Card >
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
              <Card>
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
            <div className="col-md-6 col-sm-12 mt-3">
              <Card 
              >
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
            <div className="col-md-6 col-sm-12 mt-3">
              <Card >
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
          <p className="ben">BENEFITS</p>
          <h3>We'll Ensure You Always get the Best Results</h3>
          <p className="pt-3">
            Your full-service lab for Has-Health trials. Our mission is to
            ensure the generation of accurate.
          </p>
          <p className="py-1">Our firm is expert to create an efficient user interface that.</p>
          <p>
            The Microbiology Laboratory is composed of several sections
            including Aerobic and Anaerobic Bacteriology, Mycology,
            Parasitology, Mycobacteriology. Monday to Friday, 7 am – 5 pm.
          </p>
          <p className="mt-4">
            Has-Health is registered with the following governmental agencies:
          </p>
          <ul>
            <li>Drug Enforcement Agency (DEA) No. RG0105216</li>
            <li>Food and Drug Administration (FDA) No. 2182801</li>
            <li>International Standards Organization (ISO9001 and ISO17025)</li>
            <li>United States Department of Agriculture (USDA) No. 35-R-034</li>
          </ul>
          <div className="mt-5">
            <Link
              className="text-decoration-none px-4 py-3 rounded Link"
              variant="contained"
              to="/about"
            >
              All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
 
 );
}

export default TestsBenifites;

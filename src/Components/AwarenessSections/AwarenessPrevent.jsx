import { React, classes } from "react";
import "../Awareness.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import card1 from "../../assets/prevent-1.png";
import card2 from "../../assets/prevent-2.png";
import card3 from "../../assets/prevent-3.png";
import card4 from "../../assets/prevent-4.png";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    paddingTop: "50%", // 16:9
  },
}));
function AwarenessPrevent() {
  const classes = useStyles();
  return (
    <section className="container py-5 Awareness__Prevent">
      <div className="row py-3">
        <div className="col-md-6 col-sm-12 Awareness__Prevent__imgs py-4">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Card  className="item">
                <CardMedia
                  className="img-fluid"
                  className={classes.media}
                  image={card1}
                  title="Paella"
                />
                <CardContent>
                  <Typography variant="body3" component="h5">
                    Stay at home
                  </Typography>
                  <Typography componrnt="p" className="text-muted parag pt-2">
                    Stay at home if you perceive the symptoms and consult your
                    doctor on phone.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-6 col-sm-12">
              <Card  className="item">
                <CardMedia
                  className="img-fluid"
                  className={classes.media}
                  image={card2}
                  title="Paella"
                />
                <CardContent>
                <Typography variant="body3" component="h5">
                Wash your hands often

                  </Typography>
                  <Typography componrnt="p" className="text-muted parag pt-2">
                  Clean your hands with alcohol-based rub or wash them with soap for at least 20 seconds.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-6 col-sm-12 mt-3">
              <Card className="item">
                <CardMedia
                  className="img-fluid"
                  className={classes.media}
                  image={card3}
                  title="Paella"
                />
                <CardContent>
                <Typography variant="body3" component="h5">
                Keep social distance

                  </Typography>
                  <Typography componrnt="p" className="text-muted parag pt-2">
                  Keep at least 2 m distance between yourself & anyone if you go among people.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-6 col-sm-12 mt-3">
              <Card  className="item">
                <CardMedia
                  className="img-fluid"
                  className={classes.media}
                  image={card4}
                  title="Paella"
                />
                <CardContent>
                <Typography variant="body3" component="h5">
                Wear Facemask

                  </Typography>
                  <Typography componrnt="p" className="text-muted parag pt-2">
                  When you are around other people and before you enter a healthcare provider’s.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12  MedicalTests__benifites__desc py-4">
          <p className="ben">What should you do</p>
          <h3>How to prevent Coronavirus?</h3>
          <p className="pt-3 text-muted">
            Some details about how the disease is spread are unknown and is
            being determined.The WHO and CDC state that it is primarily spread
            during close contact and by respiratory droplets produced when
            people cough or sneeze; with close contact being within 1 to 2
            meters (3 to 6 feet). A study in Singapore found that an uncovered
            coughing can lead to droplets travelling up to 4.5 metres (15 feet).
          </p>
          <p className="py-1 text-muted">
            Respiratory droplets may also be produced during breathing out,
            including when talking, though the virus is not generally airborne.
            These droplets can land in the mouths or noses of people who are
            nearby or possibly be inhaled into the lungs. Some medical
            procedures such as intubation and cardiopulmonary...
          </p>
          <p className=" text-muted">The speed of transmission is an important difference between the two viruses. Influenza typically has a shorter incubation period (the time from infection to appearance of symptoms) than COVID-19. This means that influenza can spread faster than COVID-19.</p>
        </div>
      </div>
    </section>
  );
}

export default AwarenessPrevent;

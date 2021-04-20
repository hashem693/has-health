import React, { useContext, useState, useEffect } from "react";
import { Button, Accordion, Card } from "react-bootstrap";
import { AuthContext } from "../context/Auth";
import { db } from "../firebase/firebase";
import { auth } from "../firebase/firebase";
import "./Profile.scss";
import PropTypes from "prop-types";
import SvgIcon from "@material-ui/core/SvgIcon";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Collapse from "@material-ui/core/Collapse";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    "& .close": {
      opacity: 0.3,
    },
  },
  group: {
    marginLeft: 7,
    paddingLeft: 18,
    borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
  },
}))((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
));

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [appoints, setAppoints] = useState([]);

  useEffect(() => {
    const unsub = db
      .collection("Appointments")
      .orderBy("day")
      .onSnapshot((snap) => {
        let fetched = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setAppoints(fetched);
      });
    return unsub;
  }, []);

  return (
    <section className="profile container py-5">
      <div className="row py-3">
        <div className="profile__welcome col-md-6 col-sm-12 ">
          <p>
            <span>Welcome Admin:</span> {user.email}
          </p>
        </div>

        <div className="profile__Signout col-md-6 col-sm-12 ">
          <button className="btn" onClick={() => auth.signOut()}>
            Sign Out
          </button>
        </div>

        <div className="profile__header col-md-12 py-3 text-center ">
          <h4>Appointments At All Our Branches</h4>
          <p className="pt-2 text-muted">
            This is pariticular to website admins where determined Branches,
            Appointment time, Doctors and their Specialisties.{" "}
          </p>
        </div>

        <div className="profile__detailes col-md-6 col-sm-12 py-3">
          <p>Cairo Branch</p>
          <TreeView
            //className={classes.root}
            defaultExpanded={["1"]}
            defaultCollapseIcon={<MinusSquare />}
            defaultExpandIcon={<PlusSquare />}
            defaultEndIcon={<CloseSquare />}
          >
            <StyledTreeItem
              nodeId="1"
              label="All Doctors and thier Specialisties"
            >
              <StyledTreeItem nodeId="2" label="Doctor Name">
                <StyledTreeItem nodeId="4" label="Doctor Specialist" />
              </StyledTreeItem>
            </StyledTreeItem>
          </TreeView>
        </div>

        <div className="profile__appointment col-md-6 col-sm-12 py-3">
          <Accordion>
            {appoints.map((appoint, i) => (
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    eventKey={i + 1}                   
                  >
                    {appoint.day}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={i + 1}  className="pl-4">
                  <Card.Body>
                    <p><span>Branch:</span> {appoint.location}</p>
                    <p><span>Specialist:</span> {appoint.specialist}</p>
                    <p><span>Time:</span> {appoint.time}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </div>

        <div className="profile__detailes col-md-6 col-sm-12 py-4">
          <p>Alex Branch</p>
          <TreeView
            //className={classes.root}
            defaultExpanded={["1"]}
            defaultCollapseIcon={<MinusSquare />}
            defaultExpandIcon={<PlusSquare />}
            defaultEndIcon={<CloseSquare />}
          >
            <StyledTreeItem
              nodeId="1"
              label="All Doctors and thier Specialisties"
            >
              <StyledTreeItem nodeId="2" label="Doctor Name">
                <StyledTreeItem nodeId="4" label="Doctor Specialist" />
              </StyledTreeItem>
            </StyledTreeItem>
          </TreeView>
        </div>

        <div className=" profile__appointment col-md-6 col-sm-12 py-4">
          <p>Appointment time</p>
        </div>

        <div className="profile__detailes col-md-6 col-sm-12 py-4">
          <p>Giza Branch</p>
          <TreeView
            //className={classes.root}
            defaultExpanded={["1"]}
            defaultCollapseIcon={<MinusSquare />}
            defaultExpandIcon={<PlusSquare />}
            defaultEndIcon={<CloseSquare />}
          >
            <StyledTreeItem
              nodeId="1"
              label="All Doctors and thier Specialisties"
            >
              <StyledTreeItem nodeId="2" label="Doctor Name">
                <StyledTreeItem nodeId="4" label="Doctor Specialist" />
              </StyledTreeItem>
            </StyledTreeItem>
          </TreeView>
        </div>

        <div className=" profile__appointment col-md-6 col-sm-12 py-4">
          <p>Appointment time</p>
        </div>

        <div className="profile__detailes col-md-6 col-sm-12 py-4">
          <p>Tanta Branch</p>
          <TreeView
            //className={classes.root}
            defaultExpanded={["1"]}
            defaultCollapseIcon={<MinusSquare />}
            defaultExpandIcon={<PlusSquare />}
            defaultEndIcon={<CloseSquare />}
          >
            <StyledTreeItem
              nodeId="1"
              label="All Doctors and thier Specialisties"
            >
              <StyledTreeItem nodeId="2" label="Doctor Name">
                <StyledTreeItem nodeId="4" label="Doctor Specialist" />
              </StyledTreeItem>
            </StyledTreeItem>
          </TreeView>
        </div>

        <div className=" profile__appointment col-md-6 col-sm-12 py-4">
          <p>Appointment time</p>
        </div>
      </div>

      {/* <div className="row profile__detailes py-3">
      
   

   
      </div> */}
    </section>
  );
};

export default Profile;

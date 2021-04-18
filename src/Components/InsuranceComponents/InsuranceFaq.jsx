import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function InsuranceFaq() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="mt-3 Insurancesec__Faq">
      <div className={classes.root}>
        <Accordion
          className="Accordion"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.secondaryHeading}>
              Why doesn’t Has-Heath Integrative Medicine accept my Insurance?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-muted desc">
              Our integrative medicinal physicians feel that insurance companies
              should not set restrictions on the level of patient care available
              to you may it be medical testing or treatment. Providing patient
              care outside of the insurance restrictions allows our physicians
              to take their time to comfort and support you through your
              concerns and discuss appropriate treatment. Operating outside the
              insurance system also allows our physicians to provide you with a
              customized treatment plan that may include “Functional and
              Complementary Medicine” techniques, genetic testing, food allergy
              tests or heavy metal tests that may not be accepted by some
              insurance companies. The medical treatment you receive should be
              the best possible care, and should be determined by you and your
              doctor, not your insurance company.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="Accordion"
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.secondaryHeading}>
              Does my Insurance cover Has-Health Executive Health Packages?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-muted desc">
              If your insurance policy has out-of-network benefits, a portion of
              charges may be covered for the executive health package. Before
              your first visit, it is best to talk with your insurance provider
              to determine which elements of the health package they will or
              will not cover. Alternatively, you can talk to our patient support
              team about your out-of-network benefits and what they include, as
              every plan is different.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="Accordion"
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.secondaryHeading}>
              Does the Has-Health Integrative Medicine accept insurance for my
              labs, ultrasounds and X-rays?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-muted desc">
              <ul>
                <li>
                  Dr Heather Eade and Dr Astrid do not accept insurance.
                  However, other team members such as our GP’s, family practice
                  consultants, internists, endocrinologists and physical
                  therapists accept insurance. These physicians will provide
                  treatment which covers some of the lab’s tests, ultrasounds or
                  radiology tests you may need.
                </li>
                <li>
                  Insurance providers often provide partial payment towards our
                  executive health check-ups, its best to check with your policy
                  provider to determine which tests they cover.
                </li>
                <li>
                  The Integrative HasHealth Psychiatry team and our lung
                  specialist, allergist and sleep specialist do accept
                  insurance.
                </li>
                <li>
                  Acupuncture and cupping (Hijama) are usually covered by Theqa
                  insurance.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="Accordion"
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.secondaryHeading}>
              Does Novomed offer financing?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-muted desc">
        
                We at Novomed understand that not all patients or potential
                patients have the financial means to pay for medical services
                out of their pocket. Your out-of-network benefits and possible
                reimbursement may account towards a proportion of the charges,
                but financial hardship may still exist. Novomed wants to let you
                know that we work with three banks (Emirates NBD, ADCB and
                Emirates Islamic Bank) that offer one year’s interest free
                financing if you use their credit cards.
         <br/>
         <br/>
                Novomed is not affiliated with those banks in any way and has no
                financial relationship with those banks. This is not an
                endorsement of their services. Information provided does not
                imply endorsement of these banks’ services and is presented by
                Novomed without any representation, guaranty, or warranty
                regarding its services. As with all important financial
                decisions, you should proceed carefully and/or consult with a
                financial advisor before making any decision.
           
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="Accordion"
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography className={classes.secondaryHeading}>
              Does my medical insurance cover the cost of supplements?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-muted desc">
           
                The non-prescription nutritional supplements that are available
                for purchase at Novomed’s pharmacy are not covered under your
                insurance company’s prescription plan. However, you can apply
                for reimbursement depending on your insurance policy.
                financing if you use their credit cards.
         <br/>
         <br/>
                Please mention the need of the prescription to your physician
                during your appointment, prior to purchase. The copy of your
                prescription must be submitted with your reimbursement request.
           
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="Accordion"
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography className={classes.secondaryHeading}>
              I feel like my insurance company is exhausting me with denials and
              requests for more information. Is there anyone to help me?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-muted desc">
     
                You can schedule an appointment with Razan Al Nabulsi the
                Has-Health Billing Director, to review your insurance claims and
                any remittance advice that your insurance provider sends to you
                in response to each claim for reimbursement you submit.
                financing if you use their credit cards.
         <br/>
         <br/>
                Razan will explain your insurance company’s adjudication, advise
                you if your claims are being unfairly denied and tell you what
                you can do to appeal the decision.
     
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="Accordion"
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Typography className={classes.secondaryHeading}>
              I usually file my own claims, but sometimes I ask Novomed to file
              my claims for me. When I do, my claims seem to get paid faster,
              while those I file are processed more slowly and sometimes get
              denied. Why?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-muted desc">
              
                When you file a claim by email, the processor must manually
                enter the insurance company’s computer system the following
                information:
              <ul className="pt-2">
                <li>The facility address where you were treated</li>
                <li>The name of the care provider</li>
                <li>ID numbers of the patient and provider</li>
                <li>Service codes</li>
                <li>Corresponding diagnosis codes</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="Accordion"
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
          >
            <Typography className={classes.secondaryHeading}>
              Does Has-Health offer financing?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-muted desc">
        
                We at Has-Health understand that not all patients or potential
                patients have the financial means to pay for medical services
                out of their pocket. Your out-of-network benefits and possible
                reimbursement may account towards a proportion of the charges,
                but financial hardship may still exist. Novomed wants to let you
                know that we work with three banks (Emirates NBD, ADCB and
                Emirates Islamic Bank) that offer one year’s interest free
                financing if you use their credit cards.
         <br/>
         <br/>
                Has-Health is not affiliated with those banks in any way and has
                no financial relationship with those banks. This is not an
                endorsement of their services. Information provided does not
                imply endorsement of these banks’ services and is presented by
                Novomed without any representation, guaranty, or warranty
                regarding its services. As with all important financial
                decisions, you should proceed carefully and/or consult with a
                financial advisor before making any decision.
          
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="Accordion"
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9bh-content"
            id="panel9bh-header"
          >
            <Typography className={classes.secondaryHeading}>
            What should I ask my insurance company when I inquire about my out-of-network benefits?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-muted desc">
            Ask your insurance company to provide you with the answers to the following 4 questions:

              <ul className="pt-2">
              <li>“What is my out-of-network deductible?”</li>
              <li>“Is my out-of-network deductible separate from my in-network deductible?”</li>
              <li>“What is my co-insurance?”</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

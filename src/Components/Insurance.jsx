import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import InsuranceCard from "./InsuranceComponents/InsuranceCard";
import InsuranceFaq from "./InsuranceComponents/InsuranceFaq";
import InsuranceHeader from "./InsuranceComponents/InsuranceHeader";

function Insurance() {
  const [insurance, setinsurance] = useState([]);

  useEffect(() => {
    const unsub = db.collection("insurance").onSnapshot((snap) => {
      let fetched = snap.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setinsurance(fetched);
    });
    return unsub;
  }, []);

  return (
    <div className="container py-5 Insurancesec">
      <section className="Insurancesec__Faq">
        <InsuranceHeader />
        <InsuranceFaq />
      </section>
      <section className=" mt-5 py-5">
        <h3 className="text-center">Insurance Providers </h3>
        <div className="row">
          {insurance.map((insure) => (
            <div className="col-md-4 col-sm-12">
              <InsuranceCard name={insure.name} discount={insure.discount} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Insurance;

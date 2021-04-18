import React from "react";
import InsuranceCard from "./InsuranceComponents/InsuranceCard";
import InsuranceFaq from "./InsuranceComponents/InsuranceFaq";
import InsuranceHeader from "./InsuranceComponents/InsuranceHeader";

function Insurance() {
  return (
    <div className="container py-5 Insurancesec">
      <section className="Insurancesec__Faq">
        <InsuranceHeader />
        <InsuranceFaq />
      </section>
      <section className=" mt-5 py-5">
        <h3 className="text-center">Insurance Providers </h3>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <InsuranceCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Insurance;

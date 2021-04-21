import React from 'react';
import TestHeader from './TestsComponents/TestHeader';
import './MedicalTests.scss';
import TestsMedicalTabs from './TestsComponents/TestsMedicalTabs';
import TestsBenifites from './TestsComponents/TestsBenifites';
import TestsCards from './TestsComponents/TestsCards';

function MedicalTests() {
    return (
        <section className="MedicalTests">
           <TestHeader/>
           <TestsMedicalTabs/>
           <TestsCards />
           <TestsBenifites/>
        </section>
    )
}

export default MedicalTests

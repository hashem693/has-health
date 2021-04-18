import React from 'react';
import TestHeader from './TestsComponents/TestHeader';
import './MedicalTests.scss';
import TestsMedicalTabs from './TestsComponents/TestsMedicalTabs';
import TestsBenifites from './TestsComponents/TestsBenifites';

function MedicalTests() {
    return (
        <section className="MedicalTests">
           <TestHeader/>
           <TestsMedicalTabs/>
           <TestsBenifites/>
        </section>
    )
}

export default MedicalTests

import React from 'react';
import Background from '../../assets/lab.jpg';
import '../MedicalTests.scss';

function TestHeader() {
    return (
        <section className="py-5 MedicalTests__header" style={{ backgroundImage: `url(${Background})` }}>
            <div className="container w-75 py-5">
                <h2 className="w-50 text-center p-3 my-5">Has-Health Solutions</h2>
            </div>
            
        </section>
    )
}

export default TestHeader

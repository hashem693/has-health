import React from 'react';
import Background from '../../assets/lab.jpg';
import '../MedicalTests.scss';

function TestHeader() {
    return (
        <section className="py-5 MedicalTests__header" style={{ backgroundImage: `url(${Background})` }}>
            <div className="container h-100 position-relative py-5">
                <div className="w-100 head  position-absolute">
                <h2 className="w-50 text-center p-3 my-5">Has-Health Solutions</h2>
                </div>
            </div>
            
        </section>
    )
}

export default TestHeader

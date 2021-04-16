import React, { useState } from 'react';
import DoctorSignUp from '../AZForms/FormDoctorSignUp';
import VisitorSignUp from '../AZForms/FormVisitorSignUp';

function Insurance() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function SubmitForm() {
        setIsSubmitted(true);
    }

    return (
        <div>
            <DoctorSignUp submitForm={SubmitForm} />
            <VisitorSignUp submitForm={SubmitForm} />
        </div>
    )
}

export default Insurance;
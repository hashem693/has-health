import React, { useState } from 'react';
import FormAppointment from '../AZForms/FormAppointment';
//import FormSuccess from '../AZForms/formSuccess';

function Appointmentz() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function SubmitForm() {
        setIsSubmitted(true);
    }

    return (
        <div>
            <FormAppointment submitForm={SubmitForm} />
            {/*{!isSubmitted ? (<FormAppointment submitForm={SubmitForm} />) : (<FormSuccess />)}*/}            
            {/*<div className="successMsd d-none">
                <p>Data send</p>
                <button>X</button>
            </div>*/}
        </div>
    )
}

export default Appointmentz;
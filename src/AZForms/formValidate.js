export default function formValidate(values) {
    let errors = {};
    //Appointment
    if( !values.apptspec ){
        errors.apptspec = "Appointment Specialist selection required"
    }    
    if( !values.apptprloc ){
        errors.apptprloc = "Appointment Preferred Location selection required"
    }
    if( !values.apptdt ){
        errors.apptdt = "Appointment Date selection required"
    }
    if( !values.appttm ){
        errors.appttm = "Appointment time selection required"
    }
    
    // Doctor     
    if( !values.dcfnm ){
        errors.dcfnm = "Doctor first name required"
    }
    if( !values.dclnm ){
        errors.dclnm = "Doctor last name required"
    }
    if( !values.dcg ){
        errors.dcg = "Doctor gender selection required"
    }
    if( !values.dcph ){
        errors.dcph = "Doctor phone required"
    }
    if( !values.dcspc ){
        errors.dcspc = "Doctor Specialist Selection required"
    }
    if( !values.dcb ){
        errors.dcb = "Doctor branch selection required"
    }
    if( !values.dclcs ){
        errors.dclcs = "Doctor license required"
    }
  
    if (!values.dceml) {
        errors.dceml = 'Doctor Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.dceml)) {
        errors.dceml = 'Doctor Email is invalid';
    }

    if (!values.dcpass) {
        errors.dcpass = 'Doctor Password is required';
    } else if (values.dcpass.length < 6) {
    errors.dcpass = 'Doctor Password needs to be 6 characters or more';
    }

    if (!values.dcpassconf) {
    errors.dcpassconf = 'Doctor Password is required';
    } else if (values.dcpassconf !== values.userpass) {
    errors.dcpassconf = 'Doctor Passwords do not match';
    }

    // visitor
    if( !values.vnm ){
        errors.vnm = "Visitor name required"
    }
    if( !values.vadd ){
        errors.vadd = "Visitor address required"
    }
    if( !values.vdb ){
        errors.vdb = "Visitor Date of birth required"
    }

    return errors;
}

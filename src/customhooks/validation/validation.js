const validation = (values) => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "this field is required";
  } else if (
    !/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/g.test(values.firstName)
  ) {
    errors.firstName = "this field accepts characters only";
  }
  if (!values.lastname) {
    errors.lastname = "this field is required";
  } else if (
    !/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/g.test(values.lastname)
  ) {
    errors.lastname = "this field accepts characters only";
  }
  if (!values.email) {
    errors.email = "this field is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "this field accepts email only";
  }
  if (!values.password) {
    errors.password = "this field is required";
  } else if (values.password.length < 6) {
    errors.password = "password must be not less than 6";
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = "this field is required";
  } else if (values.confirmpassword.length < 6) {
    errors.confirmpassword = "password must be not less than 6";
  } else if (!(values.password === values.confirmpassword)) {
    errors.confirmpassword = "password does not match";
  }

  return errors;
};

export default validation;

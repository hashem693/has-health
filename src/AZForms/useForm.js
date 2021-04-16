import { useState, useEffect } from 'react';

const useForm = (callback, FormValidate) => {
  const [values, setValues] = useState({
    apptspec: '',
    apptprloc: '',
    apptdt: '',
    appttm: '',

    dcfnm: '',
    dclnm: '',
    dcg: '',
    dcph: '',
    dcspc: '',
    dcb: '',
    dclcs: '',
    dceml: '',    
    dcpass: '',
    dcpassconf: '',

    vnm: '',
    vadd: '',
    vdb: '',

  });

  const [errors, setErrors] = useState({});  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(FormValidate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
        //document.querySelector(".successMsd").classList.remove("d-none");
        //document.querySelector(".successMsd").classList.add("d-flex");
        //document.querySelector(".successMsd").classList.toggle("d-flex", "d-none");
        
      }
    },
    [errors]
  );

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
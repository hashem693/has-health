import { useState } from "react";
import { useFirestore } from "../firebase/useFirestore";

const initialState = {
  firstName: "",
  lastname: "",
  license: "",
  phone: "",
  gender: "",
  branch: "",
  specialist: "",
};

export const useForm = () => {
  const [values, setvalues] = useState(initialState);
  const { addDoctor } = useFirestore();

  const handlechange = ({ target }) => {
    setvalues({ ...values, [target.name]: target.value });
  };

  const handlesubmit = async (e, usertype) => {
    e.preventDefault();
    await addDoctor(values, usertype);
    setvalues(initialState);
  };
  return { handlechange, handlesubmit, values };
};

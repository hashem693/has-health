import { useState } from "react";
import { useFirestore } from "../firebase/useFirestore";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";
import validation from "./validation/validation";

const initialState = {
  firstName: "",
  lastname: "",
  license: "",
  phone: "",
  gender: "",
  branch: "",
  specialist: "",
};

const authinitialState = { email: "", password: "", confirmPassword: "" };

export const useForm = () => {
  const [values, setvalues] = useState(initialState);
  const { addDoctor } = useFirestore();

  const history = useHistory();
  const [input, setInput] = useState("");
  const [error, setErrors] = useState({});

  const handleChange2 = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
    setErrors("");
  };

  const handlechange = ({ target }) => {
    setvalues({ ...values, [target.name]: target.value });
  };

  const handlesubmit = async (e, usertype) => {
    e.preventDefault();
    setErrors(validation(values));
    await addDoctor(values, usertype);
    setvalues(initialState);
    try {
      await auth.createUserWithEmailAndPassword(input.email, input.password);
      setInput(authinitialState);
      history.push("/");
    } catch (err) {
      setErrors(err.message);
    }
  };

  return { handlechange, handlesubmit, values, input };
};

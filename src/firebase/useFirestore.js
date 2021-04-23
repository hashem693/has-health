import { useState, useEffect } from "react";
import { db } from "./firebase";

export const useFirestore = () => {
  const [doctors, setdoctors] = useState([]);

  useEffect(() => {
    const unsub = db.collection("doctors").onSnapshot((snap) => {
      let fetched = snap.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setdoctors(fetched);
    });
    return unsub;
  }, []);
  const addDoctor = async (doctor, usertype) => {
    await db.collection(usertype).add({ ...doctor });
  };

  return { doctors, addDoctor };
};

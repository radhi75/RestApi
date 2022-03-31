import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcontacts } from "../redux/action/ContactActions";
import ContactCards from "./ContactCards";

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcontacts());
  }, [dispatch]);

  const data = useSelector((state) => state.ContactReducer.contacts);
  console.log(data);
  return (
    <div>
      {data.map((contacts) => (
        <ContactCards contacts={contacts} />
      ))}
    </div>
  );
};

export default ContactList;

import React from "react";
import { Redirect, useHistory } from "react-router-dom";

import "./Options.css";

const OptionRoles = (props) => {

  let history  = useHistory();

  const redirectExpert = () => {
      history.push("/experts");
  }
    
  const optionroles = [
    {
      text: "Visit and Select Category",
      handler: () => redirectExpert(),
      id: 1,
    }
  ];



  const buttonsMarkup = optionroles.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionRoles;

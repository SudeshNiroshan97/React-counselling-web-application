import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "User Registration",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    { text: "Making an Appointment", handler: () => {}, id: 2 },
    { text: "View Articles", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;

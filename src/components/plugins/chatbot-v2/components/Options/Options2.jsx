const Options2 = (props) => {
    const cou_options = [
      {
        text: "Family",
        handler: props.actionProvider.getExpert,
        id: 1,
      },
      { text: "Relationships", handler: () => {}, id: 2 },
      { text: "Kids", handler: () => {}, id: 3 },
    ];
  
    const buttonsMarkup = cou_options.map((option) => (
      <button key={option.id} onClick={option.handler} className="option-button">
        {option.text}
      </button>
    ));
  
    return <div className="options-container">{buttonsMarkup}</div>;
  };
  
  export default Options2;
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };

  help = () => {
    const message = this.createChatBotMessage("How can I help you?");
    this.addMessageToState(message);
  };

  end = () => {
    const message = this.createChatBotMessage("Take care!");
    this.addMessageToState(message);
  };


  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Choose Counsilor category",
      {
        widget: "cou_options",
        
      }
    );

    this.addMessageToState(message);
  };

  getExpert = () => {
    const message = this.createChatBotMessage(
      "Getting Results",
      {
        widget: "optionroles",
        
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;

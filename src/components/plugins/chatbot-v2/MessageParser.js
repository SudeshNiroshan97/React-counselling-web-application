class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }
    if (lowercase.includes("hi")) {
      this.actionProvider.greet();
    }
    if (lowercase.includes("hii")) {
      this.actionProvider.greet();
    }

    
    if (lowercase.includes("i need help")) {
      this.actionProvider.help();
    }
    if (lowercase.includes("Can you help")) {
      this.actionProvider.help();
    }
    if (lowercase.includes("Can you help me")) {
      this.actionProvider.help();
    }
    if (lowercase.includes("help")) {
      this.actionProvider.help();
    }

    if (lowercase.includes("bye")) {
      this.actionProvider.end();
    }


    if (lowercase.includes("javascript") || lowercase.includes("js")) {
      this.actionProvider.handleJavascriptQuiz();
    }
  }
}

export default MessageParser;

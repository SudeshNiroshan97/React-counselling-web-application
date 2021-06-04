import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "./components/Options/Options";
import Options2 from "./components/Options/Options2";
import OptionRoles from "./components/Options/OptionRoles";
import Quiz from "./components/Quiz/Quiz";

const config = {
  botName: "Counselling Service Bot",
  initialMessages: [
    createChatBotMessage(`Hello. Welcome to Counselling Service. How Can i help you?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      
      widgetName: "cou_options",
      widgetFunc: (props) => <Options2 {...props} />,
    },
    {
      
      widgetName: "optionroles",
      widgetFunc: (props) => <OptionRoles {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;

import { Left } from "./Left";
import { Right } from "./Right";
import { useRef } from "react";
import { Configuration, OpenAIApi } from "openai";

export const Home = () => {
  const text = useRef("");
  const handleLeftQuestions = (e) => {
    text.current.value = e.target.value;
  };
  const handleConversation = async () => {
    let quest = text.current.value;
    text.current.value = "";
    if (quest === "") {
      alert("Message Field is empty!!!");
    } else {
      const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      const intro = document.getElementById("introduction");
      intro.style.visibility = "hidden";
      const conversation = document.getElementById("conversation");
      conversation.style.visibility = "visible";
      let top = document.createElement("div");
      top.className = "px-48 py-4";
      top.style.minHeight = "5rem";
      top.innerText = quest;
      let bottom = document.createElement("div");
      bottom.className = "bg-zinc-500 px-48 py-4";
      bottom.style.minHeight = "5rem";
      if (quest === "Who is Dhruv Mittal?") {
        bottom.innerText =
          "He is a Thorough and meticulous Software Developer passionate about helping businesses succeed. Pursuing B.Tech - IT and have knowledge in Web Development. Efficiently managing multiple projects & participating in various Hackathons. Possess hands on experience of ReactJS, JavaScript, Java, NodeJS, MongoDB, Express.JS, HTML, CSS, C++, SQL.";
      } else {
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: quest }],
        });
        console.log(completion.data.choices[0].message);
        bottom.innerText = completion.data.choices[0].message;
      }
      conversation.appendChild(top);
      conversation.appendChild(bottom);
    }
  };

  return (
    <>
      <div className="flex flex-row h-screen w-screen">
        <div className="w-1/6">
          <Left handleLeftQuestions={handleLeftQuestions} />
        </div>
        <div className="bg-zinc-700 w-full">
          <Right handleConversation={handleConversation} text={text} />
        </div>
      </div>
    </>
  );
};

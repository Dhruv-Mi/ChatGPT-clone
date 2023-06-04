export const Left = ({ handleLeftQuestions }) => {
  const questions = [
    "Who is Dhruv Mittal?",
    "How are you?",
    "Who is the Goat of football?",
    "What is your Favourite fruit?",
    "What is the Currency of India?",
    "Something about the World?",
    "Write a story for me?",
    "Suggest a game for time pass?",
  ];
  return (
    <>
      <div className="bg-neutral-900 text-white h-screen">
        <div className="text-transparent">h</div>
        <div className="m-auto">
          <a href="/">
            <button className="w-60 border border-white h-10 ml-0.5 rounded-md h-14 text-md text-left pl-3 hover:bg-neutral-700 mr-2">
              + New chat
            </button>
          </a>
        </div>
        <div className="mt-7">
          <div className="text-center text-md">TRY SOME QUESTION'S</div>
          <div>
            {questions.map((question) => (
              <button
                className="w-60 border border-white h-10 ml-0.5 rounded-md h-10 text-md text-left pl-3 hover:bg-neutral-700 mt-3 mr-2"
                value={question}
                onClick={(e) => handleLeftQuestions(e)}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const Introduction = () => {
  const intro = [
    "Explain quantum computing in simple terms",
    "Remembers what user said earlier in the conversation",
    "May occasionally generate incorrect information",
    "Got any creative ideas for a 10 year old’s birthday?",
    "Allows user to provide follow-up corrections",
    "May occasionally produce harmful instructions or biased content",
    "How do I make an HTTP request in Javascript?",
    "Trained to decline inappropriate requests",
    "Limited knowledge of world and events after 2021",
  ];
  return (
    <>
      <div className="w-3/5 m-auto h-4/5 text-white mt-36">
        <div className="text-center text-4xl font-bold ">ChatGPT</div>
        <div className="grid grid-cols-3 gap-5 text-center mt-16">
          <div className="text-2xl">
            <i className="fa mr-2">&#xf185;</i>
            Examples
          </div>
          <div className="text-2xl">
            <i className="fa mr-2">&#xf0e7;</i>
            Capabilities
          </div>
          <div className="text-2xl">
            <i className="fa mr-2">&#xf071;</i>Limitations
          </div>
          {intro.map((element) => (
            <div className="text-sm bg-neutral-800 p-2 rounded-md">
              {element}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

import { Introduction } from "./Introduction";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  input: {
    color: "white",
  },
}));

export const Right = ({ handleConversation, text }) => {
  const classes = useStyles();

  return (
    <>
      <div className="flex flex-col">
        <div className="relative" style={{ height: "39.6rem" }}>
          <div style={{ visibility: "visible" }} id="introduction">
            <Introduction />
          </div>
          <div
            className="absolute inset-x-0 top-0 text-white mt-3"
            style={{
              height: "38.6rem",
              overflowY: "auto",
              visibility: "hidden",
            }}
            id="conversation"
          ></div>
        </div>
        <div className="text-white text-center" style={{ height: "7rem" }}>
          <div className="w-fit m-auto">
            <TextField
              fullWidth
              placeholder="Send a message..."
              id="message"
              autoFocus="true"
              inputRef={text}
              sx={{
                width: 700,
                maxWidth: "100%",
                "& .MuiInputLabel-root": { color: "rgb(255,255,255)" },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "white",
                    color: "rgb(255,255,255)",
                  },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputBase-root": {
                  color: "white",
                },
              }}
            />
            <span>
              <button className="h-14 w-18" onClick={handleConversation}>
                <i className="fa ml-4" style={{ fontSize: "36px" }}>
                  &#xf2c6;
                </i>
              </button>
            </span>
          </div>
          <div className="mt-3 text-xs text-zinc-200">
            Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts. ChatGPT May 24 Version
          </div>
        </div>
      </div>
    </>
  );
};

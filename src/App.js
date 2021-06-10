import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😀": "Happy Face",
  "😃": "Happy Face with Big Eyes",
  "😄": "Happy Face with smiling eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy"
};

var emojisweknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function inputchangeHandler(event) {
    var userinput = event.target.value;
    var meaning = emojiDictionary[userinput];
    if (meaning === undefined) {
      meaning = "We Don't have it our Database";
    }
    setmeaning(meaning);
  }

  function emojiCliclHanlder(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1> inside out!</h1>
      <input
        placeholder={
          "Put the emoji you want to have meaning of or search it from below option"
        }
        onChange={inputchangeHandler}
      />
      <h2>{meaning}</h2>
      <h3> Emojis We Know </h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiCliclHanlder(emoji)}
            style={{ fontSize: "1.2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

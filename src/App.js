import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😀": "Happy Face.  Often conveys general pleasure and good cheer or humor.",
  "😃": "Happy Face with Big Eyes. Often conveys general happiness and good-natured amusement.",
  "😄": "Happy Face with smiling eyes. Often conveys general happiness and good-natured amusement.",
  "😁": "Beaming Face with Smiling Eyes. Teeth may be smoothed-over or crosshatched. Often expresses a radiant, gratified happiness. Tone varies, including warm, silly, amused, or proud.",
  "😆": "Grinning Squinting Face. Often conveys excitement or hearty laughter.",
  "😅": "Grinning Face with Sweat. Intended to depict nerves or discomfort but commonly used to express a close call, as if saying Whew! and wiping sweat from the forehead. ",
  "🤣": "Rolling on the Floor Laughing. Often conveys hysterical laughter more intense than 😂 Face With Tears of Joy.",
  "😂": "Face with Tears of Joy.  Widely used to show something is funny or pleasing. ",
  "🙂": "Slightly Smiling Face. Conveys a wide range of positive, happy, and friendly sentiments. Its tone can also be patronizing, passive-aggressive, or ironic, as if saying This is fine when it’s really not.",
  "🙃": " Upside-Down Face. Commonly used to convey irony, sarcasm, joking, or a sense of goofiness or silliness. Its intent can be similar to the bemused Oh well! of 🤷 Person Shrugging ",
  "😉": "Winking Face. May signal a joke, flirtation, hidden meaning, or general positivity. Tone varies, including playful, affectionate, suggestive, or ironic.",
  "😊": "Smiling Face with Smiling Eyes. Often expresses genuine happiness and warm, positive feelings.",
  "😇": "Smiling Face with Halo. Often represents angels, prayers, and blessings. May also convey angelic behavior, e.g., doing good deeds.",
  "🥰": "Smiling Face with Hearts. Expresses a range of happy, affectionate feelings, especially being in love.",
  "😍": "Smiling Face with Heart-Eyes. Often conveys enthusiastic feelings of love, infatuation, and adoration, e.g., I love/am in love with this person or thing.",
  "🤩": "Star-Struck.A yellow face with a broad, open smile, showing upper teeth on most platforms, with stars for eyes, as if seeing a beloved celebrity. Color of stars widely varies by platform, though commonly gold or red. May express that someone or something is amazing, fascinating, impressive, or exciting.",
  "😘": "Face Blowing a Kiss. May represent a kiss goodbye or good night and convey feelings of love and affection more generally. ",
  "😗": "Kissing Face. Commonly conveys sentiments of love and affection.",
  "😚": "Kissing Face with Closed Eyes. Commonly conveys sentiments of romantic love and affection.",
  "😙": "Kissing Face with Smiling Eyes. May convey such feelings as surprise, admiration, contempt, or feigned innocence, as a person with hands in pocket casually whistling after wrongdoing, as if saying Nothing to look at here.",
  "😋":"Face Savoring Food. Widely used to convey that a food item is delicious. May also express that a person is attractive.",
  "😛": "Face with Tongue. convey a sense of fun, excitement, silliness, cuteness, happiness, or jesting, as if saying Just kidding!",
  "😜":"Winking Face with Tongue. Often conveys a sense of fun, excitement, wackiness, buffoonery, or joking.",
  "🤪": "Zany Face. Commonly represents such activities as acting goofy, having fun, and partying as well as various senses of slang terms like crazy, usually in a positive manner. May convey a spirit of wackiness more generally.",
  "😝": "Squinting Face with Tongue. Often conveys a sense of fun, excitement, playfulness, hilarity, and happiness, as if saying Squee! or Awesome!",
  "🤑": "Money-Mouth Face. Used for a wide range of content dealing with money, including: making money, loving wealth, being or feeling rich, and concepts of success and excellence (e.g., on the money).",
  "🤗": "Hugging Face. May be used to offer thanks and support, show love and care, or express warm, positive feelings more generally. Due to its hand gesture, often used to represent jazz hands, indicating such feelings as excitement, enthusiasm, or a sense of flourish or accomplishment. ",
  "🤭": "Face with Hand Over Mouth. Apple and Facebook feature simple, open eyes, suggesting someone gasping Oh my! in serious surprise, shock, concern, or apology. Other platforms depict a face with smiling eyes and/or blushing cheeks, suggesting coy laughter or embarrassment, as if cheekily saying Oops!",
  "🤫": "Shushing Face. May convey silence, quiet, secrecy, and discreetness. May also create a sense of buzz and anticipation, e.g., an exclusive sneak peek or news scoop.",
  "🤔": "Thinking Face.  Often used to question or scorn something or someone, as if saying Hmm, I don't know about that. Tone varies, including earnest, playful, puzzled, skeptical, and mocking.",
  "🤐": "Zipper-Mouth Face. conveys a secret or that someone will keep one (e.g., My lips are sealed). May also be used to tell someone to stop talking (e.g., Zip it! or I’ll shut up now).",
  "🤨": "Face with Raised Eyebrow. Conveys a wide variety of sentiments, including suspicion, skepticism, concern, consideration, disbelief, and disapproval.",
  "😐": "Neutral Face.  Intended to depict a neutral sentiment but often used to convey mild irritation and concern or a deadpan sense of humor."
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
      <header>
      <h1>Know The Meaning</h1>
      </header>
      <input
        placeholder={
          "Put the emoji you want to have meaning of or search it from below option"
        }
        onChange={inputchangeHandler}
      />
      <h2 className={"myclass"}>{meaning}</h2>
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

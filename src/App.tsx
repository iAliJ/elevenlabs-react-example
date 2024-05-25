import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import AudioStream from "./AudioStream";

const voiceId = "21m00Tcm4TlvDq8ikWAM";
const text = "Hello, this is a sample text to stream as speech.";
const apiKey = "042693cd11bb152181fc81056ffd4ea5";
const voiceSettings = {
  stability: 0,
  similarity_boost: 0,
};

function App() {
  return (
    <div>
      <AudioStream
        voiceId={voiceId}
        text={text}
        apiKey={apiKey}
        voiceSettings={voiceSettings}
      />
    </div>
  );
}

export default App;

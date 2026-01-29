import { useState } from "react";
import axios from "axios";

export default function GeneratorBox() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const generateCopy = async () => {
    const res = await axios.post("http://localhost:5000/api/copy/generate", {
      prompt
    });

    setResult(res.data.result);
  };

  return (
    <div className="box">
      <h3>Enter Your Idea</h3>

      <textarea
        placeholder="Write product idea..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={generateCopy}>Generate Copy</button>

      {result && (
        <div className="result">
          <h4>Generated Copy:</h4>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

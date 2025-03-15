import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  function handleClick(value) {
    setInput((prev) => prev + value);
  }

  function clearInput() {
    setInput("");
  }

  function calculateResult() {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-gray-200 p-6 rounded-[20px] shadow-inner shadow-gray-300 w-80 neumorphism">
        {/* Display */}
        <div className="mb-4 text-right text-gray-800 text-3xl p-5 bg-gray-100 rounded-lg font-mono min-h-[80px] flex items-center justify-end shadow-inner">
          {input || "0"}
        </div>

        <button onClick={clearInput} className="btn bg-red-500 text-white hover:bg-red-400 mb-2 h-8 flex items-center">
            C
        </button>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {["7", "8", "9", "/"].map((char) => (
            <button key={char} onClick={() => handleClick(char)} className="btn">
              {char}
            </button>
          ))}
          {["4", "5", "6", "*"].map((char) => (
            <button key={char} onClick={() => handleClick(char)} className="btn">
              {char}
            </button>
          ))}
          {["1", "2", "3", "-"].map((char) => (
            <button key={char} onClick={() => handleClick(char)} className="btn">
              {char}
            </button>
          ))}
          {["0", ".", "+", "="].map((char) =>
            char === "=" ? (
              <button key={char} onClick={calculateResult} className="btn bg-green-500 text-white hover:bg-green-400">
                {char}
              </button>
            ) : (
              <button key={char} onClick={() => handleClick(char)} className="btn">
                {char}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Calculator;

import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const title = "PomodoroFocus";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Suivre la souris
  useEffect(() => {
    const move = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="h-screen w-screen relative cursor-none">
      {/* Curseur rond */}
      <div
        style={{
          left: mousePos.x - 10,
          top: mousePos.y - 10,
        }}
        className="fixed w-5 h-5 bg-blue-500 rounded-full pointer-events-none z-50"
      ></div>

      <div className="cursor-pointer mr-[650px] mt-[300px]">
        <Animate title={title} />
        <div className="flex justify-center mt-10">
          <button className="py-4 px-10 bg-red-400 text-white rounded-md hover:bg-red-500 transition-colors">
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
}

function Animate({ title }) {
  return (
    <div className="flex justify-center mt-20 mb-[100px]">
      <h1 className="text-[70px] font-bold cursor-pointer">
        {title.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block transition-transform duration-300 hover:-translate-y-3 hover:scale-125"
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default App;

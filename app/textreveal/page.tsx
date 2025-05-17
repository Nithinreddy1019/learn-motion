"use client"

const Page = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <TextReveal />
        </div>
    );
}
 
export default Page;

// -------------------------------------------------------------------- //
import "./styles.css";
import { useState } from "react";

export function TextReveal() {
  const [reset, setReset] = useState(0);

  const WORD = "Animations"

  return (
    <div>
      <div key={reset}>
        <h1 className="h1">
          {WORD.split("").map((char, index) => (
            // @ts-ignore
            <span
              key={index}
              style={{"--index" : index} as React.CSSProperties}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
      {/* Use this button to replay your animation */}
      <button className="button" onClick={() => setReset(reset + 1)}>
        Replay animation
      </button>
    </div>
  );
}
"use client"

const StateButtonPage = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <SmoothButton />
        </div>
    );
}
 
export default StateButtonPage;



// -----------------------------------------------------------------------------------




import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Spinner } from "./spinner";
import "./styles.css";

const buttonCopy = {
  idle: "Send me a login link",
  loading: <Spinner size={16} color="rgba(255, 255, 255, 0.65)" />,
  success: "Login link sent!",
};

export function SmoothButton() {
  const [buttonState, setButtonState] = useState("idle");

  return (
    <div className="outer-wrapper">
      <button
        className="blue-button"
        disabled={buttonState !== "idle"}
        onClick={() => {
          // This code is just a placeholder
          setButtonState("loading");

          setTimeout(() => {
            setButtonState("success");
          }, 1750);

          setTimeout(() => {
            setButtonState("idle");
          }, 3500);
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
                initial={{
                    opacity: 0,
                    y: -25
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                exit={{
                    opacity: 0,
                    y: 25
                }}
                transition={{
                    type: "spring",
                    duration: 0.2,
                    bounce: 0.5
                }}
                key={buttonState}
            >
                {buttonCopy[buttonState as keyof typeof buttonCopy]}
            </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
"use client"

const Page = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <Toaster />
        </div>
    );
}
 
export default Page;

// -------------------------------------------------------------------- //

import "./styles.css";
import { useEffect, useState } from "react";

export function Toaster() {
  const [toasts, setToasts] = useState(0);
  

  return (
    <div className="wrapper">
      <div className="toaster">
        {Array.from({ length: toasts }).map((_, i) => (
          <Toast key={i} index={toasts - i - 1}/>
        ))}
      </div>
      <button
        className="button"
        onClick={() => {
          setToasts(toasts + 1);
        }}
      >
        Add toast
      </button>
    </div>
  );
}

function Toast({index} : { index : number}) {
  const [mounted, setMounted] = useState(false);
 
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    // @ts-ignore
    <div className="toast" style={{ "--index" : index}} data-mounted={mounted}>
      <span className="title">Event {index} Created👌 </span>
      <span className="description">Friday, May 16rd at 2:30pm</span>
    </div>
  );
}
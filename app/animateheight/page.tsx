"use client"

const Page = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <Example />
        </div>
    );
}
 
export default Page;



// -----------------------------------------------------------------------------------


import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import useMeasure from 'react-use-measure'
import "./styles.css"

export function Example() {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [elementRef, bounds] = useMeasure();

  return (
    <div className="wrapper">
      <button className="button" onClick={() => setShowExtraContent((b) => !b)}>
        Toggle height
      </button>
      <motion.div className="element" animate={{height: bounds.height}}>
        <div className="inner" ref={elementRef}>
          <h1>Fake Family Drawer</h1>
          <p>
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>
          {showExtraContent ? (
            <p>This extra content will change the height of the drawer. Some even more content to make the drawer taller and taller and taller...</p>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}
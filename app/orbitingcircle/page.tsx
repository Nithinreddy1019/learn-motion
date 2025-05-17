"use client"

const Page = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <Orbit />
        </div>
    );
}
 
export default Page;

// -------------------------------------------------------------------- //
import "./styles.css";

export function Orbit() {
  return (
    <div className="wrapper">
      <div className="circle" />
      <div className="orbitingCircle" />
    </div>
  );
}
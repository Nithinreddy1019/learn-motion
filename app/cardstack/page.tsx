const Page = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <StackedComponent />
        </div>
    );
}
 
export default Page;



import "./styles.css";

const LENGTH = 3;

export function StackedComponent() {
  return (
    <div className="wrapper">
      {new Array(LENGTH).fill(0).map((_, i) => (
        // @ts-ignore
        <div className="card" key={i} style={{"--index": LENGTH - 1 - i}}/>
      ))}
    </div>
  );
}
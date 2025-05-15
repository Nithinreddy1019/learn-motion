const Page = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <SimpleTransformTransition />
        </div>
    );
}
 
export default Page;



import "./styles.css";

export function SimpleTransformTransition() {
  return (
    <div className="box">
      <div className="box-inner"/>
    </div>
  );
}
import CompD from "./CompD";

function CompC() {
  return (
    <>
      <div className="box">
        <h1>ComponenetC</h1>
        {/* <CompD user={props.user}/> //using props */}
        <CompD />
      </div>
    </>
  );
}
export default CompC;

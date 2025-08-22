import PropTypes from 'prop-types'



function Student  (props)  {
  const styles = {
    border: "1px solid black ",
    margin: "0px",
    padding: "10px",
};
const stylesP = {
    margin: "0px",
    padding: "0px",
};


  return (
    <>
      <div style={styles}>
        <p style={stylesP} >Name: {props.name} </p>
        <p style={stylesP}> Age: {props.age}</p>
        <p style={stylesP}> isStudent: {props.isStudent ? "Yes" : "No"}</p>
      </div>
    </>
  );
};

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool 
}

export default Student;

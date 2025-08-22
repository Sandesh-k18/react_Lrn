function Footer() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };
  return (
    <>
      <div style = {styles}>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </>
  );
}
export default Footer;

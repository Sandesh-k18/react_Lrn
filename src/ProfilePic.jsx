function ProfilePic() {
  const imgUrl = "./src/assets/react.svg";
  const handleClick = (e) => {
    e.target.style.display = "none";
  };

  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    marginTop: "20px",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <>
      <img
        style={styles}
        onDoubleClick={(e) => handleClick(e)}
        src={imgUrl}
        alt="ProfilePic"
      />
    </>
  );
}

export default ProfilePic;

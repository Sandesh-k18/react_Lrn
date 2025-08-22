import styles from './userGreeting.module.css'



function UserGreeting(props) {
  if (props.isLoggedIn) {
    return (
      <>
        <div className={styles.welcomeMsg}>
          <h1 >Welcome {props.username} </h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={styles.logInPrompt}>
        <h1>Please Log In</h1>
      </div>
    </>
  );
}

export default UserGreeting;

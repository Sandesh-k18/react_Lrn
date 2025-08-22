import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Student from './student.jsx'
import UserGreeting from './UserGreeting/userGreeting.jsx'
import List from './List.jsx'

function App() {

  return (
    <>
      <Header />
      <Student name="Sandesh" age = {18} isStudent={true} />
      <UserGreeting isLoggedIn = {true} username = "@Sandyy Bhai" />
      <UserGreeting isLoggedIn = {false}/>
      <List/>
      <Footer />
    </>
  );
}

export default App;

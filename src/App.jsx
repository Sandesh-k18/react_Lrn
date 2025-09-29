import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Student from './student.jsx'
import UserGreeting from './UserGreeting/userGreeting.jsx'
import List from './List.jsx'
import Button from "./Button/Button.jsx"
import ProfilePic from "./ProfilePic.jsx";
import Hooks from "./useState/Hooks.jsx"
import OnChnge from "./onChngeEvent/onChnge.jsx";
import ColorPicker from "./ColorPicker.jsx"

function App() {

    const fruits = [
    { name: "apple", calories: 109 },
    { name: "mango", calories: 200 },
    { name: "banana", calories: 67 },
    { name: "pear", calories: 45 },
    { name: "syau", calories: 148 },
  ];

  return (
    <>
      <Header />
      <ColorPicker />
      <Student name="Sandesh" age = {18} isStudent={true} />
      <ProfilePic></ProfilePic>
      <UserGreeting isLoggedIn = {true} username = "@Sandyy Bhai" />
      <UserGreeting isLoggedIn = {false}/>
      <List items = {fruits} category= "fruits"/>
      <Button />
      <Hooks></Hooks>
      <OnChnge></OnChnge>
      <Footer />
    </>
  );
}

export default App;

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
import UpdterFun from "./updaterFuncn.jsx";
import UpObjSt from "./updObjStte/updObjSt.jsx";
import UpRrySt from "./updRryStte/updRrySt.jsx";
import UpRryoObjs from "./upRryoObjs/UpRryoObjs.jsx";
import ToDoList from "./toDoList/toDoList.jsx"

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
      <ToDoList/>
      <List items = {fruits} category= "fruits"/>
      <Button />
      <Hooks></Hooks>
      <OnChnge></OnChnge>
      <UpdterFun />
      <UpObjSt/>
      <UpRrySt/>
      <UpRryoObjs/>
      <Footer />
    </>
  );
}

export default App;

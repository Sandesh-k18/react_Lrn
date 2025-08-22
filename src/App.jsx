import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Student from './student.jsx'

function App() {

  return (
    <>
      <Header />
      <Student name="Sandesh" age = {18} isStudent={true} />
      <Student name="Sandesh" age = {18} isStudent={true} />
      <Student name="Sandesh" age = {18} isStudent={true} />
      <Student name="Sandesh" age = {18} isStudent={true} />
      <Student name="Sandesh" age = {18} isStudent={true} />
      <Student name="Sandesh" age = {18} isStudent ={false} />
      <Student name="Sandesh" age  isStudent={true} />
      <Student name age = "abc" isStudent={true} />
      <Student/>
      <Footer />
    </>
  );
}

export default App;

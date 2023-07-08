import "./App.css";
import Navbar from "./components/Navbar";
import Subjects from "./components/Subjects";
import Subtopics from "./components/Subtopics";


function App() {
  return (
    <>
      <Navbar />
      <Subjects />
      <Subtopics title="English"/>
    </>
  );
}

export default App;

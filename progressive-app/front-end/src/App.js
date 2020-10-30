import "./App.css";
import JobBoard from "./components/JobBoard";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <JobBoard />
    </div>
  );
}

export default App;

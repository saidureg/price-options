import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DaisyNavbar from "./components/daisyNavbar/DaisyNavbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <DaisyNavbar></DaisyNavbar>
      <h1 className="text-3xl bg-rose-700">Price Option</h1>
    </>
  );
}

export default App;

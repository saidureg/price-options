import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/priceOptions/PriceOptions";
// import DaisyNavbar from "./components/daisyNavbar/DaisyNavbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNavbar></DaisyNavbar> */}
      <h1 className="text-3xl bg-rose-700">Price Option</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;

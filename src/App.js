import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Box from "./components/Box1/Box";
import Features from "./components/Features/Features";
import Plan from "./components/Plan/Plan";
import Global from "./components/Global/Global";
import Brands from "./components/Brands/Brands";
import Customers from "./components/Customers/Customers";
import Box2 from "./components/Box1/Box2";

function App() {
  return (
    <>
      <Navbar />
      <div className="body">
      <Header/>
      <Box/>
      <Features/>
      <Plan/>
      <Global/>
      <Brands/>
      <Customers/>
      <Box2/></div>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Candies from "./Candies.jsx";
import CandyList from "./components/CandyList.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import PopularList from "./components/PopularList.jsx";
import NowPlay from "./components/NowPlay.jsx";

function App() {
  return (
    <>
      <header>
        <h1>What2Watch Tonight!</h1>
        <p>Choose from the menu below the category you want to look up.</p>
      </header>

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<PopularList />} />
          <Route path="/nowplay" element={<NowPlay />} />
          <Route path="/candy" element={<CandyList />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;

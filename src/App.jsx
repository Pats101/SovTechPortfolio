import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Hobbies from "./components/hobbies/Hobbies";
import Gallery from "./components/gallery/Gallery";
import Topbar from "./components/topbar/Topbar";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar openMenu={menuOpen} setOpenMenu = {setMenuOpen}></Topbar>
      <Menu openMenu={menuOpen} setOpenMenu = {setMenuOpen}/>
      <div className="sections">
        <Intro></Intro>
        <Hobbies></Hobbies>
        <Gallery></Gallery>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;

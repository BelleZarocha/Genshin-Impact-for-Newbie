import "./App.css";
import Nav from "../Navbar/Nav";
import { Route, Routes } from "react-router-dom";
// import pages
import Home from "../Home/Home";
import CharacterList from "../Characterslist/CharacterList";
import WeaponList from "../WeaponList/WeaponList";
import ArtifactList from "../ArtifactList/ArtifactList";
import EnemyList from "../EnermyList/EnemyList";

function App() {

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/CharacterList" element={<CharacterList/>} />
        <Route path="/WeaponList" element={<WeaponList />} />
        <Route path="/ArtifactList" element={<ArtifactList />} />
        <Route path="/EnemyList" element={<EnemyList />} />
      </Routes>
      {/* <CharacterList /> */}
    </>
  );
}

export default App;

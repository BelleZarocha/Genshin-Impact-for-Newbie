import "./App.css";
import Nav from "../Navbar/Nav";
import { Route, Routes, useParams } from "react-router-dom";

// import pages
import Home from "../Home/Home";
import CharacterList from "../Characterslist/CharacterList";
import WeaponList from "../WeaponList/WeaponList";
import ArtifactList from "../ArtifactList/ArtifactList";
import EnemyList from "../EnermyList/EnemyList";
import CharacterDetail from "../Character/CharacterDetail";
import EnemyDetail from "../EnermyList/EnemyDetail"
import WeaponDetail from "../WeaponList/WeaponDetail";
import ArtifactDetail from "../ArtifactList/ArtifactDetail"

function App() {

  return (
    <div >      
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/CharacterList" element={<CharacterList/>} />
          <Route path="/CharacterList/:id" element={<CharacterDetail/>} />
        <Route path="/WeaponList" element={<WeaponList />} />
          <Route path="/WeaponList/:id" element={<WeaponDetail />} />
        <Route path="/ArtifactList" element={<ArtifactList />} />
          <Route path="/ArtifactList/:id" element={<ArtifactDetail />} />
        <Route path="/EnemyList" element={<EnemyList />} />
          <Route path="/EnemyList/:id" element={<EnemyDetail />} />
      </Routes>
    </div>
  );
}

export default App;

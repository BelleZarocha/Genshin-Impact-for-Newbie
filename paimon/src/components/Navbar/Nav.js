import React, { useState } from 'react';
import { NavBar, NavLogo, NavMenu, NavList, NavLink , Bars} from './NavBar-Style';
import PAIMON from '../../PAIMON.gif';

function Nav() {

  const [showToggle, setShowToggle] = useState(false);

  return (
    // Use React Fragment
    <> 
      {/* Use components from NavBar-Style */}
      <NavBar showToggle={showToggle}>

        <Bars onClick={() => setShowToggle(!showToggle)}/>
      
        <NavLogo to="/">
            PAIMON
            <img src={PAIMON} style={{height:"70px"}}/>
        </NavLogo>

        <NavMenu showToggle={showToggle}>
            <NavList>
                <NavLink to="/CharacterList">CHARACTERS</NavLink>
            </NavList>
            <NavList>
                <NavLink to="/WeaponList">WEAPONS</NavLink>
            </NavList>
            <NavList>
                <NavLink to="/ArtifactList">ARTIFACTS</NavLink>
            </NavList>
            <NavList>
                <NavLink to="/EnemyList">ENEMIES</NavLink>
            </NavList>
        </NavMenu>
      </NavBar>
    </>
  )
}

export default Nav


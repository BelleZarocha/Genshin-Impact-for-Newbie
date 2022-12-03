import React, { Fragment } from 'react';
import { NavBar, NavLogo, NavMenu, NavList, NavLink } from './NavBar-Style';
import PAIMON from '../../PAIMON.gif';

function Nav() {
  return (
    // React Fragment
    <> 
      {/* Use components from NavBar-Style */}
      <NavBar>
        <NavLogo to="/">
            PAIMON
            <img src={PAIMON} style={{height:"70px"}}/>
        </NavLogo>

        <NavMenu>
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


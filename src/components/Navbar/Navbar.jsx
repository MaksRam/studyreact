import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

//let s = {
//'nav': 'Navbar_nav_3rtgdh';
//'item': 'Navbar_item_dfgr5rs';
//'active': 'Navbar_active_fdsfghdf';
//}

// let c1 = "item";
// let c2 = "active";
// let classes = c1 + " " + c2;
// let classesNew = `${s.item} ${s.active}`;


const Navbar = () => {
    return (
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to='/profile' className={(navData) => navData.isActive ? s.activeLink : ''}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs' className={(navData) => navData.isActive ? s.activeLink : ''}>Dialogs</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' className={(navData) => navData.isActive ? s.activeLink : ''}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music' className={(navData) => navData.isActive ? s.activeLink : ''}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' className={(navData) => navData.isActive ? s.activeLink : ''}>Settings</NavLink>
        </div>
      </nav>
    )
  }

export default Navbar;
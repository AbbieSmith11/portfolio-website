import { useState, useEffect } from 'react';
import './Navbar.css';
import NavItem from './nav-items/NavItem';

function Navbar (){

 return (

<nav>
<ul>
    <NavItem label='Home' c='nav-link active'to='/'/>
    <NavItem label='About' c='nav-link' to='/about' />
    <NavItem label='Projects' c='nav-link' to='/projects' />
    <NavItem label='Contact' c='nav-link' to='/contact'/>
</ul>
</nav>

)   

}


export default Navbar
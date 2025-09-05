import { useState, useEffect } from 'react';
import './Navbar.css';
import NavItem from './nav-items/NavItem';

function Navbar (){

 return (

<nav>
<ul>
    <NavItem item='Home' route='/'/>
    <NavItem item='About' route='/about' />
    <NavItem item='Projects' route='/projects' />
    <NavItem item='Contact' route='/contact'/>
</ul>
</nav>

)   

}


export default Navbar
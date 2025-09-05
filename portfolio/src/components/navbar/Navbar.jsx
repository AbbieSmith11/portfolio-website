import { useState, useEffect } from 'react';
import './Navbar.css';
import NavItem from './nav-items/NavItem';

function Navbar (){

 return (

<nav>
<ul>
    <NavItem item='Home'/>
    <NavItem item='About'/>
    <NavItem item='Projects'/>
    <NavItem item='Contact'/>
</ul>
</nav>

)   

}


export default Navbar
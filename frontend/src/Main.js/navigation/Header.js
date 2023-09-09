import React, { useState } from 'react'
import './nav.css';

import Marquee from './Marquee';
import Nav1 from './Nav1';
import Nav2 from './Nav2';


export default function Header() {
  
  return (
    <div>
    <Marquee/>

    <Nav1/>
    <Nav2/>
     
  
    </div>
  )
}

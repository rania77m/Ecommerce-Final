import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.css';
import {Outlet} from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

    export default function Layout() {
   return (
     <div>
       


       <NavBar/>
<div className="container">

<Outlet></Outlet>
</div>

       <Footer/>

     </div>
   )
 }
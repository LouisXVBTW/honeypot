import React, { Fragment, useRef, useLayoutEffect, useState} from 'react';
import {Navb} from './imports'
import { Container, Row, Col , Navbar, Nav, Button, Card, Alert, blockquote} from 'react-bootstrap';
import Map from '../charts/pewpewv2';
import 'bootstrap/dist/css/bootstrap.min.css';

 
function Pew(){
  
    return(
        <Fragment>
        <Navb/>
        <Map/>
        <div>
            <h1>hi</h1>
        </div>
        </Fragment>
        
            
        
    )
}
export default Pew;
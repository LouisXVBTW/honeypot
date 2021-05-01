import React, { Fragment, useRef, useLayoutEffect, useState} from 'react';
import {Navb} from './imports'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css"
import CVE, {Tags, Ports, CommonCVE} from '../charts/shodan';




export default class Shodans extends React.Component{
    render() {
        return (
            <Fragment>
        <Navb/>
        <h1> Shodan Data </h1>
        <div class='grid'>
            <CVE/>
            <CommonCVE/>
            <Tags/>
            <Ports/>
            
                
        </div>
        </Fragment>
        );
    }
}

import React, { Fragment, useRef, useLayoutEffect, useState} from 'react';
import {Navb} from './imports'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css"
import Usernames, { Passwords, MalCode1, MalCode2, MalCode3, MalCode4, MalCode5, MalCode6 } from '../charts/creds';




export default class Credits extends React.Component{
    render() {
        return (
            <Fragment>
        <Navb/>
        <h1 > SSH Loging Data </h1>
        <div class='grid'>
            <Usernames/>
            <Passwords/>
            <h1 class="long"> SSH Malicious Activity </h1>
            <div class="this code-grid">
            <div className="left">
                <MalCode1/>
                <MalCode3/>
                <MalCode5/>
                <MalCode6/>
            </div>
            <div className="right">
                <MalCode2/>
                <MalCode4/>
            </div>
            </div>

            
                
        </div>
        </Fragment>
        );
    }
}

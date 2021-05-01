import React, { Fragment, useRef, useLayoutEffect, useState} from 'react';
import {Navb} from './imports'
import { Container, Row, Col , Navbar, Nav, Button, Card, Alert, blockquote} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactTooltip from "react-tooltip";
import CityPieAll, {CityBarAll} from "../charts/cities";
import "./main.css"
import CountryPieAll, { CountryBarAll } from '../charts/countries';
import IPSpieALL, { ISPbarALL } from '../charts/isps';
import ConnectionsPieAll, {ConnectionsBarAll} from '../charts/totalConnections';
import IPpie, { IPbar } from '../charts/topIPS';
import TimeLine from '../charts/times';




export default class Main extends React.Component{
    render() {
        return (
            <Fragment>
        <Navb/>
        <h1> Geo-Location data </h1>
        <div class='grid'>
          

            <CityPieAll/>
            
            <CityBarAll/>
            <CountryPieAll/>
            <CountryBarAll/>
            <ConnectionsPieAll/>
            <ConnectionsBarAll/>
            <div class="long">
            <ISPbarALL/>
            </div>
            
            <IPpie/>
            <IPbar/>
            <div class="long">
            <TimeLine/>
            </div>
            
            
        </div>
        
        </Fragment>
        );
    }
}

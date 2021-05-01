import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  Graticule
} from "react-simple-maps";
import {markers, NYClines, testLines} from './data';
import {allLines} from './test';
const geoUrl =
"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";



const MapChart = () => {
  return (
    <ComposableMap
      
    >
      <Graticule stroke="#DDD" />
      <Geographies
        geography={geoUrl}
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
        
      >
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} 
            
            style={{
            default: {
              fill: "#D6D6DA",
              outline: "none"
            },
            hover: {
              fill: "#4DEF19",
              outline: "none"
            },
            pressed: {
              fill: "green",
              outline: "none"
            }
          }}/>)
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
        <circle r={3} fill="#F00" stroke="#fff" strokeWidth={0.5} />
        <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
      </Marker>
      ))}
      {allLines.map(({from, to, stroke, strokeWidth, strokeLinecap}) => (
          <Line from={from} to={to} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap}></Line>
      ))}
    </ComposableMap>
  );
};

export default MapChart;

export const markers = [
    { markerOffset: 15, name: "New York", coordinates: [-74.012084, 40.8042674] },
    { markerOffset: 15, name: "London", coordinates: [-0.1277583, 51.5073509] },
    { markerOffset: 15, name: "Singapore", coordinates: [103.8677444, 1.3553794] },
   
  ];



export const NYClines = [
    {from:[2.3522, 48.8566],to:[-74.006, 40.7128], stroke:"#FF5533", strokeWidth:2, strokeLinecap:"round"}
]
export const testLines = [
    {from:[-0.2059709,51.4576339],to:[-74.012084,40.8042674], stroke:'#FF5533', strokeWidth:2, strokeLinecap:'round'},
    {from:[51.3889736,35.6891975],to:[-74.012084,40.8042674], stroke:'#FF5533', strokeWidth:2, strokeLinecap:'round'}
    ]


export default {markers, NYClines, testLines};
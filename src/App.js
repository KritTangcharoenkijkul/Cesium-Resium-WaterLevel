// import React from 'react';
// import { Color } from "cesium";
// import { Viewer, Entity } from "resium";
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;





// import React from "react";
// import { Cartesian3 } from "cesium";
// import { Viewer, Entity } from "resium";
// import {Color} from "cesium";



// export default class Cesium extends React.PureComponent {



//   render() {

//     return (

      
//       <Viewer full>

//           url : 'http://localhost/cgi-bin/WMS',
//           layers: 'villages'

// 　　    <Entity
//  　　       name="ฺBangkok"
//             description="testing"
//             position={Cartesian3.fromDegrees(101.794352, 14.750667, 100)}
//             point={{ pixelSize: 10 }}>
//             <h1>Hello, world.</h1>
//             <p>This is description rendered as HTML string.</p>
//         </Entity>

//         <Entity
//  　　       name="KMITL Water Sensor Node"
//             description="This is KMITL water sensor node from Beam"
//             position={Cartesian3.fromDegrees(100.794352, 13.750667, 100)}
//             point={{ pixelSize: 10,  color: Color.YELLOW}}>
//             <h1>Hello, this is sensor from Beam.</h1>
//             <p>This is description of the node.</p>
//         </Entity>
        

//       </Viewer>
//     );
//   }

// }


// import React from "react";
// import { Viewer, Entity, PointGraphics, EntityDescription } from "resium";
// import { Cartesian3 } from "cesium";
// import { Cesium } from "cesium";

// const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);

// const App = () => (
//   <Viewer full>
//     <Entity position={position} name="Tokyo">
//       <PointGraphics pixelSize={10} />
//       <EntityDescription>
//         <h1>Hello, world.</h1>
//         <p>JSX is available here!</p>
//       </EntityDescription>
//     </Entity>
//   </Viewer>
// );
// export default App;


// import React from "react";
// import { Viewer, Cesium3DTileset } from "resium";
// import { IonResource } from "cesium";
// const App = () => {
//   let viewer; // This will be raw Cesium's Viewer object.
//   const handleReady = tileset => {
//     if (viewer) {
//       viewer.zoomTo(tileset);
//     }
//   };
//   return (
//     <Viewer
//       full
//       ref={e => {
//         viewer = e && e.cesiumElement;
//       }}>
//       <Cesium3DTileset url={IonResource.fromAssetId(5714)} onReady={handleReady} />
//     </Viewer>
//   );
// };

// import React, { useState } from "react";
// import { storiesOf } from "@storybook/react";
// import { Color } from "cesium";
// import { action } from "@storybook/addon-actions";

// import Viewer from "../Viewer";
// import GeoJsonDataSource from "./GeoJsonDataSource";

// const data = {
//   type: "Feature",
//   properties: {
//     name: "Coors Field",
//     amenity: "Baseball Stadium",
//     popupContent: "This is where the Rockies play!",
//   },
//   geometry: {
//     type: "Point",
//     coordinates: [-104.99404, 39.75621],
//   },
// };

// const onLoadAction = action("onLoad");

// storiesOf("GeoJsonDataSource", module)
//   .add("Basic", () => (
//     <Viewer full>
//       <GeoJsonDataSource
//         data={data}
//         markerColor={Color.RED}
//         onLoad={g => {
//           // You can process the data source here
//           g.entities.values[0].name = "Coors Field!";
//           onLoadAction(g);
//         }}
//         onError={action("onError")}
//       />
//     </Viewer>
//   ))
//   .add("Show", () => {
//     const [show, setShow] = useState(true);
//     return (
//       <Viewer full>
//         <button
//           style={{ position: "absolute", top: "0", left: "0" }}
//           onClick={() => setShow(s => !s)}>
//           Toggle
//         </button>
//         <GeoJsonDataSource data={data} markerColor={Color.RED} show={show} />
//       </Viewer>
//     );
//   });




// const onLoadAction = action("onLoad");

// const onLoad = (k: Cesium.KmlDataSource) => {
//   // You can process the data source here
//   k.entities.values[4].polygon.material = Color.RED;
//   onLoadAction(k);
// };

// storiesOf("KmlDataSource", module)
//   .add("Basic", () => (
//     <Viewer full>
//       <KmlDataSource data={data} onLoad={onLoad} onError={action("onError")} />
//     </Viewer>
//   ))
//   .add("Show", () => {
//     const [show, setShow] = useState(true);
//     return (
//       <Viewer full>
//         <button
//           style={{ position: "absolute", top: "0", left: "0" }}
//           onClick={() => setShow(s => !s)}>
//           Toggle
//         </button>
//         <KmlDataSource data={data} show={show} />
//       </Viewer>
//     );
//   });
import React from "react";
import { Viewer,GeoJsonDataSource, KmlDataSource,  ImageryLayer } from "resium";
import {  ArcGisMapServerImageryProvider, WebMapServiceImageryProvider, IonImageryProvider, Cesium } from "cesium";

const data = {
  type: "Feature",
  properties: {
    name: "Bangkok",
    amenity: "KMITL University",
    WaterLevel: "5.8 cm",
    WaterQuality: "50 %",
    Date_Time: "23 April 2020 18:00", 
    popupContent: "This is where Beam Sensor is!",
  },
  geometry: {
    type: "Point",
    coordinates: [101.794352, 14.750667],
    fill: "Cesium.Color.RED",
  },
};

const data2 = {
  type: "Feature",
  properties: {
    name: "KMITL",
    amenity: "Thai Sensor",
    WaterLevel: "7.8 cm",
    WaterQuality: "60 %",
    Date_Time: "23 April 2020 18:00", 
    popupContent: "This is another sensor!",
  },
  geometry: {
    type: "Point",
    coordinates: [100.794352, 15.750667],
  },
};


const App = () => (
  <Viewer full>

    <GeoJsonDataSource data={"your_geo_json.geojson"} />
    <KmlDataSource url={"C:/Users/user/Desktop/craco-cesium-master/example/krit_test-tha_admbnda_adm1_rtsd_20190221.kml"} />
    <GeoJsonDataSource data={data} />
    <GeoJsonDataSource data={data2} />

    <ImageryLayer
      imageryProvider={
        new ArcGisMapServerImageryProvider({
          url: "//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
        }),

        new WebMapServiceImageryProvider({
          url : 'http://localhost:8080/geoserver/krit_test/wms?service=WMS&version=1.1.0&request=GetMap&layers=krit_test%3AKritTest&bbox=-180.0%2C-89.99892578%2C180.0%2C83.59960938&width=768&height=370&srs=EPSG%3A4326&format=application/openlayers',
          layers : '0',
        })
      }
    />
    <ImageryLayer alpha={0.5} imageryProvider={new IonImageryProvider({ assetId: 3812 })} />

    
    

  </Viewer>
);

export default App;
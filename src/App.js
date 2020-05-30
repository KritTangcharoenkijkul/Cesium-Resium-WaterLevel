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




import React  from "react";
import { Viewer,GeoJsonDataSource, KmlDataSource,  ImageryLayer, addToolbarMenu, Model, CameraFlyTo } from "resium";
import {  ArcGisMapServerImageryProvider, WebMapServiceImageryProvider, IonImageryProvider, Color, Button, Cesium,action, Cartesian3, Transforms } from "cesium";
import glbs from "C:/Users/user/Desktop/craco-cesium-master/example/src/truesensor2.gltf";


// const position1 = {
//   type: "Feature",
//   properties: {
//     Sensor: "1",
//     Water_Level: "0",
//     Location: "LADKRABANG",
//     Longitude: "100.7783",
//     Latitude: "13.7628",
//     Date_Time: "29/05/2020 13:42:09",
//   },

//   geometry: {
//     type: "Point",
//     coordinates: [100.7783, 13.7628],
//   },
// };

// const position2 = {
//   type: "Feature",
//   properties: {
//     Sensor: "2",
//     Water_Level: "87",
//     Location: "BANGKAPI",
//     Longitude: "100.6456",
//     Latitude: "13.7628",
//     Date_Time: "29/05/2020 13:42:21", 
//   },
//   geometry: {
//     type: "Point",
//     coordinates: [100.6456, 13.7628],
//   },
// };

// const position3 = {
//   type: "Feature",
//   properties: {
//     Sensor: "3",
//     Water_Level: "24",
//     Location: "LADPRAO",
//     Longitude: "100.6087",
//     Latitude: "13.8242",
//     Date_Time: "29/05/2020 13:41:16", 
//   },
//   geometry: {
//     type: "Point",
//     coordinates: [100.6087, 13.8242],
//   },
// };

const origin = Cartesian3.fromDegrees(100.7783, 13.7628, 0.0);
const cameraDest = Cartesian3.fromDegrees(100.6456, 13.7628, 10);
const cameraDest3 = Cartesian3.fromDegrees(100.6087, 13.8242, 10);
const modelMatrix = Transforms.eastNorthUpToFixedFrame(origin);
const modelMatrix2 = Transforms.eastNorthUpToFixedFrame(cameraDest);
const modelMatrix3 = Transforms.eastNorthUpToFixedFrame(cameraDest3);




const App = () => (
  <addToolbarMenu>

    
  
  {/* <Viewer imageryProvider={false}> */}

  <Viewer>

    {/* <CameraFlyTo destination={cameraDest} duration={0} /> */}
    <Model url={glbs}
    modelMatrix={modelMatrix}
    minimumPixelSize={128}
    maximumScale={20000}
     />

    <Model url={glbs}
    modelMatrix={modelMatrix2}
    minimumPixelSize={128}
    maximumScale={20000}
     />

    <Model url={glbs}
    modelMatrix={modelMatrix3}
    minimumPixelSize={128}
    maximumScale={20000}
     />

    <ImageryLayer
      imageryProvider={  

        new WebMapServiceImageryProvider({
          url : 'http://localhost:8080/geoserver/wms',
          layers : 'WaterLevelSystem:data_logger_model_new',
          proxy : 'http://localhost:8080/geoserver/ows',
          style: "default",
          tileMatrixSetID: "250m",
          maximumLevel: 5,
          getFeatureInfoAsGeoJson: true,
          parameters: {
            transparent : true,
            tiled : true,
            format : 'image/png'
          },
        })
      }
    />

    <GeoJsonDataSource data={"your_geo_json.geojson"} />
    
{/*     
    <KmlDataSource url={"C:/Users/user/Desktop/craco-cesium-master/example/src/data_logger_model_new.kml"} /> */}
    {/* <GeoJsonDataSource data={position1} markerColor={Color.YELLOW}/>
    <GeoJsonDataSource data={position2} markerColor={Color.YELLOW}/>
    <GeoJsonDataSource data={position3} markerColor={Color.YELLOW}/> */}

  </Viewer>

  </addToolbarMenu>
);


export default App;









// import React  from "react";
// import { Viewer,GeoJsonDataSource, KmlDataSource,  ImageryLayer, addToolbarMenu, Model, CameraFlyTo } from "resium";
// import {  ArcGisMapServerImageryProvider, WebMapServiceImageryProvider, IonImageryProvider, Color, Button, Cesium,action, Cartesian3, Transforms } from "cesium";
// import glbs from "C:/Users/user/Desktop/craco-cesium-master/example/src/truesensor2.gltf";

// const App = () => (
//   <Viewer>
// <ImageryLayer
//       imageryProvider={  

//         new WebMapServiceImageryProvider({
//           url: 'http://localhost:8080/geoserver/wms',
//           layers : 'WaterLevelSystem:data_logger_model_new',
//           maximumLevel: 5,
//           getFeatureInfoAsGeoJson: true,
//           parameters: {
//             transparent: true,
//             format : 'image/png'
//           },
//         })
//       }
//     />

//   </Viewer>
//   );


//   export default App;
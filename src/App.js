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

// import React, { useState }  from "react";
// import { Viewer,  ImageryLayer, addToolbarMenu, Model, CameraFlyTo, ImageryLayerCollection } from "resium";
// import {  WebMapServiceImageryProvider, Camera, Color, button, Cesium, Cartesian3, Transforms, ImageryProviderViewModel, ProviderViewModel } from "cesium";
// import glbs from "C:/Users/user/Desktop/craco-cesium-master/example/src/truesensor2.gltf";


// // Model
// const origin = Cartesian3.fromDegrees(100.7783, 13.7628, 50);
// const cameraDest = Cartesian3.fromDegrees(100.6456, 13.7628, 50);
// const cameraDest3 = Cartesian3.fromDegrees(100.6087, 13.8242, 50);
// const modelMatrix = Transforms.eastNorthUpToFixedFrame(origin);
// const modelMatrix2 = Transforms.eastNorthUpToFixedFrame(cameraDest);
// const modelMatrix3 = Transforms.eastNorthUpToFixedFrame(cameraDest3);
// const cameraseen = Cartesian3.fromDegrees(100.7783, 13.7628);


// // Camera

// const App = () => (

//   <Viewer>


//   <addToolbarMenu>


    
  
//     <CameraFlyTo destination={cameraseen} duration={5} />


//   </addToolbarMenu>
//     <Model url={glbs}
//     modelMatrix={modelMatrix}
//     minimumPixelSize={128}
//     maximumScale={20000}
//      />

//     <Model url={glbs}
//     modelMatrix={modelMatrix2}
//     minimumPixelSize={128}
//     maximumScale={20000}
//      />

//     <Model url={glbs}
//     modelMatrix={modelMatrix3}
//     minimumPixelSize={128}
//     maximumScale={20000}
//      />

//     <ImageryLayer


//       imageryProvider={  

//         new WebMapServiceImageryProvider({
//           url : 'http://ec2-18-204-20-186.compute-1.amazonaws.com:8080/geoserver/wms',
//           layers : 'WaterLevelSystem:data_logger_model',
//           proxy : 'http://ec2-18-204-20-186.compute-1.amazonaws.com:8080/geoserver/ows',
//           style: "default",
//           tileMatrixSetID: "250m",
//           maximumLevel: 5,
//           parameters: {
//             transparent : true,
//             tiled : true,
//             format : 'image/png'
//           },
//         })
//       }

//       // ImageryProviderViewModel={
//       //   new ImageryProviderViewModel({
//       //     name : 'Water Level Sensor'
//       //   })
//       // }
//       // isBaseLayer={true}
//     />
    


//   </Viewer>

// );


// export default App;





import React from "react";
import { Viewer,  ImageryLayer, addToolbarMenu, Model, CameraFlyTo, ImageryLayerCollection } from "resium";
import {  WebMapServiceImageryProvider, Camera, Color, button, Ion, Cesium, Cartesian3, Transforms, BingMapsApi, ImageryProviderViewModel, ProviderViewModel } from "cesium";
// import glbs from "C:/Users/user/Desktop/craco-cesium-master/example/src/truesensor2.gltf";
import './App.css'

BingMapsApi.defaultKey = 'Apwuw8J82n9rnuXUcLTiiqerkws2jLzK_UWa_as9CXtLnvL9py71qGumTgmAPbde';
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwMDk2ZmI1ZC00M2M1LTQwMTktYmRiZS0xNDRhODE0YTA2ZjYiLCJpZCI6MjM5NjcsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciXSwiaWF0IjoxNTg2OTc1NDIyfQ.-nb9o-e7NJ-k5xfdXteCeZxLQ53yuMuFV9Z80PrYL88';
// Model
// const origin = Cartesian3.fromDegrees(100.7783, 13.7628, 50);
// const cameraDest = Cartesian3.fromDegrees(100.6456, 13.7628, 50);
// const cameraDest3 = Cartesian3.fromDegrees(100.6087, 13.8242, 50);
// const modelMatrix = Transforms.eastNorthUpToFixedFrame(origin);
// const modelMatrix2 = Transforms.eastNorthUpToFixedFrame(cameraDest);
// const modelMatrix3 = Transforms.eastNorthUpToFixedFrame(cameraDest3);
// const cameraseen = Cartesian3.fromDegrees(100.7783, 13.7628);


// Camera imageryProvider={false}

const App = () => (

  <Viewer>

  <addToolbarMenu>

    {/* <CameraFlyTo destination={cameraseen} duration={5} /> */}

  </addToolbarMenu>
    {/* <Model url={glbs}
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
     /> */}


    <ImageryLayer


      imageryProvider={ 

        new WebMapServiceImageryProvider({
          
          
          url : 'http://34.201.61.135:8080/geoserver/wms',
          layers : 'WaterLevelSystem:data_logger_model',
          // layers : 'WaterLevelSystem:data_logger_model',
          proxy : 'http://34.201.61.135:8080/geoserver/ows',
          style: "default",
          tileMatrixSetID: "250m",
          maximumLevel: 5,
          parameters: {
            transparent : true,
            tiled : true,
            format : 'image/png'
          },
        })
      }

      // ImageryProviderViewModel={
      //   new ImageryProviderViewModel({
      //     name : 'Water Level Sensor'
      //   })
      // }
      // isBaseLayer={true}
    />
    
    


  </Viewer>

);


export default App;




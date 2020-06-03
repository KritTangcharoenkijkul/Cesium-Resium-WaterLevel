import React, { useState }  from "react";
import { Viewer,  ImageryLayer, addToolbarMenu, Model, CameraFlyTo, ImageryLayerCollection } from "resium";
import {  WebMapServiceImageryProvider, Camera, Color, button, Cesium, Cartesian3, Transforms, ImageryProviderViewModel, ProviderViewModel } from "cesium";
import glbs from "C:/Users/user/Desktop/craco-cesium-master/example/src/truesensor2.gltf";

const origin = Cartesian3.fromDegrees(100.7783, 13.7628, 50);
const cameraDest = Cartesian3.fromDegrees(100.6456, 13.7628, 50);
const cameraDest3 = Cartesian3.fromDegrees(100.6087, 13.8242, 50);
const modelMatrix = Transforms.eastNorthUpToFixedFrame(origin);
const modelMatrix2 = Transforms.eastNorthUpToFixedFrame(cameraDest);
const modelMatrix3 = Transforms.eastNorthUpToFixedFrame(cameraDest3);
const cameraseen = Cartesian3.fromDegrees(100.7783, 13.7628);


return(
    <Viewer>


  <addToolbarMenu>


    
  
    <CameraFlyTo destination={cameraseen} duration={5} />


  </addToolbarMenu>
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
          url : 'http://ec2-18-204-20-186.compute-1.amazonaws.com:8080/geoserver/wms',
          layers : 'WaterLevelSystem:data_logger_model',
          proxy : 'http://ec2-18-204-20-186.compute-1.amazonaws.com:8080/geoserver/ows',
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

  


)

export default WaterMap
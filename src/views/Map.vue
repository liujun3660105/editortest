<template>
<div class="map">
    <div id="map">
        <Tools :selectedFeatures="selectedFeatures"></Tools>
    </div>
    
</div>
</template>

<script>
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { Vector as VectorLayer } from "ol/layer";
import VectorSource from "ol/source/Vector";
import OSM from "ol/source/OSM";
import GeoJSON from "ol/format/GeoJSON";
import { Stroke, Style, Circle as CircleStyle, Fill } from "ol/style";
import MousePosition from "ol/control/MousePosition.js";
import { defaults as defaultControls } from "ol/control.js";
import { createStringXY } from "ol/coordinate.js";
import {Select, Modify, Snap} from 'ol/interaction';
// import { pointerMove} from 'ol/events/condition';

import Tools from './Tools/Tools'
export default {
  data() {
    return {
        selectedFeatures:[]
    }
  },
  components:{
      Tools
  },
  mounted() {
    var mousePositionControl = new MousePosition({
      coordinateFormat: createStringXY(4),
      projection: "EPSG:4326"
    });
    const map = new Map({
      target: "map",
      controls: defaultControls().extend([mousePositionControl]),
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [118.7889, 32.0593],
        zoom: 10,
        projection: "EPSG:4326"
      })
    });
    const pointVectorSource = new VectorSource({
        format: new GeoJSON(),
        // url: "http://localhost:8080/geoserver/editor/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=editor%3Astation&maxFeatures=50&outputFormat=application%2Fjson"
        url:'http://localhost:8080/geoserver/editor/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=editor%3Apolygontest&maxFeatures=50&outputFormat=application%2Fjson'
    });
    const pointVectorLayer = new VectorLayer({
      source: pointVectorSource,
      projection: "EPSG:4326",
      style: new Style({
        image: new CircleStyle({
          radius: 2,
          fill: new Fill({
            color: "rgba(0,0,255,0.5)"
          }),
          stroke: new Stroke({
            color: "rgba(0,0,255,1.0)",
            width: 2
          })
        }),
        stroke:new Stroke({
            color:'red',
            width:2
        }),
        fill:new Fill({
            color: 'rgba(255,0,0,0.5)'
        })
      }
      
      )
    });

    map.addLayer(pointVectorLayer);

    // var draw = new Draw({
    //     source:pointVectorSource
    // });
    var select = new Select({
        multi:true
        // style:selectStyle
    });
    var snap = new Snap({
        features:select.getFeatures()
    });
    var modify = new Modify({
        features: select.getFeatures()
    });


    map.addInteraction(modify);
    map.addInteraction(select);
    select.on('select', ()=> {
        this.selectedFeatures = select.getFeatures().getArray();
    });
    map.addInteraction(snap);
    modify.on('modifyend',function(e){
        console.log(e);
    })

    // map.addInteraction(draw);

  }
};
</script>

<style scoped>
.map{
    height: 100%;
}
#map {
  height: 100%;
  padding:0px;
  margin:0px;
}
</style>
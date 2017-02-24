import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {cloneObject} from '../src/util';

import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay    //objects
} from "react-openlayers";

let positions = [ [-20, -20], [-10,-10], [0,0], [10,10], [20,20] ];
let markers = new custom.Marker({positions: positions});
let selectedMarkerStyle = cloneObject(markers.style);
selectedMarkerStyle.getImage().setOpacity(1);

let showPopup = evt => {
  let feature = evt.map.forEachFeatureAtPixel(evt.pixel, (feature, layer) => feature );
  let overlayPosition = feature ? 
    feature.getGeometry().getCoordinates() : evt.coordinate;
  this.overlayComp.overlay.setPosition(overlayPosition);

  var lonlat = ol.proj.transform(overlayPosition, 'EPSG:3857', 'EPSG:4326');

  this.popupComp.setContents(
    `<p>You clicked here:</p><code> ${lonlat[0]}, ${lonlat[1]}</code>`
  );
  this.popupComp.show(feature);
}

ReactDOM.render(
  <div>

    <Map view={{center: [0, 0], zoom: 2}} onClick={showPopup}>
      <Layers>
        <layer.Tile/>
        <layer.Vector source={markers} style={markers.style} />
      </Layers>
      <Overlays>
        <Overlay 
          ref={comp => this.overlayComp = comp}
          element="#popup" />
      </Overlays>
      <Controls attribution={false} zoom={true}>
        <control.Rotate />
        <control.ScaleLine />
        <control.FullScreen />
        <control.OverviewMap />
        <control.ZoomSlider />
        <control.ZoomToExtent />
        <control.Zoom />
      </Controls>
      <Interactions>
        <interaction.Select style={selectedMarkerStyle} />
        <interaction.Draw source={markers} type='Point' />
        <interaction.Modify features={markers.features} />
      </Interactions>
    </Map>

    <custom.Popup ref={comp => this.popupComp = comp}>
    </custom.Popup>
    
  </div>,
  document.getElementById("example")
);
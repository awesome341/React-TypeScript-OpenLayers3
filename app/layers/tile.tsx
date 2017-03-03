import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

export class Tile extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Map>
        <Layers>
          <layer.Tile/>
        </Layers>
      </Map>
    );
  }
}
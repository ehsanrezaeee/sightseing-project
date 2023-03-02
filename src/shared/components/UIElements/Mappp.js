import React from "react";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";

// Viewport settings

// Data to be used by the LineLayer

// DeckGL react component
function Mpp(props) {
  const INITIAL_VIEW_STATE = {
    longitude: props.coordinates.lng,
    latitude: props.coordinates.lat,
    zoom: props.zoom,
    pitch: 0,
    bearing: 0,
  };
  const data = [
    {
      sourcePosition: [props.coordinates.lng, props.coordinates.lat],
      targetPosition: [props.coordinates.lng, props.coordinates.lat],
    },
  ];

  const layers = [new LineLayer({ id: "line-layer", data })];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    />
  );
}

export default Mpp;

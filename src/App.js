import React, { Component } from 'react';
import styled from 'styled-components';
import sketchfile from './data/sketchfile-v2-with-text';
import pagefile from './data/pages/C2A8CDF7-C923-4A59-BABD-EF8C273F1810.json';

import Element from 'components/shapes/Element';

const {
  _class,
  name: pageName,
  layers: artboardList,
  frame: fileFrame,
  pages,
} = sketchfile || {};

let dataSource;
let artboardSize = { width: 0, height: 0, x: 0, y: 0 };
if (_class === 'document') {
  dataSource = pagefile || {};
  const documentArtboardLayer = dataSource.layers[0] || {};
  artboardSize.x = documentArtboardLayer.frame.x;
  artboardSize.y = documentArtboardLayer.frame.y;
  artboardSize.height = documentArtboardLayer.frame.height;
  artboardSize.width = documentArtboardLayer.frame.width;
} else if (_class === 'page') {
  dataSource = artboardList[0] || {};
  artboardSize.x = fileFrame.x;
  artboardSize.y = fileFrame.y;
  artboardSize.height = fileFrame.height;
  artboardSize.width = fileFrame.width;
}

const { name: artboardName, frame, layers } = dataSource;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #131415;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Artboard = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: white;
  position: relative;
`;
class App extends Component {
  renderLayer = (layer, index) => {
    const {
      style: { fills },
    } = layer || {};

    return <Element key={index} data={layer} />;
  };

  render() {
    const elementLayers =
      layers[0]._class === 'artboard' ? layers[0].layers : layers;
    return (
      <Container>
        <Artboard width={artboardSize.width} height={artboardSize.height}>
          {elementLayers.map((layer, index) => this.renderLayer(layer, index))}
        </Artboard>
      </Container>
    );
  }
}

export default App;

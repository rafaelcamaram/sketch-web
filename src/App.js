import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

/* Components */
import Element from 'components/shapes/Element';

/* Assets */
import document from './data/document.json';
import meta from './data/meta.json';
import user from './data/user.json';

const App = () => {
  const [sketchFile, setSketchFile] = useState(undefined);

  useEffect(() => {
    // fetch('https://sketch-file.herokuapp.com/document')
    //   .then((res) => {
    //     console.log({ res });
    //     return res.json();
    //   })
    //   .then((resJson) => {
    //     console.log({ resJson });
    //     setSketchFile(resJson);
    //   });

    let pages = [];

    document.pages.forEach((page) => {
      import(`./data/${page._ref}.json`)
        .then((importedPage) => {
          pages.push(importedPage.default);

          setSketchFile({
            document: document,
            images: {},
            meta: meta,
            pages: pages,
            user: user,
          });
        })
        .catch((err) => console.log({ err }));
    });
  }, []);

  console.log({ sketchFile });
  const firstPage = sketchFile?.pages?.[0];

  if (!sketchFile) return null;

  return (
    <Container>
      {firstPage.layers.map((artboard, index) => {
        const {
          frame: { width, height },
          layers,
        } = artboard;

        return (
          <Artboard key={index} width={width} height={height}>
            {layers.map((layer, index) => (
              <Element key={index} data={layer} />
            ))}
          </Artboard>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #131415;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Artboard = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  max-width: 100vw;
  max-height: 100vh;
  background-color: white;
  position: relative;
`;

export default App;

import React from 'react';
import styled from 'styled-components';

/* Utils */
import { getPixelsFromNumber } from 'utils/units';

const HoverMarkupElement = styled.div`
  width: ${({ width }) => getPixelsFromNumber(width)};
  height: ${({ height }) => getPixelsFromNumber(height)};

  position: absolute;
  top: ${({ axisY }) => getPixelsFromNumber(axisY)};
  left: ${({ axisX }) => getPixelsFromNumber(axisX)};

  border: 1px dashed rgba(252, 206, 28, 1);
  cursor: pointer;
  pointer-events: none;
`;

const ElementWrapper = styled.div`
  ${HoverMarkupElement} {
    display: none;
  }

  &:hover {
    ${HoverMarkupElement} {
      display: flex;
    }
  }
`;

const withHoverElement = (Component) => {
  return (props) => {
    const onHover = (e) => {};

    const onHoverEnd = (e) => {};

    return (
      <ElementWrapper>
        <Component
          {...props}
          onMouseEnter={onHover}
          onMouseLeave={onHoverEnd}
        />
        <HoverMarkupElement
          width={props.width}
          height={props.height}
          axisX={props.axisX}
          axisY={props.axisY}
        ></HoverMarkupElement>
      </ElementWrapper>
    );
  };
};

export default withHoverElement;

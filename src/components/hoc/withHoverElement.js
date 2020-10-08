import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

/* Utils */
import { getPixelsFromNumber } from 'utils/units';

const HoverMarkupElement = styled.div`
  width: ${({ width }) => getPixelsFromNumber(width)};
  height: ${({ height }) => getPixelsFromNumber(height)};

  position: absolute;
  top: ${({ y }) => getPixelsFromNumber(y)};
  left: ${({ x }) => getPixelsFromNumber(x)};

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
    const [isHover, setIsHover] = useState(false);

    const onHover = (e) => {
      // setIsHover(true);
    };

    const onHoverEnd = (e) => {
      // setIsHover(false);
    };

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
          x={props.x}
          y={props.y}
        ></HoverMarkupElement>
      </ElementWrapper>
    );
  };
};

export default withHoverElement;

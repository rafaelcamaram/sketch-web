import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

/* Components */
import withHoverElement from 'components/hoc/withHoverElement';

/* Utils */
import { getRgbaColorFromDecimal } from 'utils/colors';
import { getPixelsFromNumber } from 'utils/units';

const RCEText = styled(motion.div)`
  width: ${({ width }) => getPixelsFromNumber(width)};
  height: ${({ height }) => getPixelsFromNumber(height)};

  position: absolute;
  top: ${({ axisY }) => getPixelsFromNumber(axisY)};
  left: ${({ axisX }) => getPixelsFromNumber(axisX)};

  color: ${({ color }) => getRgbaColorFromDecimal(color)};
  font-size: ${({ fontSize }) => getPixelsFromNumber(fontSize)};
  text-transform: ${({ textTransformUppercase }) =>
    textTransformUppercase ? 'uppercase' : 'initial'};
  font-family: ${({ fontFamily }) => fontFamily};
`;

const Text = ({ text, ...props }) => {
  return (
    <RCEText
      {...props}
      drag
      onDrag={(event, info) => console.log(info.point.x, info.point.y)}
    >
      {text}
    </RCEText>
  );
};

export default withHoverElement(Text);

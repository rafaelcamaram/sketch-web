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
  top: ${({ y }) => y};
  left: ${({ x }) => x};

  color: ${({ color }) => getRgbaColorFromDecimal(color)};
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

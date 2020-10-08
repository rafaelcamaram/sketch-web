import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

/* Components */
import withHoverElement from 'components/hoc/withHoverElement';

/* Utils */
import { getRgbaColorFromDecimal } from 'utils/colors';
import { getPixelsFromNumber } from 'utils/units';

const RCEOval = styled(motion.div)`
  width: ${({ width }) => getPixelsFromNumber(width)};
  height: ${({ height }) => getPixelsFromNumber(height)};

  position: absolute;
  top: ${({ axisY }) => axisY};
  left: ${({ axisX }) => axisX};

  border-radius: ${({ width }) => getPixelsFromNumber(width / 2)};
  border: ${({ borderColor, thickness }) =>
    `${getPixelsFromNumber(thickness)} solid ${getRgbaColorFromDecimal(
      borderColor
    )}`};
  box-sizing: border-box;
  background-color: ${({ color }) => getRgbaColorFromDecimal(color)};
`;

const Oval = (props) => {
  return (
    <RCEOval
      {...props}
      drag
      dragMomentum={false}
      onDrag={(event, info) => {
        // console.log(info.point.x, info.point.y)
      }}
    />
  );
};

export default withHoverElement(Oval);

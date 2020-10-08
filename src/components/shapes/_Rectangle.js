import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

/* Components */
import withHoverElement from 'components/hoc/withHoverElement';

/* Utils */
import { getRgbaColorFromDecimal } from 'utils/colors';
import { getPixelsFromNumber } from 'utils/units';

const RCERectangle = styled(motion.div)`
  width: ${({ width }) => getPixelsFromNumber(width)};
  height: ${({ height }) => getPixelsFromNumber(height)};

  position: absolute;
  top: ${({ axisY }) => axisY};
  left: ${({ axisX }) => axisX};

  background-color: ${({ color }) => getRgbaColorFromDecimal(color)};
  border: ${({ borderColor, thickness }) =>
    `${getPixelsFromNumber(thickness)} solid ${getRgbaColorFromDecimal(
      borderColor
    )}`};
  box-sizing: border-box;
`;

const Rectangle = (props) => {
  return (
    <RCERectangle
      {...props}
      drag
      onDrag={(event, info) => {
        //console.log(info.point.x, info.point.y)
      }}
    />
  );
};

export default withHoverElement(Rectangle);

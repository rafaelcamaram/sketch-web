import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

/* Components */
import withHoverElement from 'components/hoc/withHoverElement';

/* Utils */
import { getRgbaColorFromDecimal } from 'utils/colors';
import { getPixelsFromNumber } from 'utils/units';

const RCEImage = styled(motion.img)`
  width: ${({ width }) => getPixelsFromNumber(width)};
  height: ${({ height }) => getPixelsFromNumber(height)};

  position: absolute;
  top: ${({ axisY }) => getPixelsFromNumber(axisY)};
  left: ${({ axisX }) => getPixelsFromNumber(axisX)};
`;

const Image = (props) => {
  return (
    <RCEImage
      {...props}
      drag
      dragMomentum={false}
      onDrag={(event, info) => {
        // console.log(info.point.x, info.point.y)
      }}
    />
  );
};

export default withHoverElement(Image);

import React from 'react';

/* Element Components */
import Rectangle from './_Rectangle';
import Oval from './_Oval';
import Text from './_Text';

const Element = ({ data }) => {
  const {
    _class,
    frame: { x, y, height, width },
    style: { fills, borders, textStyle },
    attributedString,
  } = data || {};
  const { color } = fills[0] || {};
  const { color: borderColor, thickness } = borders[0] || {};

  const baseProps = {
    width: width,
    height: height,
    axisY: y,
    axisX: x,
    color: color,
    borderColor: borderColor,
    thickness: thickness,
  };

  if (_class === 'rectangle') {
    return <Rectangle {...baseProps} />;
  } else if (_class === 'oval') {
    return <Oval {...baseProps} />;
  } else if (_class === 'text') {
    const { string } = attributedString || {};
    const {
      encodedAttributes: {
        MSAttributedStringFontAttribute: {
          attributes: { size, name: fontFamily },
        },
        MSAttributedStringColorAttribute: textColor,
        MSAttributedStringTextTransformAttribute: textTransformUppercase,
      },
    } = textStyle || {};

    return (
      <Text
        {...baseProps}
        text={string}
        fontSize={size}
        fontFamily={fontFamily}
        color={textColor}
        textTransformUppercase={!!textTransformUppercase}
      />
    );
  }

  return null;
};

export default Element;

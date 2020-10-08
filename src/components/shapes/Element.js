import React from 'react';

/* Element Components */
import Rectangle from './_Rectangle';
import Oval from './_Oval';
import Text from './_Text';

const Element = ({ data }) => {
  const {
    _class,
    frame: { x, y, height, width },
    style: { fills, borders, textStyle, ...restStyle },
    attributedString,
    name,
  } = data || {};
  const { color } = fills[0] || {};
  const { color: borderColor, thickness } = borders[0] || {};

  if (_class === 'rectangle') {
    return (
      <Rectangle
        width={width}
        height={height}
        y={y}
        x={x}
        color={color}
        borderColor={borderColor}
        thickness={thickness}
      />
    );
  } else if (_class === 'oval') {
    return (
      <Oval
        width={width}
        height={height}
        y={y}
        x={x}
        color={color}
        borderColor={borderColor}
        thickness={thickness}
      />
    );
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
        width={width}
        height={height}
        y={y}
        x={x}
        color={color}
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

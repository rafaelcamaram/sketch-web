import React, { useState } from 'react';
import styled from 'styled-components';
import { Rect, Group } from 'react-konva';

const withHoverElement = (Component) => {
  return (props) => {
    const [isHover, setIsHover] = useState(false);

    const onHover = (e) => {
      console.log({ e });

      e.cancelBubble = true;
      setIsHover(true);
    };

    const onHoverEnd = (e) => {
      console.log({ e });
      e.cancelBubble = true;
      setIsHover(false);
    };

    if (isHover) {
      return (
        <Group>
          <Component
            {...props}
            onMouseEnter={onHover}
            onMouseLeave={onHoverEnd}
          />
          <Rect
            x={props.x}
            y={props.y}
            width={props.width}
            height={props.height}
            fill="rgba(0,0,0,0)"
            dashEnabled
            dash={[5, 5]}
            stroke="rgba(252, 206, 28, 1)"
            strokeWidth={1}
            onMouseLeave={onHoverEnd}
          ></Rect>
        </Group>
      );
    }
    return (
      <Component {...props} onMouseEnter={onHover} onMouseLeave={onHoverEnd} />
    );
  };
};

export default withHoverElement;

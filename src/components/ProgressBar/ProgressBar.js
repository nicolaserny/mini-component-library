/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const variants = {
  large: {
    padding: 4,
    height: 24,
    radius: 8,
  },
  medium: {
    padding: 0,
    height: 12,
    radius: 4,
  },
  small: {
    padding: 0,
    height: 8,
    radius: 4,
  },
};

const Wrapper = styled.div`
  width: 100%;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const Bar = styled.div`
  height: var(--height);
  background-color: ${COLORS.primary};
  width: var(--width);
  border-radius: 4px 0px 0px 4px;
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: var(--radius);
`;

const ProgressBar = ({ value, size }) => {
  const variant = variants[size];
  if (!variant) {
    throw Error("unknow size");
  }
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": variant.padding + "px",
        "--height": variant.height + "px",
        "--radius": variant.radius + "px",
        "--width": value + "%",
      }}
    >
      <BarWrapper>
        <Bar value={value}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;

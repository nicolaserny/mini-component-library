import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.label`
  display: block;
  width: var(--width);
  position: relative;
`;

const StyledInput = styled.input`
  border: none;
  color: ${COLORS.gray700};
  font-weight: 700;
  font-size: var(--font-size);
  width: 100%;
  padding: 7px 3px;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--padding-left);
  outline-offset: 2px;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  &:hover {
    color: ${COLORS.black};
    font-weight: 700;
  }
`;

const IconWrapper = styled.div`
  width: var(--icon-width);
  height: var(--icon-width);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  color: ${COLORS.gray700};
  pointer-events: none;
  ${StyledInput}:hover + & {
    color: ${COLORS.black};
  }
`;

const styles = {
  small: {
    fontSize: 14,
    iconStroke: 1,
    iconSize: 16,
    inputPaddingLeft: 24,
    borderThickness: 1,
  },
  large: {
    fontSize: 18,
    iconStroke: 2,
    iconSize: 24,
    inputPaddingLeft: 36,
    borderThickness: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = styles[size];
  if (!style) {
    throw Error("Unknown size");
  }
  return (
    <Wrapper
      style={{
        "--width": width + "px",
        "--font-size": style.fontSize / 16 + "rem",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledInput
        placeholder={placeholder}
        style={{
          "--padding-left": style.inputPaddingLeft + "px",
          "--border-thickness": style.borderThickness + "px",
        }}
      />
      <IconWrapper style={{ "--icon-width": style.iconSize + "px" }}>
        <Icon id={icon} size={style.iconSize} strokeWidth={style.iconStroke} />
      </IconWrapper>
    </Wrapper>
  );
};

export default IconInput;

import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`;

const NativeSelect = styled.select`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
`;

const ContentWrapper = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const ChevronDown = styled(Icon)`
  position: absolute;
  height: 24px;
  width: 24px;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <ContentWrapper>
        {displayedValue}
        <ChevronDown id="chevron-down" size={24} strokeWidth={1} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Select;

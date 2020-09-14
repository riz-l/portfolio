// Import: Dependencies
import React from "react";
import styled from "styled-components";

// UI: Switch
function Switch({ isOn, handleToggle, onColor }) {
  return (
    <>
      <SwitchCheckbox
        checked={isOn}
        onChange={handleToggle}
        id={`react-switch-new`}
        type="checkbox"
      />
      <SwitchLabel
        style={{ background: isOn && onColor }}
        htmlFor={`react-switch-new`}
      >
        <SwitchButton />
      </SwitchLabel>
    </>
  );
}

// Export: Switch
export default Switch;

// Styled: SwitchButton
const SwitchButton = styled.span``;

// Styled: SwitchLabel
const SwitchLabel = styled.label`
  align-items: center;
  background: grey;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: space-between;
  position: relative;
  transition: background-color 0.2s;
  width: 100px;

  & ${SwitchButton} {
    background: #fff;
    border-radius: 45px;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    content: "";
    height: 45px;
    left: 2px;
    position: absolute;
    top: 2px;
    transition: 0.2s;
    width: 45px;
  }

  &:active ${SwitchButton} {
    width: 60px;
  }
`;

// Styled: SwitchCheckbox
const SwitchCheckbox = styled.input`
  display: none;
  height: 0;
  visibility: hidden;
  width: 0;

  &:checked + ${SwitchLabel} ${SwitchButton} {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

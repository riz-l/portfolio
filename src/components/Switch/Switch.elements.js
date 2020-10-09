// Import: Dependencies
import styled from "styled-components";

// Styled: SwitchButton
export const SwitchButton = styled.span``;

// Styled: SwitchLabel
export const SwitchLabel = styled.label`
  align-items: center;
  background: #ff5851;
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
export const SwitchCheckbox = styled.input`
  display: none;
  height: 0;
  visibility: hidden;
  width: 0;

  &:checked + ${SwitchLabel} ${SwitchButton} {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

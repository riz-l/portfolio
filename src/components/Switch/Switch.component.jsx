// Import: Dependencies
import React from "react";

// Import: Styled Components
import { SwitchButton, SwitchLabel, SwitchCheckbox } from "./Switch.elements";

// Component: Switch
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

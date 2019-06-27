import React from 'react'
import StyledCheckBox from './CheckBoxStyles'

const Checkbox = ({ label, name, onChange, color, disabled }) => (
  <StyledCheckBox color={color || '#2196f3'}>
    <input
      type='checkbox'
      name={name}
      disabled={disabled}
      onChange={onChange}
    />
    <span>{label}</span>
  </StyledCheckBox>
)

export default Checkbox

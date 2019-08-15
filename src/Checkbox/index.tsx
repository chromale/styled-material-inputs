import * as React from 'react';
// @ts-ignore
import StyledCheckBox from './CheckBoxStyles'

const Checkbox = ({ label, name, onChange, color, disabled }: any) => (
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

import React from 'react'
import StyledTextField from './TextInputStyles'

const TextField = ({ label, value, name, onChange, color, error }) => (
  <StyledTextField color={color || '#2196f3'} error={error}>
    <input
      placeholder=' '
      value={value}
      name={name}
      value={value}
      onChange={e => onChange && onChange(e)}
    />
    <span>{label}</span>
  </StyledTextField>
)

export default TextField

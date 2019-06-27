import React from 'react'
import StyledTextField from './TextInputStyles'

const TextField = ({
  label,
  value,
  name,
  onChange,
  color,
  error,
  fullWidth,
  type
}) => (
  <StyledTextField
    color={color || '#2196f3'}
    error={error}
    fullWidth={fullWidth}
  >
    <input
      placeholder=' '
      type={type || 'text'}
      value={value}
      name={name}
      value={value}
      onChange={e => onChange && onChange(e)}
    />
    <span>{label}</span>
  </StyledTextField>
)

export default TextField

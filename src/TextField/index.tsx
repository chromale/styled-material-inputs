import * as React from 'react';
// @ts-ignore
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
}: any) => (
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
      onChange={e => onChange && onChange(e)}
    />
    <span>{label}</span>
  </StyledTextField>
)

export default TextField

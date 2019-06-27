import React from 'react'
import { StyledRadio } from './RadioStyles'

/* checked={selectedValue === 'b'}
onChange={handleChange}
value="b"
name="radio-button-demo"
 */
const Radio = ({ onChange, color, name, value, checked, label }) => (
  <StyledRadio
    key={value}
    color={color || '#2196f3'}
    name={name}
    onChange={event => onChange(event)}
  >
    <input type='radio' name={name} value={value} checked={checked} />
    <span>{label}</span>
  </StyledRadio>
)

export default Radio

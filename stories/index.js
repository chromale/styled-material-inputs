import React from 'react'
import { storiesOf } from '@storybook/react'
import { Spinner, TextField, Radio, Checkbox } from '../src'

storiesOf('Spinners', module)
  .add('Spinner', () => <Spinner />)
  .add('Textfield', () => <TextField error label="Enter a text" />)
  .add('Checkbox', () => <Checkbox label="Check me" />)
  .add('Radio', () => (
    <div>
      <Radio
        name="selectSometing"
        value="one"
        label="One"
        onChange={ev => console.log('value', ev.target.value)}
      />

      <Radio
        name="selectSometing"
        value="two"
        label="Two"
        checked
        onChange={ev => console.log('value', ev.target.value)}
      />
    </div>
  ))

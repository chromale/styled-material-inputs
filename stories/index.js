import React from "react"
import { storiesOf } from "@storybook/react"
import { Spinner, TextField, Checkbox, PhoneInput } from "../src"

storiesOf("Spinners", module)
  .add("Spinner", () => <Spinner />)
  .add("Textfield", () => <TextField label="Enter a text" />)
  .add("Checkbox", () => <Checkbox label="Check me" />)
  .add("PhoneInput", () => <PhoneInput label="Will you give me your number?" />)

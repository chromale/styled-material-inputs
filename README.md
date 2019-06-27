# Material UI inputs created with styled-components

Material input fields are great, but Material UI library for react is terribly complicated and large, especially if you only need few basic components. Goal of this package is to provide light-weight, simple way to use material UI components without any hassle.

Please note this package is still under development.

## Components

#### Textfield

Example

```
   <TextInput
      label="Email Address"
      onChange={event => console.log("Event:", event)}
      color="#96C09D"
    />
```

Props
| Name | Type | Description |
| ------------- |:-------------:| -----:|
| label | string | |
| onChange | function | |
| color | string | main color of input when :active |
| name | string | unique identification |

#### Checkbox

```
    <CheckBox
      label="Check me!"
      color="#96C09D"
      onChange={event => console.log("Event:", event)}
    />
```

#### Radio

```
      <Radio
        color="#96C09D"
        name="selectSomething"
        value="this"
        label="This"
      />
```

## Special thanks

Based on amazing work in [Matter library](https://github.com/finnhvman/matter)

# Material UI inputs created with styled-components

Material input fields are great, but Material UI library for react is terribly complicated and large, especially if you only need few basic components. Goal of this package is to provide light-weight, simple way to use material UI components without any hassle.

Please note this package is still under development.

## Components

#### Textfield

Example

```
   <TextInput
      label="Email Address"
      onChange={value => console.log("Value:", value)}
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
      onChange={value => console.log("Value:", value)}
    />
```

#### Radio

```
      <Radio
        color="#96C09D"
        options={[
          { label: "Yes", value: "yes" },
          { label: "No way", value: "no" }
        ]}
      />
```

Props
| Name | Type | Description |
| ------------- |:-------------:| -----:|
| options | array of options | `{label: "Some label", value: "Some value"}` |
| onChange | function | callback after click |
| color | string | main color |
| name | string | unique identification |

## Special thanks

Based on amazing work in [Matter library](https://github.com/finnhvman/matter)

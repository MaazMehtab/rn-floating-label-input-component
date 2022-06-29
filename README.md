# rn-floating-label-input-component

A cross-platform react-native floating label input component.

Under the hood, this library is using [`TextInput`](https://reactnative.dev/docs/textinput).

## Installation

Install the library using npm or yarn:

```bash
# using npm
$ npm i rn-floating-label-input-component

# using yarn
$ yarn add rn-floating-label-input-component
```

## Usage

```javascript
import React, { useState } from "react";
import { View } from "react-native";
import FloatingLabeleInput from "rn-floating-label-input-component";

const Example = () => {
  const [userName, setUserName] = useState("");
  return (
    <View>
      <FloatingLabeleInput
        label="User Name"
        value={userName}
        onChange={setUserName}
        autoCapitalize="none"
        returnKeyType="next"
        required={false}
        blurredBorderWidth={1}
      />
    </View>
  );
};

export default Example;
```

## Available props

**All the [`TextInput`](https://reactnative.dev/docs/textinput) props are supported** as well!

| Name                 | Type       | Default                        | Description                                                                                                                                                          |
| -------------------- | ---------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autoCapitalize`     | string?    |                                | Tells TextInput to automatically capitalize certain characters. This property is not supported by some keyboard types such as name-phone-pad                         |
| `blurredBorderWidth` | float?     | 0                              | Border width of the blurred component                                                                                                                                |
| `blurredFontSize`    | float?     | 16                             | Label font size of the burred component                                                                                                                              |
| `blurredPosition`    | float?     | android: 25, ios: 10           | Label position of the burred component                                                                                                                               |
| `colors`             | object?    | {}                             | Overrides the default colors of the compoent                                                                                                                         |
| `customStyles`       | style?     | {}                             | The style of the parent container                                                                                                                                    |
| `disabled`           | bool?      | false                          | If true, text is not editable. The default value is false                                                                                                            |
| `focusedBorderWidth` | float?     | 1.3                            | Border width of the focused component                                                                                                                                |
| `focusedFontSize`    | float?     | 13                             | Label font size of the focused component                                                                                                                             |
| `focusedPosition`    | float?     | android: -4, ios: -5           | Label position of the focused component                                                                                                                              |
| `inputFontSize`      | float?     | 16                             | Input font size of the component                                                                                                                                     |
| `isSecureField`      | bool?      | false                          | If true, the text input obscures the text entered so that sensitive text like passwords stay secure. The default value is false. Does not work with multiline={true} |
| `keyboardType`       | string?    | 'default'                      | Determines which keyboard to open, e.g.numeric                                                                                                                       |
| `label`              | string     |                                | The label of the field                                                                                                                                               |
| `labelLeftPosition`  | float?     | showLeftIcon === true ? 32 : 5 | Label left position                                                                                                                                                  |
| `leftIcon`           | component? |                                | Left Component                                                                                                                                                       |
| `message`            | string?    | ''                             | Help text                                                                                                                                                            |
| `multiline`          | bool?      | false                          | If true, the text input can be multiple lines                                                                                                                        |
| `onBlur`             | func?      | () => null                     | Callback that is called when the text input is blurred                                                                                                               |
| `onChange`           | func       | **REQUIRED** () => null        | Callback that is called when the text input's text changes. Changed text is passed as a single string argument to the callback handler                               |
| `onFocus`            | func?      | () => null                     | Callback that is called when the text input is focused                                                                                                               |
| `onLeftIconPress`    | func?      | () => null                     | Callback that is called when the left icon is clicked                                                                                                                |
| `onRightIconPress`   | func?      | () => null                     | Callback that is called when the right icon is clicked                                                                                                               |
| `onSubmitEditing`    | func?      | () => null                     | Callback that is called when the text input's submit button is pressed                                                                                               |
| `placeholder`        | string?    | ''                             | The string that will be rendered before text input has been entered                                                                                                  |
| `required`           | bool?      | false                          | If true, displays the \* symbol next to label                                                                                                                        |
| `returnKeyType`      | string?    |                                | Determines how the return key should look.                                                                                                                           |
| `rightActiveIcon`    | component? |                                | Right Active Component                                                                                                                                               |
| `rightInactiveIcon`  | component? |                                | Right Inactive Component                                                                                                                                             |
| `showLeftIcon`       | bool?      | false                          | If true, reder leftIcon                                                                                                                                              |
| `showRightIcon`      | bool?      | false                          | If true, reder rightActiveIcon and rightInactiveIcon                                                                                                                 |
| `value`              | string     | **REQUIRED**                   | The value of the text input                                                                                                                                          |

## Contributing

Pull requests, feedbacks and suggestions are welcome!

## License

The library is released under the Folio3 X-Platform Engineering Group.

import React, { useImperativeHandle, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";

// styles
import styles from "./styles";

const defaultColors = {
  backgroundColor: "#f5f7f9",
  blurredBorderColor: "#ddddec",
  focusedBorderColor: "#4f2683",
  labelColor: "#737f84",
  messageTextColor: "#f71c00",
  inputColor: "#232323",
  requiredLabelColor: "#f71c00",
};

const FloatingLabelInput = React.forwardRef(
  (
    {
      autoCapitalize,
      blurredBorderWidth = 0,
      blurredFontSize = 16,
      blurredPosition = Platform.select({ android: 25, ios: 10 }) || 0,
      colors = {},
      customStyles = {},
      disabled = false,
      focusedBorderWidth = 1.3,
      focusedFontSize = 13,
      focusedPosition = Platform.select({ android: -4, ios: -5 }) || 0,
      inputFontSize = 16,
      isSecureField = false,
      keyboardType = "default",
      showLeftIcon = false,
      label,
      labelLeftPosition = showLeftIcon ? 32 : 5,
      leftIcon,
      message = "",
      multiline = false,
      onBlur = () => null,
      onChange = () => null,
      onFocus = () => null,
      onLeftIconPress = () => null,
      onRightIconPress = () => null,
      onSubmitEditing = () => null,
      placeholder = "",
      required = false,
      returnKeyType,
      rightActiveIcon,
      rightInactiveIcon,
      showRightIcon = false,
      value,
      ...rest
    },
    ref
  ) => {
    const [position] = useState(
      new Animated.Value(
        value || placeholder ? focusedPosition : blurredPosition
      )
    );
    const [fontSize, setFontSize] = useState(
      value ? focusedFontSize : blurredFontSize
    );
    const [borderWidth, setborderWidth] = useState(blurredBorderWidth);
    const [borderColor, setborderColor] = useState(
      colors?.blurredBorderColor || defaultColors.blurredBorderColor
    );
    const [isFieldActive, setIsFieldActive] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef?.current?.focus?.();
      },
      blur: () => {
        inputRef?.current?.blur?.();
      },
    }));

    const handleFocus = () => {
      if (!isFieldActive) {
        setIsFieldActive(true);
        Animated.timing(position, {
          toValue: focusedPosition,
          duration: 150,
          useNativeDriver: true,
        }).start();
      }
      setFontSize(focusedFontSize);
      setborderWidth(focusedBorderWidth);
      setborderColor(
        colors?.focusedBorderColor || defaultColors.focusedBorderColor
      );
      onFocus?.();
    };

    const handleBlur = () => {
      if (isFieldActive && !value && !placeholder) {
        setIsFieldActive(false);
        Animated.timing(position, {
          toValue: blurredPosition,
          duration: 150,
          useNativeDriver: true,
        }).start();
        setFontSize(blurredFontSize);
      }

      setborderWidth(blurredBorderWidth);
      setborderColor(
        colors?.blurredBorderColor || defaultColors.blurredBorderColor
      );
      onBlur?.();
    };

    const handleOnChange = (val) => {
      onChange?.(val);
    };

    return (
      <View>
        <View
          style={[
            styles.rootContainer,
            {
              borderWidth: borderWidth,
              borderColor: !!message
                ? colors?.messageBorderColor || borderColor
                : borderColor,
              backgroundColor:
                colors?.backgroundColor || defaultColors.backgroundColor,
            },
            customStyles,
          ]}
        >
          <View style={styles.container}>
            <Animated.Text
              style={[
                styles.lable,
                {
                  transform: [{ translateY: position }],
                  fontSize: fontSize,
                  left: labelLeftPosition,
                  color: colors?.labelColor || defaultColors.labelColor,
                },
              ]}
            >
              {label}{" "}
              {required && (
                <Animated.Text
                  style={[
                    styles.lable,
                    {
                      color:
                        colors?.requiredLabelColor ||
                        defaultColors.requiredLabelColor,
                    },
                  ]}
                >
                  {"*"}
                </Animated.Text>
              )}
            </Animated.Text>
            <View style={multiline ? styles.textAreaView : styles.view}>
              {showLeftIcon && (
                <TouchableOpacity
                  activeOpacity={1}
                  transparent
                  // style={styles.leftIcon}
                  onPress={() => onLeftIconPress?.(value)}
                >
                  {leftIcon?.()}
                </TouchableOpacity>
              )}
              <TextInput
                {...rest}
                ref={inputRef}
                value={value}
                style={[
                  multiline ? styles.textAreaInput : styles.textInput,
                  {
                    color: colors?.inputColor || defaultColors.inputColor,
                    fontSize: inputFontSize,
                  },
                ]}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={handleOnChange}
                editable={!disabled}
                multiline={multiline}
                placeholder={placeholder}
                secureTextEntry={!isActive && isSecureField}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                selectionColor={colors?.inputColor || defaultColors.inputColor}
                autoCapitalize={autoCapitalize}
              />
              {showRightIcon && (
                <TouchableOpacity
                  activeOpacity={1}
                  transparent
                  style={styles.rightIcon}
                  onPress={() => {
                    setIsActive(!isActive);
                    onRightIconPress?.(value);
                  }}
                >
                  {isActive
                    ? rightInactiveIcon?.() || rightActiveIcon?.()
                    : rightActiveIcon?.() || rightInactiveIcon?.()}
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        {!!message && (
          <Text
            style={[
              styles.messageText,
              {
                color:
                  colors?.messageTextColor || defaultColors.messageTextColor,
                fontSize: focusedFontSize,
              },
            ]}
          >
            {message}
          </Text>
        )}
      </View>
    );
  }
);

export default FloatingLabelInput;

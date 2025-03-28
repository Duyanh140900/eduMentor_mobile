// customInput.tsx
import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TextInputProps} from 'react-native';
import CustomIcon from './CustomIcon';
import {COLORS, SIZES} from '@/constants/theme';

interface CustomInputProps extends TextInputProps {
  iconLeft?: string;
  iconRight?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  iconLeft,
  iconRight,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={[styles.container, isFocused && styles.focusedContainer]}>
      {iconLeft && (
        <CustomIcon
          name={iconLeft}
          width={30}
          height={30}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.input}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {iconRight && (
        <CustomIcon
          name={iconRight}
          width={30}
          height={30}
          style={styles.icon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  focusedContainer: {
    borderWidth: 1.5,
    borderColor: COLORS.outline, // Màu outline khi focus
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: SIZES.medium,
    // paddingHorizontal: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default CustomInput;

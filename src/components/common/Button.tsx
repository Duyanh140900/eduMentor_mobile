import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {COLORS, FONTS, SIZES, SHADOWS} from '@/constants/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: COLORS.secondary,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: COLORS.primary,
        };
      default:
        return {
          backgroundColor: COLORS.primary,
        };
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return {
          paddingVertical: SIZES.base,
          paddingHorizontal: SIZES.small,
        };
      case 'large':
        return {
          paddingVertical: SIZES.medium,
          paddingHorizontal: SIZES.large,
        };
      default:
        return {
          paddingVertical: SIZES.base,
          paddingHorizontal: SIZES.medium,
        };
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getVariantStyle(),
        getSizeStyle(),
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator color={COLORS.white} />
      ) : (
        <Text
          style={[
            styles.text,
            variant === 'outline' && {color: COLORS.primary},
            textStyle,
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: SIZES.base,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.light,
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.font,
    fontFamily: FONTS.medium,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;

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
import CustomIcon from './CustomIcon';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  round?: number;
  iconLeft?: string;
  iconRight?: string;
  iconSize?: number;
  hasShadow?: boolean;
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
  round = SIZES.base,
  iconLeft,
  iconRight,
  iconSize = 20,
  hasShadow = false,
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

  const shadowStyle = hasShadow
    ? {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
      }
    : {};

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getVariantStyle(),
        getSizeStyle(),
        {borderRadius: round},
        disabled && styles.disabled,
        shadowStyle,
        style,
      ]}
      onPress={() => {
        console.log('onPress');
        onPress();
      }}
      disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator color={COLORS.white} />
      ) : (
        <>
          {iconLeft && (
            <CustomIcon
              name={iconLeft}
              width={iconSize}
              height={iconSize}
              style={styles.icon}
            />
          )}
          <Text
            style={[
              styles.text,
              variant === 'outline' && {color: COLORS.primary},
              textStyle,
            ]}>
            {title}
          </Text>
          {iconRight && (
            <CustomIcon
              name={iconRight}
              width={iconSize}
              height={iconSize}
              style={styles.icon}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.light,
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.font,
    fontFamily: FONTS.medium,
    marginHorizontal: 5,
  },
  disabled: {
    opacity: 0.5,
  },
  icon: {
    marginRight: 5,
    marginLeft: 5,
  },
});

export default Button;

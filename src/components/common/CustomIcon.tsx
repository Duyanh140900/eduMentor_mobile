import React from 'react';
import {Image, ImageStyle, StyleProp, StyleSheet} from 'react-native';

interface Props {
  name: string; // Tên icon (ví dụ: "home", "settings")
  width?: number; // Kích thước icon (mặc định là 24)
  height?: number; // Kích thước icon (mặc định là 24)
  style?: StyleProp<ImageStyle>;
}

// Import các file PNG
const iconImages: {[key: string]: any} = {
  logo_login: require('assets/images/logo_text.png'),
  google: require('assets/images/social-google.png'),
  facebook: require('assets/images/social-fb.png'),
  apple: require('assets/images/social-apple.png'),
  user: require('assets/images/user.png'),
  password: require('assets/images/password.png'),
  eye: require('assets/images/eye.png'),
  menu: require('assets/images/menu.png'),
  notification: require('assets/images/noti.png'),
  notification_active: require('assets/images/noti_active.png'),
  setting: require('assets/images/setting.png'),
  avatar_default: require('assets/images/avt_default.png'),
  // Thêm các icon khác vào đây
};

const CustomIcon: React.FC<Props> = ({
  name,
  width = 24,
  height = 24,
  style,
}) => {
  const source = iconImages[name];

  if (!source) {
    return null; // Hoặc hiển thị một icon mặc định
  }

  return (
    <Image
      source={source}
      style={[styles.icon, {width: width, height: height}, style]}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain', // Đảm bảo icon không bị méo
  },
});

export default CustomIcon;

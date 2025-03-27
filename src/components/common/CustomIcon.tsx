import React from 'react';
import {Image, StyleSheet} from 'react-native';

interface Props {
  name: string; // Tên icon (ví dụ: "home", "settings")
  width?: number; // Kích thước icon (mặc định là 24)
  height?: number; // Kích thước icon (mặc định là 24)
}

// Import các file PNG
const iconImages: {[key: string]: any} = {
  logo_login: require('@/assets/images/logo_text.png'),
  //   settings: require('./assets/settings.png'),
  // Thêm các icon khác vào đây
};

const CustomIcon: React.FC<Props> = ({name, width = 24, height = 24}) => {
  const source = iconImages[name];

  if (!source) {
    return null; // Hoặc hiển thị một icon mặc định
  }

  return (
    <Image
      source={source}
      style={[styles.icon, {width: width, height: height}]}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain', // Đảm bảo icon không bị méo
  },
});

export default CustomIcon;

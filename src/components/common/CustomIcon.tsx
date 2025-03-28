import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import LogoLogin from 'assets/svg/logo.svg';
import GoogleIcon from 'assets/svg/social-google.svg';
import FacebookIcon from 'assets/svg/social-fb.svg';
import AppleIcon from 'assets/svg/social-apple.svg';
import UserIcon from 'assets/svg/user.svg';
import PasswordIcon from 'assets/svg/password.svg';
import EyeIcon from 'assets/svg/eye.svg';
import MenuIcon from 'assets/svg/menu.svg';
import NotificationIcon from 'assets/svg/noti.svg';
import NotificationActiveIcon from 'assets/svg/noti_active.svg';
import SettingIcon from 'assets/svg/setting.svg';
import AvatarDefaultIcon from 'assets/svg/avatar_default.svg';

// Map các icon SVG
const iconComponents: {[key: string]: React.FC<any>} = {
  logo_login: LogoLogin,
  google: GoogleIcon,
  facebook: FacebookIcon,
  apple: AppleIcon,
  user: UserIcon,
  password: PasswordIcon,
  eye: EyeIcon,
  menu: MenuIcon,
  notification: NotificationIcon,
  notification_active: NotificationActiveIcon,
  setting: SettingIcon,
  avatar_default: AvatarDefaultIcon,
};

interface Props {
  name: string;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
}

const CustomIcon: React.FC<Props> = ({
  name,
  width = 24,
  height = 24,
  style,
}) => {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconComponents.`);
    return null; // Avoid rendering an invalid component
  }

  return <IconComponent width={width} height={height} style={style} />;
};

export default CustomIcon;

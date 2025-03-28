import {COLORS, FONTS} from '@/constants/theme';
import CustomIcon from '@/components/common/CustomIcon';
import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

interface Props {
  //   children: React.ReactNode;
}

const LoginSocial: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <ButtonSocial
        title="Đăng nhập bằng Google"
        icon="google"
        onPress={() => {}}
      />
      <ButtonSocial
        title="Đăng nhập bằng Facebook"
        icon="facebook"
        onPress={() => {}}
      />
      <ButtonSocial
        title="Đăng nhập bằng Apple"
        icon="apple"
        onPress={() => {}}
      />
    </View>
  );
};

const ButtonSocial = ({
  title,
  icon,
  onPress,
}: {
  title: string;
  icon: string;
  onPress: () => void;
}) => {
  return (
    <TouchableHighlight
      underlayColor={COLORS.background}
      style={styles.buttonSocial}
      onPress={onPress}>
      <View style={styles.viewButton}>
        <CustomIcon name={icon} width={20} height={20} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: COLORS.background,
  },
  buttonSocial: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: 'row',
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.text,
    marginLeft: 10,
  },
});

export default LoginSocial;

import Button from '@/components/common/Button';
import CustomInput from '@/components/common/CustomInput';
import LoginSocial from '@/components/login/LoginSocial';
import {COLORS, FONTS} from '@/constants/theme';
import LayoutLogin from '@/layouts/LayoutLogin';
import {navigate} from '@/utils/navigationUtils';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  //   children: React.ReactNode;
}

const LoginScreen: React.FC<Props> = ({}) => {
  return (
    <LayoutLogin title="Đăng nhập">
      <View style={styles.container}>
        <LoginSocial />
        <View style={styles.containerLine}>
          <View style={styles.line} />
          <Text style={styles.text}>hoặc</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.containerInput}>
          <CustomInput placeholder="Nhập thông tin đăng nhập" iconLeft="user" />
          <CustomInput
            placeholder="Nhập thông tin đăng nhập"
            iconLeft="password"
            iconRight="eye"
          />
        </View>
        <Button
          title="Đăng nhập"
          onPress={() => navigate('App')}
          variant="primary"
          size="large"
        />
        <View style={styles.containerText}>
          <Text
            style={styles.textNavigate}
            onPress={() => navigate('ForgetPassword')}>
            Quên mật khẩu?
          </Text>
          <Text style={{marginTop: 10}}>
            Bạn chưa có tài khoản?{' '}
            <Text
              onPress={() => navigate('Register')}
              style={styles.textNavigate}>
              Đăng ký
            </Text>
          </Text>
        </View>
      </View>
    </LayoutLogin>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  containerLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray', // Màu của đường kẻ
    marginHorizontal: 10, // Khoảng cách giữa đường kẻ và văn bản
  },
  text: {
    // Các kiểu cho văn bản
    fontSize: 16,
    color: 'black',
  },
  containerInput: {
    marginTop: 10,
    marginBottom: 20,
  },
  containerText: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  textNavigate: {
    color: COLORS.primary,
    fontFamily: FONTS.medium,
  },
});

export default LoginScreen;

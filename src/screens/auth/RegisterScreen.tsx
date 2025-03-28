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

const RegisterScreen: React.FC<Props> = ({}) => {
  return (
    <LayoutLogin title="Đăng ký">
      <View style={styles.container}>
        <LoginSocial />
        <View style={styles.containerLine}>
          <View style={styles.line} />
          <Text style={styles.text}>hoặc</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.containerInput}>
          <CustomInput placeholder="Nhập thông tin đăng ký" iconLeft="user" />
          <CustomInput
            placeholder="Nhập mật khẩu"
            iconLeft="password"
            iconRight="eye"
          />
        </View>
        <Button
          title="Đăng nhập"
          onPress={() => {}}
          variant="primary"
          size="large"
        />
        <View style={styles.containerText}>
          <Text>
            Bạn đã có tài khoản?{' '}
            <Text
              style={styles.textNavigate}
              onPress={() => navigate('ForgetPassword')}>
              Đăng nhập
            </Text>
          </Text>
          <Text style={{marginTop: 10}}>
            Bằng cách đăng ký, bạn chấp nhận{' '}
            <Text
              onPress={() => navigate('Register')}
              style={styles.textNavigate}>
              Điều khoản sử dụng
            </Text>{' '}
            và{' '}
            <Text
              onPress={() => navigate('Register')}
              style={styles.textNavigate}>
              Chính sách quyền riêng tư
            </Text>{' '}
            của chúng tôi.
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

export default RegisterScreen;

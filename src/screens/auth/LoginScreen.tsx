import LayoutLogin from '@/layouts/LayoutLogin';
import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  //   children: React.ReactNode;
}

const LoginScreen: React.FC<Props> = ({}) => {
  return (
    <LayoutLogin title="Đăng nhập">
      <View>
        <Text>Login</Text>
      </View>
    </LayoutLogin>
  );
};

export default LoginScreen;

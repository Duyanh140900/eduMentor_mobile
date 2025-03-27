import LayoutLogin from '@/layouts/LayoutLogin';
import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  //   children: React.ReactNode;
}

const ForgetPassword: React.FC<Props> = ({}) => {
  return (
    <LayoutLogin>
      <View>
        <Text>ForgetPassword</Text>
      </View>
    </LayoutLogin>
  );
};

export default ForgetPassword;

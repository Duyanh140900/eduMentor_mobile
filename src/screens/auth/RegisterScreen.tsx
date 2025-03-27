import LayoutLogin from '@/layouts/LayoutLogin';
import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  //   children: React.ReactNode;
}

const RegisterScreen: React.FC<Props> = ({}) => {
  return (
    <LayoutLogin>
      <View>
        <Text>RegisterScreen</Text>
      </View>
    </LayoutLogin>
  );
};

export default RegisterScreen;

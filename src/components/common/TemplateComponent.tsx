import React from 'react';
import {View} from 'react-native';

interface Props {
  children: React.ReactNode;
}

const MyComponent: React.FC<Props> = ({children}) => {
  return <View>{children}</View>;
};

export default MyComponent;

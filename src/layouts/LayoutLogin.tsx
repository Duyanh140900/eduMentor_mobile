import CustomIcon from '@/components/common/CustomIcon';
import {COLORS, FONTS} from '@/constants/theme';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  children: React.ReactNode;
  title: string;
}

const LayoutLogin: React.FC<Props> = ({children, title}) => (
  <View style={commonStyles.container}>
    <CustomIcon name="logo_login" width={270} height={150} />
    <Text style={commonStyles.title}>{title}</Text>
    {children}
  </View>
);

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: COLORS.primary,
    fontFamily: FONTS.extraBold,
  },
});

export default LayoutLogin;

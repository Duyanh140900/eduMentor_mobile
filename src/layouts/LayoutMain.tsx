import Header from '@/components/layout/Header';
import {COLORS, FONTS} from '@/constants/theme';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  children: React.ReactNode;
  bg?: string;
}

const LayoutMain: React.FC<Props> = ({children, bg}) => (
  <View style={[commonStyles.container, {backgroundColor: bg}]}>
    <Header />
    <View style={commonStyles.body}>{children}</View>
  </View>
);

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    // backgroundColor: 'red',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: COLORS.primary,
    fontFamily: FONTS.bold,
  },
  body: {
    flex: 1,
    marginTop: 20,
  },
});

export default LayoutMain;

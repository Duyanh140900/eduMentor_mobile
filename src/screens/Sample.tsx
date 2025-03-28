import {COLORS} from '@/constants/theme';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  //   children: React.ReactNode;
}

const NewComponent: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>RegisterScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

export default NewComponent;

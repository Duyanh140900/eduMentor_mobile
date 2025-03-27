import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '@/constants/theme';
import Icon from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.menuButton}>
        <Icon name="menu" size={24} color={COLORS.text} />
      </TouchableOpacity>
      <View style={styles.headerRight}>
        <TouchableOpacity style={styles.notificationButton}>
          <Icon name="bell" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.avatarContainer}>
          <Icon name="user" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.large,
  },
  menuButton: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.medium,
  },
  notificationButton: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 27,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default Header;

import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '@/constants/theme';
import Icon from 'react-native-vector-icons/Feather';
import CustomIcon from '../common/CustomIcon';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <CustomIcon name="menu" width={40} height={40} />
      </TouchableOpacity>
      <View style={styles.headerRight}>
        <TouchableOpacity>
          <CustomIcon name="notification" width={40} height={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.avatarContainer}>
          <CustomIcon name="avatar_default" width={20} height={20} />
          <CustomIcon name="setting" width={20} height={20} />
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 27,
    backgroundColor: COLORS.primary,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
});

export default Header;

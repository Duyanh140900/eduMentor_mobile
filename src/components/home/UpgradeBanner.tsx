import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '@/constants/theme';

const UpgradeBanner = () => {
  return (
    <View style={styles.upgradeBanner}>
      <View style={styles.bannerColorBlock}></View>
      <View style={styles.upgradeContent}>
        <Text style={styles.upgradeTitle}>Nâng cấp gói cước của bạn</Text>
        <Text style={styles.upgradeDescription}>
          Bạn sẽ nhận được nhiều lợi ích hơn khi nâng gói cước, bấm vào nâng gói
          cước để tìm hiểu thêm
        </Text>
        <TouchableOpacity style={styles.upgradeButton}>
          <Text style={styles.upgradeButtonText}>Nâng gói cước</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  upgradeBanner: {
    // margin: SIZES.large,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.26,
    shadowRadius: 12,
    elevation: 8,
  },
  bannerColorBlock: {
    width: '100%',
    height: 120,
    backgroundColor: COLORS.primary,
    opacity: 0.8,
  },
  upgradeContent: {
    padding: SIZES.large,
  },
  upgradeTitle: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    marginBottom: 4,
  },
  upgradeDescription: {
    fontSize: 11,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    marginBottom: SIZES.large,
  },
  upgradeButton: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    shadowColor: '#FFE57F',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  upgradeButtonText: {
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: '#131417',
  },
});

export default UpgradeBanner;

import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {COLORS, FONTS, SIZES} from '@/constants/theme';

const FeaturedNews = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tin mới nổi bật</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[styles.featuredCard, {backgroundColor: '#5856D6'}]}>
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>Free e-book</Text>
          </View>
          <Text style={styles.cardTitle}>Step design sprint for beginner</Text>
        </View>
        <View
          style={[
            styles.featuredCard,
            styles.featuredCardInactive,
            {backgroundColor: '#34C759'},
          ]}>
          <Text style={styles.cardTitle}>
            Basic skill for sketch illustration
          </Text>
        </View>
      </ScrollView>
      <View style={styles.sliderDots}>
        <View style={styles.dotActive} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: SIZES.extraLarge,
    paddingHorizontal: SIZES.large,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
    lineHeight: 22,
  },
  featuredCard: {
    width: 280,
    height: 160,
    borderRadius: 24,
    padding: SIZES.large,
    marginRight: SIZES.medium,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 14,
    elevation: 8,
  },
  featuredCardInactive: {
    opacity: 0.4,
  },
  tagContainer: {
    backgroundColor: '#FCCC75',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: SIZES.base,
  },
  tag: {
    fontSize: 10,
    fontFamily: FONTS.medium,
    color: COLORS.white,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
  sliderDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SIZES.base,
    marginTop: SIZES.medium,
  },
  dot: {
    width: 24,
    height: 4,
    backgroundColor: COLORS.gray,
    borderRadius: 4,
  },
  dotActive: {
    width: 24,
    height: 4,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },
});

export default FeaturedNews;

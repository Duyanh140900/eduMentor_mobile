import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '@/constants/theme';
import Icon from 'react-native-vector-icons/Feather';

const TeacherList = () => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Danh sách giáo viên{'\n'}Do AI đề xuất cho bạn
        </Text>
        <Icon name="arrow-right" size={24} color={COLORS.text} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.teacherCard}>
          <View style={styles.teacherAvatar}>
            <Icon name="user" size={64} color={COLORS.white} />
          </View>
          <View style={styles.teacherInfo}>
            <Text style={styles.teacherName}>Cô Lê Thị An</Text>
            <Text style={styles.teacherTitle}>
              Thạc sĩ - Giáo viên Toán học cao cấp quốc tế
            </Text>
          </View>
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.messageButtonText}>Nhắn tin</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: SIZES.extraLarge,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: SIZES.medium,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
    lineHeight: 22,
  },
  teacherCard: {
    width: 240,
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: SIZES.large,
    alignItems: 'center',
    gap: SIZES.medium,
  },
  teacherAvatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teacherInfo: {
    alignItems: 'center',
  },
  teacherName: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: '#22313F',
    letterSpacing: -0.4,
    marginBottom: 4,
  },
  teacherTitle: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: '#22313F',
    letterSpacing: -0.4,
    textAlign: 'center',
  },
  messageButton: {
    backgroundColor: 'rgba(195, 226, 255, 0.5)',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  messageButtonText: {
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
});

export default TeacherList;

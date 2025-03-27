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

const DocumentList = () => {
  // Dữ liệu mẫu cho danh sách tài liệu
  const documentData = [
    {
      id: 1,
      icon: 'file-text',
      title: 'Toán học cấp 3',
      subtitle: 'Bộ tài liệu ôn toán cấp 3',
    },
    {
      id: 2,
      icon: 'file',
      title: 'Toán học cấp 3',
      subtitle: 'Bộ tài liệu ôn toán cấp 3',
    },
    {
      id: 3,
      icon: 'bookmark',
      title: 'Toán học cấp 3',
      subtitle: 'Bộ tài liệu ôn toán cấp 3',
    },
  ];

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Danh sách bộ tài liệu{'\n'}Do AI đề xuất cho bạn
        </Text>
        <Icon name="arrow-right" size={24} color={COLORS.text} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {documentData.map(item => (
          <View key={`doc-${item.id}`} style={styles.examCard}>
            <View style={styles.examCardContent}>
              <View style={styles.examImage}>
                <Icon name={item.icon} size={24} color={COLORS.primary} />
              </View>
              <View style={styles.examInfo}>
                <Text style={styles.examTitle}>{item.title}</Text>
                <Text style={styles.examSubtitle}>{item.subtitle}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.examButton}>
              <Text style={styles.examButtonText}>Ôn ngay</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: SIZES.extraLarge,
    paddingHorizontal: SIZES.large,
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
  examCard: {
    width: 312,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 8,
    marginRight: SIZES.medium,
  },
  examCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  examImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: COLORS.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  examInfo: {
    flex: 1,
  },
  examTitle: {
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
  },
  examSubtitle: {
    fontSize: 11,
    fontFamily: FONTS.regular,
    color: '#4C5665',
  },
  examButton: {
    backgroundColor: 'rgba(195, 226, 255, 0.5)',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  examButtonText: {
    fontSize: 10,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
});

export default DocumentList;

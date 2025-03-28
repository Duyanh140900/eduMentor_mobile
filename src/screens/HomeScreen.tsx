import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {COLORS} from '@/constants/theme';
import Header from '@/components/screen/Header';
import FeaturedNews from '@/components/home/FeaturedNews';
import ExamList from '@/components/home/ExamList';
import DocumentList from '@/components/home/DocumentList';
import TeacherList from '@/components/home/TeacherList';
import UpgradeBanner from '@/components/home/UpgradeBanner';
import LayoutMain from '@/layouts/LayoutMain';

const HomeScreen: React.FC = () => {
  return (
    <LayoutMain bg={COLORS.background}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <FeaturedNews />
        <ExamList />
        <DocumentList />
        <TeacherList />
        <UpgradeBanner />
      </ScrollView>
    </LayoutMain>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.background,
  },
});

export default HomeScreen;

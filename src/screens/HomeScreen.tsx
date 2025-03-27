import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {COLORS} from '@/constants/theme';
import Header from '@/components/screen/Header';
import FeaturedNews from '@/components/home/FeaturedNews';
import ExamList from '@/components/home/ExamList';
import DocumentList from '@/components/home/DocumentList';
import TeacherList from '@/components/home/TeacherList';
import UpgradeBanner from '@/components/home/UpgradeBanner';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <FeaturedNews />
      <ExamList />
      <DocumentList />
      <TeacherList />
      <UpgradeBanner />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

export default HomeScreen;

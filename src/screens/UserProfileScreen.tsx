import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import UserProfile from '../components/UserProfile';

// Tham số định tuyến (nếu có)
interface UserProfileScreenProps {
  route?: {
    params?: {
      userId?: number;
    };
  };
}

const UserProfileScreen: React.FC<UserProfileScreenProps> = ({route}) => {
  // Lấy userId từ tham số định tuyến hoặc sử dụng một userId mặc định
  const userId = route?.params?.userId || 1; // Giá trị mặc định là 1

  return (
    <SafeAreaView style={styles.container}>
      <UserProfile userId={userId} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default UserProfileScreen;

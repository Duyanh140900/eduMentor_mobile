import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';
import {useAppDispatch, useAppSelector} from '../hooks/useRedux';
import {fetchUser, updateUser, logoutUser} from '../store/slices/userSlice';

interface UserProfileProps {
  userId: number;
}

const UserProfile: React.FC<UserProfileProps> = ({userId}) => {
  const dispatch = useAppDispatch();
  const {user, isLoading, error} = useAppSelector(state => state.user);

  useEffect(() => {
    // Lấy thông tin người dùng khi component mount
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  const handleUpdateUser = () => {
    // Ví dụ cập nhật tên người dùng
    dispatch(
      updateUser({
        userId: userId,
        userData: {
          name: 'Tên đã cập nhật',
        },
      }),
    );
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <Button title="Thử lại" onPress={() => dispatch(fetchUser(userId))} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.title}>Thông tin người dùng</Text>
          <Text style={styles.text}>ID: {user.id}</Text>
          <Text style={styles.text}>Tên: {user.name}</Text>
          <Text style={styles.text}>Email: {user.email}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Cập nhật thông tin" onPress={handleUpdateUser} />
            <View style={styles.buttonSpacer} />
            <Button title="Đăng xuất" onPress={handleLogout} color="#ff0000" />
          </View>
        </>
      ) : (
        <Text style={styles.text}>Không có dữ liệu người dùng</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 24,
  },
  buttonSpacer: {
    height: 16,
  },
});

export default UserProfile;

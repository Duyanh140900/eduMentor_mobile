import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import api from '../../services/api';

// Định nghĩa kiểu dữ liệu
interface User {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

// Trạng thái ban đầu
const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

// Async thunk action để lấy thông tin người dùng
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId: number, {rejectWithValue}) => {
    try {
      const response = await api.get<User>(`/users/${userId}`);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.message || 'Không thể lấy thông tin người dùng',
      );
    }
  },
);

// Async thunk action để cập nhật thông tin người dùng
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (
    {userId, userData}: {userId: number; userData: Partial<User>},
    {rejectWithValue},
  ) => {
    try {
      const response = await api.put<User>(`/users/${userId}`, userData);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.message || 'Không thể cập nhật thông tin người dùng',
      );
    }
  },
);

// Tạo slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Thêm các reducers thường (không phải async) tại đây
    logoutUser: state => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      // Xử lý fetchUser
      .addCase(fetchUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Xử lý updateUser
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

// Export actions
export const {logoutUser} = userSlice.actions;

// Export reducer
export default userSlice.reducer;

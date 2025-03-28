import {combineReducers} from '@reduxjs/toolkit';
// Import các reducers của bạn ở đây
import userReducer from './slices/userSlice';
// import authReducer from './slices/authSlice';

// Khi bạn chưa có bất kỳ reducer nào, bạn có thể bắt đầu với một đối tượng rỗng
const rootReducer = combineReducers({
  // Thêm các reducers của bạn ở đây
  user: userReducer,
  // auth: authReducer,
});

export default rootReducer;

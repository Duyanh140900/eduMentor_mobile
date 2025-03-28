import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

// Tạo navigationRef để có thể truy cập bên ngoài các component
export const navigationRef = createNavigationContainerRef();

// Kiểm tra xem navigation có sẵn sàng không
export const isNavigationReady = (): boolean => {
  return navigationRef.isReady();
};

// Chuyển đến màn hình mới và xóa màn hình trước đó khỏi stack
export const navigateAndReset = (name: string, params?: any): void => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name, params}],
      }),
    );
  }
};

// Chuyển đến màn hình mới
export const navigate = (name: string, params?: any): void => {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(name, params);
  }
};

// Quay lại màn hình trước đó
export const goBack = (): void => {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
};

// Chuyển đến màn hình mới và thay thế màn hình hiện tại
export const replace = (name: string, params?: any): void => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
};

// Push màn hình mới vào stack
export const push = (name: string, params?: any): void => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
};

// Lấy tên màn hình hiện tại
export const getCurrentRoute = () => {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute();
  }
  return null;
};

// Pop số lượng màn hình khỏi stack
export const pop = (count: number = 1): void => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count));
  }
};

// Quay về màn hình đầu tiên trong stack
export const popToTop = (): void => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
};

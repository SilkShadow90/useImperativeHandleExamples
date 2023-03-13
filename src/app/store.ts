import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import segmentControl1Reducer, { segmentControl1 } from './slices/segmentControl1Slice';
import segmentControl2Reducer, { segmentControl2 } from './slices/segmentControl2Slice';
import segmentControl3Reducer, { segmentControl3 } from './slices/segmentControl3Slice';

export const store = configureStore({
  reducer: {
    [segmentControl1]: segmentControl1Reducer,
    [segmentControl2]: segmentControl2Reducer,
    [segmentControl3]: segmentControl3Reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

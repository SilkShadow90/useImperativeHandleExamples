import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { SegmentControlState } from '../types';
import { segmentControlList } from '../../features/segmentControl/mockData';

export const segmentControl1 = 'segmentControl1'

const initialState: SegmentControlState = {
  index: 0,
  list: segmentControlList,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const segmentControl1Slice = createSlice({
  name: segmentControl1,
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    controlHandle: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    }
  },
});

export const { controlHandle } = segmentControl1Slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSegmentControlIndex = (state: RootState) => state[segmentControl1].index;

export const selectSegmentControlList = (state: RootState) => state[segmentControl1].list;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default segmentControl1Slice.reducer;

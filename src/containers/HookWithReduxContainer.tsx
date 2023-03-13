import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { SegmentControlHookWithRedux } from '../features/segmentControl/SegmentControlHookWithRedux';

import {
  controlHandle,
  selectSegmentControlIndex,
  selectSegmentControlList,
} from '../app/slices/segmentControl3Slice';
import { SegmentNavigator } from '../features/segmentControl/components/SegmentNavigator';

export const HookWithReduxContainer = React.memo(() => {
  const dispatch = useAppDispatch();
  const controlIndex = useAppSelector(selectSegmentControlIndex);
  const list = useAppSelector(selectSegmentControlList);

  const setIndex = useCallback((index: number) => () => {
    dispatch(controlHandle(index))
  }, [dispatch])

  return (
    <div>
      <h3>Hook with redux segment control</h3>
      <SegmentControlHookWithRedux />

      <SegmentNavigator
        list={list}
        activeIndex={controlIndex}
        onChange={setIndex}
      />
    </div>
  )
})

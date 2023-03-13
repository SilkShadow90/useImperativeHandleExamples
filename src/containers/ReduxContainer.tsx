import React, { useCallback } from 'react';
import { SegmentControl1Redux } from '../features/segmentControl/SegmentControl1Redux';
import { SegmentControl2Redux } from '../features/segmentControl/SegmentControl2Redux';
import { useAppDispatch, useAppSelector } from '../app/hooks';

import {
  controlHandle,
  selectSegmentControlIndex,
  selectSegmentControlList,
} from '../app/slices/segmentControl2Slice';
import { SegmentNavigator } from '../features/segmentControl/components/SegmentNavigator';

export const ReduxContainer = React.memo(() => {
  const dispatch = useAppDispatch();
  const controlIndex = useAppSelector(selectSegmentControlIndex);
  const list = useAppSelector(selectSegmentControlList);

  const setIndex = useCallback((index: number) => () => {
    dispatch(controlHandle(index))
  }, [dispatch])

  return (
    <div>
      <h3>Redux segment control</h3>
      <SegmentControl1Redux />

      <SegmentControl2Redux />
      <SegmentControl2Redux />

      <SegmentNavigator list={list} activeIndex={controlIndex} onChange={setIndex} />
    </div>
  )
})

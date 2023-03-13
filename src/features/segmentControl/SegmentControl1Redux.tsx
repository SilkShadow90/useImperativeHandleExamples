import React, { useCallback } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  controlHandle,
  selectSegmentControlIndex,
  selectSegmentControlList,
} from '../../app/slices/segmentControl1Slice';
import { SegmentControl } from './SegmentControl';

export function SegmentControl1Redux() {
  const dispatch = useAppDispatch();
  const controlIndex = useAppSelector(selectSegmentControlIndex);
  const list = useAppSelector(selectSegmentControlList);

  const setIndex = useCallback((index: number) => {
    dispatch(controlHandle(index))
  }, [dispatch])

  return (
    <SegmentControl
      list={list}
      currentIndex={controlIndex}
      onChange={setIndex}
      withNavigator
    />
  );
}

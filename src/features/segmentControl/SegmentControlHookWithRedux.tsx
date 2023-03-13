import React, { useCallback, useLayoutEffect, useRef } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  controlHandle,
  selectSegmentControlIndex,
  selectSegmentControlList,
} from '../../app/slices/segmentControl3Slice';
import { RefSegmentControlAttributes, SegmentControlHook } from './SegmentControlHook';

export const SegmentControlHookWithRedux = React.memo(() => {
  const dispatch = useAppDispatch();
  const controlIndex = useAppSelector(selectSegmentControlIndex);
  const list = useAppSelector(selectSegmentControlList);

  const segmentRef = useRef<RefSegmentControlAttributes>(null)

  const handle = useCallback((index: number) => {
    dispatch(controlHandle(index))
  }, [dispatch])

  useLayoutEffect(() => {
    segmentRef.current?.setIndex(controlIndex)
  }, [controlIndex])

  return (
    <SegmentControlHook callback={handle} ref={segmentRef} list={list} />
  )
})

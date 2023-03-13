import React, { useCallback, useRef } from 'react';
import { segmentControlList } from '../features/segmentControl/mockData';
import { RefSegmentControlAttributes, SegmentControlHook } from '../features/segmentControl/SegmentControlHook';
import { useForceUpdate } from '../app/hooks';
import { SegmentNavigator } from '../features/segmentControl/components/SegmentNavigator';

export const HookContainer = React.memo(() => {
  // const firstSegmentRef = useRef<RefSegmentControlAttributes>(null)
  const secondSegmentRef = useRef<RefSegmentControlAttributes>(null)

  const forceUpdate = useForceUpdate()

  const setSecondSegmentIndex = useCallback((index: number) => () => {
    secondSegmentRef.current?.setIndex(index)
  }, []);

  return (
    <div>
      <h3>Hook segment control</h3>
      <SegmentControlHook
        list={segmentControlList}
        // ref={firstSegmentRef}
        // callback={forceUpdate}
        withNavigator
      />

      <SegmentControlHook
        list={segmentControlList}
        ref={secondSegmentRef}
        callback={forceUpdate}
      />

      <SegmentNavigator
        list={segmentControlList}
        activeIndex={secondSegmentRef.current?.index || 0}
        onChange={setSecondSegmentIndex}
      />
    </div>
  )
})

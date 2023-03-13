import React, { useCallback, useState } from 'react';
import { segmentControlList } from '../features/segmentControl/mockData';
import { SegmentControlWithState } from '../features/segmentControl/SegmentControlWithState';
import { SegmentNavigator } from '../features/segmentControl/components/SegmentNavigator';

export const PropsWithStateContainer = React.memo(() => {
  const [propsWithStateSegment, setPropsWithStateSegment] = useState(0)

  const onChange = useCallback((index: number) => () => {
    setPropsWithStateSegment(index)
  }, [])

  return (
    <div>
      <h3>Props with State segment control</h3>
      <span>all props</span>
      <SegmentControlWithState
        list={segmentControlList}
        currentIndex={propsWithStateSegment}
        onChange={setPropsWithStateSegment}
      />
      <span>only currentIndex</span>
      <SegmentControlWithState list={segmentControlList} currentIndex={propsWithStateSegment} />
      <span>only onChange</span>
      <SegmentControlWithState list={segmentControlList} onChange={setPropsWithStateSegment} />
      <span>without props</span>
      <SegmentControlWithState list={segmentControlList} />

      <SegmentNavigator list={segmentControlList} onChange={onChange} activeIndex={propsWithStateSegment} />
    </div>
  )
})

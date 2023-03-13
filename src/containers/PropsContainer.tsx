import React, { useState } from 'react';
import { segmentControlList } from '../features/segmentControl/mockData';
import { SegmentControl } from '../features/segmentControl/SegmentControl';

export const PropsContainer = React.memo(() => {
  const [firstSegment, setFirstSegment] = useState(0)
  const [secondSegment, setSecondSegment] = useState(0)

  return (
    <div>
      <h3>Props segment control</h3>
      <SegmentControl
        list={segmentControlList}
        currentIndex={firstSegment}
        onChange={setFirstSegment}
      />

      <SegmentControl
        list={segmentControlList}
        currentIndex={secondSegment}
        onChange={setSecondSegment}
        withNavigator
      />
    </div>
  )
})

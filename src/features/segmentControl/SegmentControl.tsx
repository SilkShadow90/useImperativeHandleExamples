import React, { useCallback } from 'react';

import { SegmentLayout } from './components/SegmentLayout';
import { SegmentItem } from './components/SegmentItem';
import { SegmentNavigator } from './components/SegmentNavigator';

type Props = {
  currentIndex: number;
  onChange(index: number): void;
  list: string[];
  withNavigator?: boolean
}

export const SegmentControl = ({ currentIndex, onChange, list, withNavigator }: Props) => {
  const setIndex = useCallback((index: number) => () => {
    onChange(index)
  }, [onChange])

  return (
    <div className="block">
      <SegmentLayout>
        {list.map((item, index) => (
          <SegmentItem
            key={item}
            value={item}
            isActive={currentIndex === index}
            onClick={setIndex(index)}
          />
        ))}
      </SegmentLayout>
      {!!withNavigator && (
        <SegmentNavigator onChange={setIndex} list={list} activeIndex={currentIndex} />
      )}
    </div>
  )
}

import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

import { SegmentControl } from './SegmentControl';

type Props = {
  list: string[]
  initialIndex?: number
  callback?(index: number): void
  withNavigator?: boolean
}

export type RefSegmentControlAttributes = {
  index: number
  setIndex(index: number): void
}

export const SegmentControlHook = forwardRef<RefSegmentControlAttributes, Props>(
  ({ initialIndex = 0, callback, list, withNavigator }, ref,
  ) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
      callback?.(currentIndex)
    }, [callback, currentIndex])

    useImperativeHandle(ref, () => ({
      index: currentIndex,
      setIndex: (index: number) => {
        setCurrentIndex(index);
      },
    }), [currentIndex]);

    return (
      <SegmentControl
        list={list}
        currentIndex={currentIndex}
        onChange={setCurrentIndex}
        withNavigator={withNavigator}
      />
    );
  });

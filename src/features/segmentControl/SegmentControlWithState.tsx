import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';

import { SegmentControl } from './SegmentControl';

type Props = {
  list: string[]
  currentIndex?: number
  onChange?(index: number): void
}

export function SegmentControlWithState({ list, currentIndex: currentIndexProps = 0, onChange }: Props) {
  const [currentIndex, setCurrentIndex] = useState(currentIndexProps);

  useLayoutEffect(() => {
    setCurrentIndex(currentIndexProps)
  }, [currentIndexProps])

  useEffect(() => {
    onChange?.(currentIndex)
  }, [onChange, currentIndex])

  const setIndex = useCallback((index: number) => setCurrentIndex(index), [])

  return (
    <SegmentControl currentIndex={currentIndex} onChange={setIndex} list={list} />
  )
}

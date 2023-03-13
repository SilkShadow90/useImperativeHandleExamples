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
import { Row } from '../features/UIKit/Row';
import { Flex } from '../features/UIKit/Flex';
import { Block } from '../features/UIKit/Block';
import {
  codeReduxContainer,
  codeSegmentControl1Redux,
  codeSegmentControl2Redux,
} from '../examples';
import { CodeHighlighter } from '../features/codeHighlighter/CodeHighlighter';

export const ReduxContainer = React.memo(() => {
  const dispatch = useAppDispatch();
  const controlIndex = useAppSelector(selectSegmentControlIndex);
  const list = useAppSelector(selectSegmentControlList);

  const setIndex = useCallback((index: number) => () => {
    dispatch(controlHandle(index))
  }, [dispatch])

  return (
    <Flex stretch>
      <Row stretch>
        <Block size={30}>
          <h3>Redux segment control</h3>
          <SegmentControl1Redux />

          <SegmentControl2Redux />
          <SegmentControl2Redux />

          <SegmentNavigator list={list} activeIndex={controlIndex} onChange={setIndex} />
        </Block>
        <Block size={70}>
          <CodeHighlighter code={codeSegmentControl1Redux} />
          <CodeHighlighter code={codeSegmentControl2Redux} />
        </Block>
      </Row>
      <CodeHighlighter code={codeReduxContainer} />
    </Flex>
  )
})

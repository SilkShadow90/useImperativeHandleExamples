import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { SegmentControlHookWithRedux } from '../features/segmentControl/SegmentControlHookWithRedux';

import {
  controlHandle,
  selectSegmentControlIndex,
  selectSegmentControlList,
} from '../app/slices/segmentControl3Slice';
import { SegmentNavigator } from '../features/segmentControl/components/SegmentNavigator';
import { Flex } from '../features/UIKit/Flex';
import { Row } from '../features/UIKit/Row';
import { Block } from '../features/UIKit/Block';
import { CodeHighlighter } from '../features/codeHighlighter/CodeHighlighter';
import { codeHookWithReduxContainer, codeSegmentControlHookWithRedux } from '../examples';

export const HookWithReduxContainer = React.memo(() => {
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
          <h3>Hook with redux segment control</h3>
          <SegmentControlHookWithRedux />

          <SegmentNavigator
            list={list}
            activeIndex={controlIndex}
            onChange={setIndex}
          />
        </Block>
        <Block size={70}>
          <CodeHighlighter code={codeSegmentControlHookWithRedux} />
        </Block>
      </Row>
      <CodeHighlighter code={codeHookWithReduxContainer} />
    </Flex>
  )
})

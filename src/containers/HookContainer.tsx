import React, { useCallback, useRef } from 'react';
import { segmentControlList } from '../features/segmentControl/mockData';
import { RefSegmentControlAttributes, SegmentControlHook } from '../features/segmentControl/SegmentControlHook';
import { useForceUpdate } from '../app/hooks';
import { SegmentNavigator } from '../features/segmentControl/components/SegmentNavigator';
import { Row } from '../features/UIKit/Row';
import { Flex } from '../features/UIKit/Flex';
import { Block } from '../features/UIKit/Block';
import { codeHookContainer, codeSegmentControlHook } from '../examples';
import { CodeHighlighter } from '../features/codeHighlighter/CodeHighlighter';

export const HookContainer = React.memo(() => {
  // const firstSegmentRef = useRef<RefSegmentControlAttributes>(null)
  const secondSegmentRef = useRef<RefSegmentControlAttributes>(null)

  const forceUpdate = useForceUpdate()

  const setSecondSegmentIndex = useCallback((index: number) => () => {
    secondSegmentRef.current?.setIndex(index)
  }, []);

  return (
    <Flex stretch>
      <Row stretch>
        <Block size={30}>
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
        </Block>
        <Block size={70}>
          <CodeHighlighter code={codeSegmentControlHook} />
        </Block>
      </Row>
      <CodeHighlighter code={codeHookContainer} />
    </Flex>
  )
})

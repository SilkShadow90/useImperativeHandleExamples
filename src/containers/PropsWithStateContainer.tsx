import React, { useCallback, useState } from 'react';
import { segmentControlList } from '../features/segmentControl/mockData';
import { SegmentControlWithState } from '../features/segmentControl/SegmentControlWithState';
import { SegmentNavigator } from '../features/segmentControl/components/SegmentNavigator';
import { Flex } from '../features/UIKit/Flex';
import { CodeHighlighter } from '../features/codeHighlighter/CodeHighlighter';
import { Block } from '../features/UIKit/Block';
import { Row } from '../features/UIKit/Row';
import {
  codePropsWithStateContainer,
  codeSegmentControlWithState,
  codeSegmentNavigator,
} from '../examples';

export const PropsWithStateContainer = React.memo(() => {
  const [propsWithStateSegment, setPropsWithStateSegment] = useState(0)

  const onChange = useCallback((index: number) => () => {
    setPropsWithStateSegment(index)
  }, [])

  return (
    <Flex stretch>
      <Row stretch>
        <Block size={30}>
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
        </Block>
        <Block size={70}>
          <CodeHighlighter code={codeSegmentControlWithState} />
          <CodeHighlighter code={codeSegmentNavigator} />
        </Block>
      </Row>
      <CodeHighlighter code={codePropsWithStateContainer} />
    </Flex>
  )
})

import React, { useState } from 'react';
import { segmentControlList } from '../features/segmentControl/mockData';
import { SegmentControl } from '../features/segmentControl/SegmentControl';
import { codePropsContainer, codeSegmentControl } from '../examples';
import { CodeHighlighter } from '../features/codeHighlighter/CodeHighlighter';
import { Flex } from '../features/UIKit/Flex';
import { Row } from '../features/UIKit/Row';
import { Block } from '../features/UIKit/Block';

export const PropsContainer = React.memo(() => {
  const [firstSegment, setFirstSegment] = useState(0);
  const [secondSegment, setSecondSegment] = useState(0);

  return (
    <Flex stretch>
      <Row stretch>
        <Block size={30}>
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
        </Block>
        <Block size={70}>
          <CodeHighlighter code={codeSegmentControl} />
        </Block>
      </Row>
      <CodeHighlighter code={codePropsContainer} />
    </Flex>
  )
})

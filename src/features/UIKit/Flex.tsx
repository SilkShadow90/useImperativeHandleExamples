import React, { PropsWithChildren } from 'react';

type Props = {
  stretch?: boolean
}

export const Flex = ({ children, stretch }: PropsWithChildren<Props>) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, width: stretch ? '100%' : 'auto' }}>
      {children}
    </div>
  )
}

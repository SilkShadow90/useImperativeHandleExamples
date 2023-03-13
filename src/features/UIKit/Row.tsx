import React, { PropsWithChildren } from 'react';

type Props = {
  stretch?: boolean
}

export const Row = ({ children, stretch }: PropsWithChildren<Props>) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flex: '1 1 auto', width: stretch ? '100%' : 'auto' }}>
      {children}
    </div>
  )
}

import React, { PropsWithChildren } from 'react';

type Props = {
  size: number
}

export const Block = ({ children, size }: PropsWithChildren<Props>) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: `1 1 ${size}%` }}>
      {children}
    </div>
  )
}

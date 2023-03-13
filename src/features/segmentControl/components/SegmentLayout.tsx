import React, { PropsWithChildren } from 'react';
import styles from '../SegmentControl.module.css';

export const SegmentLayout = React.memo(({ children }: PropsWithChildren) => (
  <div className={styles.row}>
    {children}
  </div>
))

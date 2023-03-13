import React from 'react';
import styles from '../SegmentControl.module.css';

type Props = {
  value: string;
  isActive: boolean;
  onClick(): void;
}

export const SegmentItem = React.memo(({ isActive, value, onClick }: Props) => (
  <button
    className={isActive ? styles.buttonActive : styles.button}
    onClick={onClick}
  >
    {value}
  </button>
))

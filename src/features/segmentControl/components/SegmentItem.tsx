import React from 'react';
import styles from '../SegmentControl.module.css';

type Props = {
  value: string;
  isActive: boolean;
  onClick(): void;
  widthItem?: number
}

export const SegmentItem = React.memo(({ isActive, value, onClick, widthItem }: Props) => (
  <button
    className={isActive ? styles.buttonActive : styles.button}
    style={!!widthItem ? { width: `${widthItem}px` } : {}}
    onClick={onClick}
  >
    {value}
  </button>
))

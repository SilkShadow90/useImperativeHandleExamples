import React from 'react';

type Props = {
  list: string[];
  activeIndex: number;
  onChange(index: number): () => void;
}

export const SegmentNavigator = React.memo(({ list, activeIndex, onChange }: Props) => {
  return (
    <div className="row">
      <span>index: {activeIndex}</span>
      <div>
        {list.map((item, index) => (
          <button key={item} disabled={activeIndex === index} onClick={onChange(index)}>{index}</button>
        ))}
      </div>
    </div>
  )
})

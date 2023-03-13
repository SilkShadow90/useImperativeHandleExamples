export const codeSegmentControl = `
  export const SegmentControl = ({ 
      currentIndex,
      onChange,
      list,
      withNavigator,
    }) => {

    const setIndex = useCallback((index: number) => () => {
      onChange(index)
    }, [onChange]);
  
    return (
      <>
        <SegmentLayout>
          {list.map((item, index) => (
            <SegmentItem
              key={item}
              value={item}
              isActive={currentIndex === index}
              onClick={setIndex(index)}
            />
          ))}
        </SegmentLayout>
        {!!withNavigator && (
          <SegmentNavigator onChange={setIndex} list={list} activeIndex={currentIndex} />
        )}
      </>
    )
  }
`;

export const codePropsContainer = `
  const [firstSegment, setFirstSegment] = useState(0);
  const [secondSegment, setSecondSegment] = useState(0);
  
  return (
    <>
      <SegmentControl list={segmentControlList} currentIndex={firstSegment} onChange={setFirstSegment} />
      <SegmentControl list={segmentControlList} currentIndex={secondSegment} onChange={setSecondSegment} withNavigator />
    </>
  )
`;

export const codeSegmentNavigator = `
  export const SegmentNavigator = React.memo(({ 
    list,
    activeIndex,
    onChange,
  }) => {
    return (
      <>
        <span>index: {activeIndex}</span>
        <div>
          {list.map((item, index) => (
            <button
              key={item}
              disabled={activeIndex === index}
              onClick={onChange(index)}
            >
              {index}
            </button>
          ))}
        </div>
      </>
    )
  })
`;

export const codeSegmentControlWithState = `
  export function SegmentControlWithState({
    list,
    currentIndex: currentIndexProps = 0,
    onChange,
  }) {
    const [currentIndex, setCurrentIndex] = useState(currentIndexProps);

    useLayoutEffect(() => {
      setCurrentIndex(currentIndexProps)
    }, [currentIndexProps]);
  
    useEffect(() => {
      onChange?.(currentIndex)
    }, [onChange, currentIndex]);
  
    const setIndex = useCallback((index: number) => setCurrentIndex(index), []);
  
    return (
      <SegmentControl currentIndex={currentIndex} onChange={setIndex} list={list} />
    )
  }
`;

export const codePropsWithStateContainer = `
  const [propsWithStateSegment, setPropsWithStateSegment] = useState(0);
  
  const onChange = useCallback((index: number) => () => {
    setPropsWithStateSegment(index)
  }, []);
  
  return (
    <>
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
    </>
  )
`;

export const codeSegmentControl1Redux = `
  import {
    controlHandle,
    selectSegmentControlIndex,
    selectSegmentControlList,
  } from '../../app/slices/segmentControl1Slice';

  export function SegmentControl1Redux() {
    const dispatch = useAppDispatch();
    const controlIndex = useAppSelector(selectSegmentControlIndex);
    const list = useAppSelector(selectSegmentControlList);
  
    const setIndex = useCallback((index: number) => {
      dispatch(controlHandle(index))
    }, [dispatch])
  
    return (
      <SegmentControl
        list={list}
        currentIndex={controlIndex}
        onChange={setIndex}
        withNavigator
      />
    );
  }
`;

export const codeSegmentControl2Redux = `
  import {
    controlHandle,
    selectSegmentControlIndex,
    selectSegmentControlList,
  } from '../../app/slices/segmentControl2Slice';

  export function SegmentControl2Redux() {
    const dispatch = useAppDispatch();
    const controlIndex = useAppSelector(selectSegmentControlIndex);
    const list = useAppSelector(selectSegmentControlList);
  
    const setIndex = useCallback((index: number) => {
      dispatch(controlHandle(index))
    }, [dispatch])
  
    return (
      <SegmentControl
        list={list}
        currentIndex={controlIndex}
        onChange={setIndex}
      />
    );
  }
`;

export const codeReduxContainer = `
const dispatch = useAppDispatch();
  const controlIndex = useAppSelector(selectSegmentControlIndex);
  const list = useAppSelector(selectSegmentControlList);

  const setIndex = useCallback((index: number) => () => {
    dispatch(controlHandle(index))
  }, [dispatch])

  return (
    <>
      <SegmentControl1Redux />

      <SegmentControl2Redux />
      <SegmentControl2Redux />

      <SegmentNavigator list={list} activeIndex={controlIndex} onChange={setIndex} />
    </>
  )
`;

export const codeSegmentControlHook = `
  export const SegmentControlHook = forwardRef(
    ({ initialIndex = 0, callback, list, withNavigator }, ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
      callback?.(currentIndex)
    }, [callback, currentIndex])

    useImperativeHandle(ref, () => ({
      index: currentIndex,
      setIndex: (index: number) => {
        setCurrentIndex(index);
      }
    }), [currentIndex]);

    return (
      <SegmentControl
        list={list}
        currentIndex={currentIndex}
        onChange={setCurrentIndex}
        withNavigator={withNavigator}
      />
    );
  });
`;

export const codeHookContainer = `
  export const HookContainer = React.memo(() => {
    const secondSegmentRef = useRef<RefSegmentControlAttributes>(null)
  
    const forceUpdate = useForceUpdate()
  
    const setSecondSegmentIndex = useCallback((index: number) => () => {
      secondSegmentRef.current?.setIndex(index)
    }, []);
  
    return (
      <>
        <SegmentControlHook list={segmentControlList} withNavigator />
  
        <SegmentControlHook list={segmentControlList} ref={secondSegmentRef} callback={forceUpdate} />
  
        <SegmentNavigator list={segmentControlList} activeIndex={secondSegmentRef.current?.index || 0} onChange={setSecondSegmentIndex} />
      </>
    )
  })
`;

export const codeSegmentControlHookWithRedux = `
  export const SegmentControlHookWithRedux = React.memo(() => {
    const dispatch = useAppDispatch();
    const controlIndex = useAppSelector(selectSegmentControlIndex);
    const list = useAppSelector(selectSegmentControlList);
  
    const segmentRef = useRef<RefSegmentControlAttributes>(null)
  
    const handle = useCallback((index: number) => {
      dispatch(controlHandle(index))
    }, [dispatch])
  
    useLayoutEffect(() => {
      segmentRef.current?.setIndex(controlIndex)
    }, [controlIndex])
  
    return (
      <SegmentControlHook callback={handle} ref={segmentRef} list={list} />
    )
  })
`;

export const codeHookWithReduxContainer = `
export const HookWithReduxContainer = React.memo(() => {
  const dispatch = useAppDispatch();
  const controlIndex = useAppSelector(selectSegmentControlIndex);
  const list = useAppSelector(selectSegmentControlList);

  const setIndex = useCallback((index: number) => () => {
    dispatch(controlHandle(index))
  }, [dispatch])

  return (
    <>
      <SegmentControlHookWithRedux />

      <SegmentNavigator list={list} activeIndex={controlIndex} onChange={setIndex} />
    </>
  )
})`;

import { useEffect, useState } from 'react';
import useScreenSize from './useScreenSize';

const breakpoints = {
  320: 'S',
  768: 'M',
  1920: 'L'
}

const useBreakpoint = (size) => {
  const [breakpoint, setBreakPoint] = useState(undefined)
  useEffect(()=> {
      if (0 < size && size < 768) {
        setBreakPoint(breakpoints[320])
      }
      if (768 <= size && size < 1920) {
        setBreakPoint(breakpoints[768])
      }
      if (size >= 1920) {
        setBreakPoint(breakpoints[1920])
      }
  }, [size])

  return breakpoint
};

export default useBreakpoint
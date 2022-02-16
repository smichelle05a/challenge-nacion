import { useEffect, useState } from 'react';

function useScreenSize() {
  const [size, setSize] = useState(undefined)

  function handleResize() { setSize(window.innerWidth) }

  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}

export default useScreenSize
import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(1);

  const [isTop, setIsTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [setScrollY]);

  useEffect(() => {
    if (scrollY === 0) return setIsTop(true);
    setIsTop(false);
  }, [scrollY, setIsTop]);

  useEffect(() => {
    if (scrollY === prevScrollY) return;
    if (scrollY < prevScrollY) setScrollDirection('up');
    else setScrollDirection('down');
    setPrevScrollY(scrollY);
  }, [scrollY, setScrollDirection, prevScrollY, setPrevScrollY]);

  return { isTop, scrollDirection, scrollY };
};

import { useState, useEffect, useRef } from 'react';

export default function Animator(props) {
  const [idx, setIdx] = useState(0);
  const direction = useRef(-1);
  const images = props.images
  const interval = props.interval ?? 50
  const turn = props.turn ?? true

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Simulate a pendulum movement, switch control on edge.
      if (turn) {
        if (idx === images.length - 1 || idx === 0) {
          direction.current *= -1;
        }
        setIdx(idx + 1 * direction.current);
      } else {
        let index = idx
        if (index === images.length - 1) {
          index = -1
        }
        setIdx(index + 1)
      }
    }, interval);
    return () => clearTimeout(timeout);
  }, [idx, images.length, interval, turn]);

  return (
    <img src={images[idx]} alt={idx} />
  );
}

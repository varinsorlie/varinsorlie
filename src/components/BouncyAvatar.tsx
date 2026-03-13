import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

export function BouncyAvatar({ src }: { src: string }) {
  const position = useRef(0);
  const velocity = useRef(0);
  const [, rerender] = useState(0);

  const floor = 0;
  const gravity = 0.8;
  const bounce = 0.7;


  useAnimationFrame(() => {
    velocity.current += gravity;
    position.current += velocity.current;

    if (position.current > floor) {
      position.current = floor;
      velocity.current *= -bounce;

      if (Math.abs(velocity.current) < 0.5) {
        velocity.current = 0;
      }
    }
   
    rerender(v => v + 1);
  });

  const launch = () => {
    velocity.current = -15;
  };

  return (
    <motion.div
      onHoverStart={launch}
      animate={{ y: position.current }}
      className="w-20 h-20 rounded-full overflow-hidden border border-border"
    >
      <img src={src} className="w-full h-full object-cover" />
    </motion.div>
  );
}

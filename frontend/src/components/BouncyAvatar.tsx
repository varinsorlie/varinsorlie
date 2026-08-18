import { motion, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function BouncyAvatar({ src, index = 0 }: { src: string; index?: number }) {
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

  const launch = (strength = -15) => {
    velocity.current = strength;
  };

  // Idle nudge: every few seconds, give the avatar a small unprompted hop —
  // staggered by index so they ripple one after another instead of firing
  // in sync. Purely a visual hint that these are tappable, not decorative.
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (velocity.current === 0 && position.current === floor) {
          launch(-9);
        }
      }, 3200);
    }, index * 350);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [index]);

  return (
    <motion.div
      onHoverStart={() => launch()}
      onTapStart={() => launch()}
      animate={{ y: position.current }}
      className="w-24 h-24
      sm:w-32 sm:h-32
      shrink-0
      rounded-full
      overflow-hidden
      border border-border
      cursor-pointer gap-4"
    >
      <img src={src} className="w-full h-full object-cover" />
    </motion.div>
  );
}

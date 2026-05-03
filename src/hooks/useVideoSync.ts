import { useEffect } from "react";
import React from "react";
import { MotionValue } from "motion/react";
import throttle from "lodash.throttle";

export function useVideoSync(scrollYProgress: MotionValue<number>, videoRef: React.RefObject<HTMLVideoElement>) {
  useEffect(() => {
    const updateVideoTime = (v: number) => {
      const video = videoRef.current;
      if (video && video.duration) {
        // Even if readyState is low, we try to set currentTime
        const targetTime = v * video.duration;
        if (Math.abs(video.currentTime - targetTime) > 0.01) {
          video.currentTime = targetTime;
        }
      }
    };

    const throttledUpdate = throttle(updateVideoTime, 16); // Throttle to ~60fps

    // Initial sync
    throttledUpdate(scrollYProgress.get());

    const unsubscribe = scrollYProgress.on("change", throttledUpdate);
    return () => {
      unsubscribe();
      throttledUpdate.cancel();
    };
  }, [scrollYProgress, videoRef]);
}
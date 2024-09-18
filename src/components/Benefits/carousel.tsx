"use client";

import { useEffect, ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type PropType = {
  options?: EmblaOptionsType;
  children: ReactNode;
};

export const EmblaCarousel: React.FC<PropType> = ({ options, children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...options,
      loop: true,
    },
    [AutoScroll({ playOnInit: true, speed: 0.6 })]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = emblaApi.plugins().autoScroll;
    if (autoScroll && !autoScroll.isPlaying()) {
      autoScroll.play();
    }

    return () => {
      if (autoScroll) autoScroll.stop();
    };
  }, [emblaApi]);

  return (
    <div className="embla relative overflow-hidden mt-10">
      <div className="embla__viewport w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-3">{children}</div>
      </div>
    </div>
  );
};

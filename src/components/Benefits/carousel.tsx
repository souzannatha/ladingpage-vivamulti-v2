"use client";

import { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type PropType = {
  videos: string[];
  options?: EmblaOptionsType;
};

export const EmblaCarousel: React.FC<PropType> = ({ videos, options }) => {
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
        <div className="embla__container flex gap-3">
          {videos.map((videoSrc, index) => (
            <div className="embla__slide flex-none w-80 h-60" key={index}>
              <video
                className="w-full h-full object-cover rounded-lg"
                src={videoSrc}
                autoPlay
                muted
                loop
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

type Slide = {
  id: number;
  imageUrl: string;
  headline: string;
  subheadline: string;
};

const Slider = ({ slides }: { slides: Slide[] }) => {
  SwiperCore.use([Autoplay, Navigation])

  const hasSlides = slides && slides.length > 0;

  const fallbackSlides: Slide[] = [
    {
      id: 1,
      imageUrl: '/asset/image/slide1.webp',
      headline: '',
      subheadline: '',
    },
  ];

  const data = hasSlides ? slides : fallbackSlides;

  return (
    <div className='slider-container'>
      <Swiper
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 4000,
        }}
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-screen h-[40rem]">
              <Image
                className='h-[40rem] w-full object-cover'
                src={slide.imageUrl}
                alt={slide.headline || 'slide image'}
                fill
                unoptimized
              />
              {(slide.headline || slide.subheadline) && (
                <div className="absolute inset-0 flex flex-col justify-center items-start px-8 lg:px-24 bg-black/20">
                  {slide.headline && (
                    <h1 className="slide-headline text-3xl lg:text-5xl font-bold text-white drop-shadow-md max-w-xl">
                      {slide.headline}
                    </h1>
                  )}
                  {slide.subheadline && (
                    <p className="slide-subheadline mt-3 text-lg lg:text-2xl text-white/90 max-w-xl">
                      {slide.subheadline}
                    </p>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
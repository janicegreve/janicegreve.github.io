import { useEffect, useLayoutEffect, useRef } from 'react'
import { useParams, Link } from 'react-router'
import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AutoHeight from 'embla-carousel-auto-height'
import { getBooks } from '../utils/bookLoader'
import { BookTitle } from './BookTitle'
import { DynamicIcon } from './DynamicIcon'

export const BookCarousel = () => {
  const { lang } = useParams();
  const lastWakeTime = useRef(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    containScroll: 'trimSnaps',
    watchDrag: true,
    dragFree: true
  },
  [
    Autoplay(),
    AutoHeight()
  ]);

  useEffect(() => {
    var timeout;
    if (emblaApi) {
      timeout = setTimeout(() => { emblaApi.reInit(); }, 100); 
    }

    const onWake = () => {
      const now = Date.now();
      if (now - lastWakeTime.current < 100) return;

      if (document.visibilityState === 'visible' && emblaApi) {
        lastWakeTime.current = now;
        timeout = setTimeout(() => { emblaApi.reInit(); }, 100); 
      }
    };

    window.addEventListener('pageshow', onWake);
    window.addEventListener('load', onWake);
    window.addEventListener('resize', onWake);
    document.addEventListener('visibilitychange', onWake);

    return () => {
      window.removeEventListener('pageshow', onWake);
      window.removeEventListener('load', onWake);
      window.removeEventListener('resize', onWake);
      document.removeEventListener('visibilitychange', onWake);
      if (timeout) clearTimeout(timeout);
    }
  }, [emblaApi]);

  useLayoutEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  const books = getBooks(lang);

  return (
    <div className="embla cursor-grab active:cursor-grabbing touch-pan-y" ref={emblaRef}>
      <div className="embla__container flex gap-8 ml-6">
        {books.map((book, index) => (
          <div
            key={book.id}
            className={clsx(
              "embla__slide relative group min-w-0 transform-gpu",
              "flex-[0_0_80%] min-w-[80%] max-w-[80%]",
              "sm:flex-[0_0_40%] sm:min-w-[40%] sm:max-w-[40%]",
              "lg:flex-[0_0_25%] lg:min-w-[25%] lg:max-w-[25%]",
              `${index === books.length - 1 ? 'mr-8' : 'mr-0'}`
            )}
            style={{ contain: 'layout' }}
          >
            <Link to={`/${lang}/books/${book.id}`} className="">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
              </div>
              <div className={clsx(
                "absolute -top-4 -left-4 text-4xl opacity-0 z-0",
                "group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
              )}>
                <DynamicIcon
                  name={book.icon}
                  color={book.iconColor}
                  className="w-12 h-12 drop-shadow-[4px_4px_3px_rgba(0,0,0,0.6)]"
                />
              </div>
              <div className="mt-4">
                <BookTitle book={book} textClass="text-lg sm:text-base md:text-[9px] lg:text-[8px] text-slate-900" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

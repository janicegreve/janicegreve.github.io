import { useParams, Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import clsx from 'clsx';
import { DynamicIcon } from './DynamicIcon';
import { BookTitle } from './BookTitle';
import { getBooks } from '../utils/bookLoader';

import 'swiper/css';
import 'swiper/css/pagination';

export const BookCarousel = () => {
  const { lang } = useParams();
  const books = getBooks(lang);

  return (
    <div className="w-full min-w-0 h-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1.4}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        breakpoints={{
          768: {
            slidesPerView: 2.5,
            centeredSlides: false,
            spaceBetween: 30,
          }
        }}
        className="w-full overflow-visible! md:overflow-hidden!"
      >
        {[...books, ...books].map((book, index) => (
          <SwiperSlide key={`${book.id}-${index}`} className="flex items-center justify-center group pl-6 pt-8">
            <Link to={`/${lang}/books/${book.id}`} className="">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
              </div>
              <div className={clsx(
                "absolute top-4 left-2 text-4xl opacity-0 z-0",
                "group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
              )}>
                <DynamicIcon
                  name={book.icon}
                  color={book.iconColor}
                  className="w-12 h-12 drop-shadow-[4px_4px_3px_rgba(0,0,0,0.6)]"
                />
              </div>
              <div className="mt-4">
                <BookTitle book={book} textClass="text-base md:text-[8px] text-slate-900" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { getBooks } from '../utils/bookLoader'
import { useParams, Link } from 'react-router'
import { BookTitle } from './BookTitle'

export const BookCarousel = () => {
  const { lang } = useParams()
  const books = getBooks(lang)
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false
  }, [Autoplay()])

  return (
    <div className="embla cursor-grab active:cursor-grabbing" ref={emblaRef}>
      <div className="embla__container flex gap-8 ml-6">
        {books.map((book) => (
          <div className="embla__slide relative group flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_25%]" key={book.id}>
            <Link to={`/${lang}/books/${book.id}`} className="">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -left-4 text-4xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 z-0">
                ✨
              </div>
              <div className="mt-4">
                <BookTitle book={book} textClass="text-lg sm:text-base md:text-[9px] lg:text-[8px] text-slate-900" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

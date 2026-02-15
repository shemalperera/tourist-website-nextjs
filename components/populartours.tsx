import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'

type TourCard = {
  slug: string
  title: string
  rating: number | null
  imageUrl: string
  primaryDestination?: string | null
}

const Populartours = ({ tours }: { tours: TourCard[] }) => {
  return (
    <div>
    <div className="grid grid-cols-1 gap-1 p-8">
        <div className='mx-auto text-4xl p-2'>Popular Tours</div>
        <div className='flex items-center mx-auto text-sm font-semibold text-red-500 hover:text-cyan-700 hover:cursor-pointer'>View all Popular Tours<AiOutlineArrowRight/></div>
        </div>
        <div>
        <div className='grid max-lg:grid-cols-1 lg:grid-cols-3 px-6 justify-center items-center mb-11'>
            {tours.map((tour) => (
              <div
                key={tour.slug}
                className='flex flex-col gap-1 bg-white shadow-lg w-96 h-[460px] overflow-hidden group hover:shadow-2xl transition-shadow duration-300 mx-auto'
              >
                <div className='flex-shrink-0 overflow-hidden'>
                  <Image
                    src={tour.imageUrl}
                    alt={tour.title}
                    width={600}
                    height={300}
                    className='w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                </div>
                <div className='p-4 flex flex-col justify-between h-full'>
                  <div>
                    <Link href={`/tours/${tour.slug}`}>
                      <h3 className='text-lg font-semibold text-blue-900 hover:text-violet-500 cursor-pointer leading-tight'>
                        {tour.title}
                      </h3>
                    </Link>
                    {tour.primaryDestination && (
                      <p className='text-sm text-gray-600 py-1'>
                        Featured destination: {tour.primaryDestination}
                      </p>
                    )}
                  </div>
                  {tour.rating !== null && (
                    <div className='flex justify-between items-center text-sm text-gray-700 mt-2'>
                      <p className='font-semibold text-blue-900'>
                        Rating: <span className='text-pink-600'>{tour.rating.toFixed(1)}</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Populartours
